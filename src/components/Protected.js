import { Navigate } from "react-router-dom";
import { useContext } from "react";

import UserContext from "./Context";

const Protected = ({ children }) => {
    let {activeUser} = useContext(UserContext);

 if (activeUser == null ) {
 return <Navigate to="/" />;
 } 
 return children;
};

export default Protected;