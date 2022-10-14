import { Navigate } from "react-router-dom";
import { useContext } from "react";

import UserContext from "./Context";

const Protected = ({ children }) => {
    let ctx = useContext(UserContext);

 if (ctx.activeUser == null ) {
 return <Navigate to="/" />;
 } 
 return children;
};

export default Protected;