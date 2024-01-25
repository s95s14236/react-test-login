import { useEffect, useId, useRef, useState } from "react";

import styles from "./LabelInput.module.css";

/**
 * Label input component with optional password toggle
 *
 * @param {Object} props - The component properties
 * @param {string} props.label - The label for the input
 * @param {string} [props.className] - Additional class name for styling
 * @param {boolean} [props.isPassword=false] - Flag to indicate if the input is for password, and need to set type="password"
 * @return {JSX.Element} The rendered label input component
 */
export default function LabelInput({ label, className, isPassword = false, ...props }) {
    const id = useId();
    const inputRef = useRef();
    const [isHidePWD, setIsHidePWD] = useState(true);

    useEffect(() => {
        if (isPassword) {
            inputRef.current.type = isHidePWD ? "password" : "text";
        }
    }, [isHidePWD, isPassword]);

    return (
        <div className={styles.labelInput}>
            <label className={styles.label} htmlFor={id}>{label}</label>
            <input className={`${styles.input} ${className}`} id={id} {...props} ref={inputRef} />
            {isPassword && props.type === "password" &&
                <div className={styles.hidePWD}>
                    <label htmlFor="hidePWDIuput">
                        <input id="hidePWDIuput" type="checkbox" checked={!isHidePWD} onChange={() => setIsHidePWD(state => !state)} />
                        Show password
                    </label>

                </div>}
        </div>
    );
}