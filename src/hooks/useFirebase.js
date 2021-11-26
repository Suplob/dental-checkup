import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
  const [users, setUsers] = useState({});
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const handleGoogleLogin = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUsers(result.user);
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handlePasswordRegister = (name, email, password) => {
    setName(name);
    if (password.length < 6) {
      setError("Password has to be 6 digit long");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setUsers(userCredential.user);
          setUserName();
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const handlePasswordLogin = (email, password) => {
    setEmail(email);
    setPassword(password);
    if (password.length < 6) {
      setError("Password has to be 6 characters long");
    } else {
      setIsLoading(true);

      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setError("");
        })
        .catch((err) => {
          setError(err.message);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  };

  const handleLogOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUsers({});
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
        setError("");
      } else {
      }
      setIsLoading(false);
    });
  }, [users]);

  return {
    handleGoogleLogin,
    handlePasswordRegister,
    handlePasswordLogin,
    handleLogOut,
    isLoading,
    users,
    error,
  };
};

export default useFirebase;
