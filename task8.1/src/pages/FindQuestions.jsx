import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function FindQuestions() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);
  const [filters, setFilters] = useState({
    title: '',
    tag: '',
    date: ''
  });

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const questionsSnapshot = await getDocs(collection(db, 'questions'));
      setQuestions(questionsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
    setLoading(false);
  };

  const deleteQuestion = async (id) => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      try {
        await deleteDoc(doc(db, 'questions', id));
        setQuestions(questions.filter(q => q.id !== id));
        if (expandedId === id) setExpandedId(null);
      } catch (error) {
        console.error("Error deleting question:", error);
        alert('Error deleting question');
      }
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'No date';
    return timestamp.toDate ? timestamp.toDate().toLocaleDateString() : 'No date';
  };

  const filteredQuestions = questions.filter(question => {
    if (!question) return false;
    const titleMatch = !filters.title || (question.title && question.title.toLowerCase().includes(filters.title.toLowerCase()));
    const tagMatch = !filters.tag || (question.tags && question.tags.toLowerCase().includes(filters.tag.toLowerCase()));
    const dateMatch = !filters.date || (question.createdAt?.toDate && 
      question.createdAt.toDate().toISOString().split('T')[0] === filters.date);
    return titleMatch && tagMatch && dateMatch;
  });

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-3">Filter Questions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Filter by title..."
            value={filters.title}
            onChange={(e) => setFilters({...filters, title: e.target.value})}
            className="border border-gray-300 rounded-lg p-2"
          />
          <input
            type="text"
            placeholder="Filter by tag..."
            value={filters.tag}
            onChange={(e) => setFilters({...filters, tag: e.target.value})}
            className="border border-gray-300 rounded-lg p-2"
          />
          <input
            type="date"
            value={filters.date}
            onChange={(e) => setFilters({...filters, date: e.target.value})}
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Questions ({filteredQuestions.length})</h3>
        <div className="space-y-4">
          {filteredQuestions.map(question => (
            <div key={question.id} className="border border-gray-200 rounded-lg bg-white shadow-sm">
              <div 
                className="p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => setExpandedId(expandedId === question.id ? null : question.id)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-black">{question.title || 'No Title'}</h4>
                    <p className="text-gray-600 mt-1">
                      {question.description && question.description.length > 100 
                        ? question.description.substring(0, 100) + '...' 
                        : question.description || 'No description'}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-sm">
                      {question.tags && (
                        <span className="text-blue-600">Tags: {question.tags}</span>
                      )}
                      <span className="text-gray-500">{formatDate(question.createdAt)}</span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteQuestion(question.id);
                    }}
                    className="ml-4 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
              
              {expandedId === question.id && (
                <div className="border-t border-gray-200 p-4 bg-gray-50">
                  <h5 className="font-semibold mb-2">Full Description:</h5>
                  <p className="text-gray-700">{question.description || 'No description available'}</p>
                  <div className="mt-4 p-3 bg-white rounded border">
                    <p className="text-sm text-gray-600 mb-2">Click here to answer this question or check solutions:</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                      Answer Question
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
          {filteredQuestions.length === 0 && (
            <p className="text-gray-500 text-center py-8">No questions found. Try adding some questions first!</p>
          )}
        </div>
      </div>
    </div>
  );
}
