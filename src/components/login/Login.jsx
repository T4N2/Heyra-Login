import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import Google from './google';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");

    const loginWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate(".././");
        } catch {
            setNotice("You entered a wrong username or password.");
        }
    }

    return(
        <div className = "flex flex-col items-center justify-center min-h-screen bg-blue-50">
            <div className = "max-w-md p-6 bg-white rounded-md shadow-md">
                <form className = "mt-4">
                    { "" !== notice &&
                        <div className = "alert alert-warning" role = "alert">
                            { notice }    
                        </div>
                    }                  
                    <div className = "form-float mb-3">
                    <label htmlFor = "exampleInputEmail1" className = "block mb-2 text-sm font-medium">Email address</label>
                        <input type = "email" className = "w-full px-3 py-2 border border-gray-300 rounded-md" id = "exampleInputEmail1" aria-describedby = "emailHelp" placeholder = "name@example.com" value = { email } onChange = { (e) => setEmail(e.target.value) }></input>
                        
                    </div>
                    <div className = "mt-4">
                    <label htmlFor = "exampleInputPassword1" className = "block mb-2 text-sm font-medium">Password</label>
                        <input type = "password" className = "w-full px-3 py-2 border border-gray-300 rounded-md" id = "exampleInputPassword1" placeholder = "Password" value = { password } onChange = { (e) => setPassword(e.target.value) }></input>
                        
                    </div>
                    <div className = "mt-6">
                        <button type = "submit" className = "w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick = {(e) => loginWithUsernameAndPassword(e)}>Submit</button>
                    </div>
                    <div className = "mt-3 text-center">
                        <span className="text-blue-500">Need to sign up for an account? <Link className="underline" to = ".././Register">Click here.</Link></span>
                        <Google />
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Login