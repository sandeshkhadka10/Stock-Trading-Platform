import React,{createContext, useState, useEffect} from "react";
import { userVerification } from "../../../../backend/middlewares/AuthMiddleware";


// create the AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() =>{
        // check if the user is already logged in (e.g. check local storage or cookies)
        const token = localStorage.getItem("token");
        if(token){
            // fetch the user information from the server
            fetchUserInfo(token);
        }
    },[]);

    const fetchUserInfo = async(token) => {
        try{
            const response = await fetch("http://localhost:3002/user",{
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });
            const data = await response.json();
            if(data.success){
                setUser(data.existingUser);
                setIsAuthenticated(true);
            }
        }catch(error){
            console.error("Error while fetching user info: ",error);
        }
    };

    const login = (token,userInfo) => {
        localStorage.setItem("token",token);
        setUser(userInfo);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        setIsAuthenticated(false);
    }

    return(
        <AuthContext.Provider value={{isAuthenticated,user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}