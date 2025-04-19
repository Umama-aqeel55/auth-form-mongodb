import React, { useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";


const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="auth-container">
      {isSignup ? (
        <SignupForm switchToLogin={() => setIsSignup(false)} />
      ) : (
        <LoginForm switchToSignup={() => setIsSignup(true)} />
      )}
    </div>
  );
};

export default AuthForm;
