import { useState } from "react";
import { AuthContext } from "./Context";

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState();

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}