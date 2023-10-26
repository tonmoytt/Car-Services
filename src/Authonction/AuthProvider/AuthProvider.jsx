import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../FIREBASE/Firebase.config";


export const AuthConnect = createContext(null)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loder, setLoder] = useState(true)

    const CreateUser = (email, password) => {
        setLoder(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Login = (email, password) => {
        setLoder(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const Google = () => {
        setLoder(true)
        return signInWithPopup(auth, provider)
    }
    const SignOut = () => {
        setLoder(true)
        return signOut(auth)
    }

    // useEffect(() =>{
    //     const unsubscribe= (auth, currentUser =>{
    //         console.log(currentUser);
    //         setUser(currentUser)
    //         setLoder(false)
    //     })
    //     return () =>{
    //         unsubscribe
    //     }
    // },[])

    // eita vul ache documentation dekhe thik koren, eita thik korle kaj korbe asha kori
    useEffect(() => {
        const unsubscribe= onAuthStateChanged(auth, currentUser => {
             console.log('current', currentUser);
             setUser(currentUser)
              setLoder(false)
         })
         return () =>{
             unsubscribe
         }
     }, [])

    // vai ami to vul khuje passci na 3 bar korlam ata 

    


    const AuthInfo = { user, loder, CreateUser, Login, Google, SignOut }
    return (
            <AuthConnect.Provider value={AuthInfo}>
                {children}
            </AuthConnect.Provider>
    );
};

export default AuthProvider;