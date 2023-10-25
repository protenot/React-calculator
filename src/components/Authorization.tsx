import { UserCredential } from "firebase/auth";
import React, { useState } from "react";
import { authWithEmailAndPassword } from "../firebase/authWithEmailAndPassword";
import { Redirect } from "react-router-dom";
import { Input } from "./input";
import Button from "./button";
import { useHistory } from "react-router-dom";
//import { useAuthContext } from "./AuthContext";

export function Authorization(){
    const [inputEmailValue, setInputEmailValue] = useState<string>("");
    const [inputPasswordValue, setInputPasswordValue] = useState<string>("");
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const history = useHistory();
   
 
    const handleAuthentication = async () => {
        const userCredential: UserCredential | void = await authWithEmailAndPassword(inputEmailValue, inputPasswordValue);
    
        if (userCredential) {
          const email = JSON.stringify(userCredential.user.email);
          setUserEmail(email);
          setIsAuthenticated(true); 
          history.push("/", { userEmail: email,isAuthenticated:true 
        
        });
        }
    
        setInputEmailValue("");
        setInputPasswordValue("");
      }
      return (
        <div>
          {isAuthenticated ? (
            <Redirect to="/" /> 
          ) : (
            <div className="login-page">
          
            <Input
              onInputChange={setInputEmailValue}
              placeholderText={"Input email"}
              labelText="Login"
            />
            <Input
              onInputChange={setInputPasswordValue}
              placeholderText={"Input password"}
              labelText={"Password"}
            />
            <Button onClick={handleAuthentication}>Enter</Button>
          </div>
          )}
        </div>
      );
}