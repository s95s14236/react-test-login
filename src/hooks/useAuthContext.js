import { useContext } from "react";
import { AuthContext } from "../contexts/Context";

export default function useAuthContext() {
    const context = useContext(AuthContext);
    return context;
}
