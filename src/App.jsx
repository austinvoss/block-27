import React from "react";
import SignupForm from "./components/SignupForm";
import AuthenticateButton from "./components/AuthenticateButton";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <SignupForm />
      <AuthenticateButton />
    </div>
  );
}

export default App;
