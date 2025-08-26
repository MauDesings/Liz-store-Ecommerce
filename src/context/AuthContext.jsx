import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../hooks/config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthContext = createContext();

const AuthProvider = ({children})=>{
    const [values,setValues] = useState({email:'', password:''});
    const [user,setUser] = useState(null);
    const [error,setError] = useState('');

    // 1
    function handleInputChange(e) {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    // 2
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);


    // 3
    async function handleSubmit(e,isRegistrando,navigate) {
        e.preventDefault();
        const correo = values.email;
        const password = values.password;

        try {
            if (isRegistrando) {
                const usuarioFirebase = await createUserWithEmailAndPassword(auth,correo,password)
                console.log(usuarioFirebase)
            } else {
                const usuarioFirebase = await signInWithEmailAndPassword(auth,correo,password)
                console.log(usuarioFirebase)
            }

            setError(''); // Limpiamos mensaje de errror
            navigate('/checkout') // Redirigir después de un inicio de sesión o registro exitoso
            setValues({...values,email:'', password:''}) // Limpiamos el formulario

        } catch (error) {
            console.error("Error in handleSubmit:", error);
            handleAuthError(error);
        }
    }

    // 4
    function handleAuthError(error) {
        switch (error.code) {
            case 'auth/email-already-in-use':
                setError('El correo electrónico ya está en uso.');
                break;
            case 'auth/weak-password':
                setError('La contraseña debe tener al menos 6 caracteres.');
                break;
            case 'auth/invalid-email':
                setError('El correo electrónico no es válido.');
                break;
            case 'auth/wrong-password':
                setError('La contraseña es incorrecta.');
                break;
            case 'auth/user-not-found':
                setError('No se encontró una cuenta con este correo.');
                break;
            case 'auth/invalid-credential':
                setError('Las credenciales proporcionadas son inválidas.');
                break;
            default:
                setError('Ocurrió un error. Por favor, inténtalo de nuevo.');
        }
    }

    // 5
    async function handleSignOut(navigate) {
        try {
            await signOut(auth);
            setUser(null);
            navigate('/'); // Redirigir a la página de inicio después de cerrar sesión
        } catch (error) {
            console.error('Error singning out:', error);
        }
    }

    return (
        <AuthContext.Provider value={{values,handleInputChange,user,handleSubmit,error,handleSignOut}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuthContext = ()=> useContext(AuthContext);

export {AuthProvider,useAuthContext};