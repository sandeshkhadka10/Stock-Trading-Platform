import React,{createContext, useState, useEffect} from "react";
import { userVerification } from "../../../../backend/middlewares/AuthMiddleware";


// create the AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() =>{
        fetchUserInfo();
    },[]);

    const fetchUserInfo = async(token) => {
        try{
            const response = await fetch("http://localhost:3002/user",{
                withCredentials: true
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

    const login = (userInfo) => {
        setUser(userInfo);
        setIsAuthenticated(true);
    };

    const logout = async() => {
        try{
            await axios.get("http://localhost:3002/user",{
                withCredentials:true
            });
            setUser(null);
            setIsAuthenticated(false);
        }catch(error){
            console.error("Logout failed: ",error);
        }
    };

    return(
        <AuthContext.Provider value={{isAuthenticated,user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}