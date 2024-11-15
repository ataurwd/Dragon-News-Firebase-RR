import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';

export const FormContext = createContext(null)

const FIrebaseContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

const googleProvider = new GoogleAuthProvider()
    const handelGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const createUserWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth ,email, password)
    }

    // for user login funtion
    const signInWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // for user loaout funtion
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, []);

    const obj = {
        handelGoogleSignIn,
        createUserWithEmail,
        signInWithEmail,
        signOutUser,
        user,
        loading,
        setUser,
    }
    return (
        <FormContext.Provider value={obj}>
            {children}
        </FormContext.Provider>
    );
};

export default FIrebaseContext;