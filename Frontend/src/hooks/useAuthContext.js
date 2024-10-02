import { authContext } from "../context/authContext";
import { useContext } from "react";


export const useAuthContext = () => {
    const context = useContext(authContext);

    if (!context) {
        throw Error("useAuthContext can only be used inside an AuthContextProvider ")
    }

    return context
}