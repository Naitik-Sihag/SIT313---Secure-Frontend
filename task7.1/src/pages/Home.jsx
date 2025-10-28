import { useEffect, useState } from "react";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    const email = localStorage.getItem('userEmail');
    setIsLoggedIn(loggedIn === 'true');
    setUserEmail(email || "");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-white">
      <h1 className="text-3xl font-bold text-black mb-4">
        Welcome to DEV@Deakin
      </h1>
      {isLoggedIn ? (
        <div className="text-center">
          <p className="text-gray-600 mb-2">You are logged in successfully!</p>
          <p className="text-gray-500">Email: {userEmail}</p>
        </div>
      ) : (
        <p className="text-gray-600">Please log in to continue.</p>
      )}
    </div>
  );
}

export default Home;
