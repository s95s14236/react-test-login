import { useContext } from "react";
import { NavContext } from "../contexts/Context";

export default function useNavContext() {
    const context = useContext(NavContext);
    return context;
}
