import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth(app);
    const createRegister = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const createLogin = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const profileUpdate = (info)=>{
        return updateProfile(auth.currentUser, info)
    }
    const logOut = () => {
        setIsLoading(true);
        return signOut(auth);
    };
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setIsLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, [auth]);

    const authInfo = {
        user,
        isLoading,
        createRegister,
        createLogin,
        logOut,
        profileUpdate,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
};
export default AuthProvider;
