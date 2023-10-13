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
  const [loader,setLoader] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false)
    });
    return () => unsubscribe();
  }, [auth]);
  const googleLogin = () => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  };
  const emailSignUp = (email,password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const emailLogIn = (email,password) => {
    setLoader(true)
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
    loader,
    logOut,
  };
  return <DataProvider.Provider value={data}>{children}</DataProvider.Provider>;
};

export default AuthProvider;
