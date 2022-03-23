import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication, db } from "../firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import LoginWithEmail from "../Components/LoginWithEmail";
import { useNavigate } from "react-router-dom";

function Login() {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const signinWithGoogle = async () => {
    try {
      const res = await signInWithPopup(authentication, provider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          provider: "google",
          email: user.email,
        });
      }

      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };
  return (
    <div className="w-full h-screen overflow-hidden bg-white md:bg-gray-50">
      <div className="w-full h-full flex justify-center items-center">
        <div className=" w-full md:max-w-md h-96 p-10 space-y-4 bg-white rounded-xl md:shadow-lg">
          <h2 className="text-2xl text-blue-500 italic font-medium text-center">
            Stories
          </h2>
          {/* <LoginWithEmail /> */}
          <button
            className="h-10 w-full border border-gray-500 rounded-md text-gray-500 
           hover:bg-gray-500 hover:text-white font-medium tracking-wide text-sm md:text-base"
            onClick={signinWithGoogle}
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
