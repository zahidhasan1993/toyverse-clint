import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const DataProvider = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const emailSignUp = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const emailLogIn = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut = () => {
    return signOut(auth);
  };
  const data = {
    user,
    googleLogin,
    emailSignUp,
    emailLogIn,
    logOut,
  };
  return <DataProvider.Provider value={data}>{children}</DataProvider.Provider>;
};

export default AuthProvider;
