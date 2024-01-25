import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import LabelInput from "../components/ui/LabelInput";
import useAuthContext from "../hooks/useAuthContext";

import styles from "./Login.module.css";

export default function Login() {
    const { setUser } = useAuthContext();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    useEffect(() => {
        if (formData.username || formData.password) {
            setErrors(prev => ({
                username: formData.username ? '' : prev.username,
                password: formData.password ? '' : prev.password,
            }));
        }
    }, [formData]);

    function validateForm() {
        let isValid = true;
        const newErrors = { ...errors };

        if (!formData.username) {
            newErrors.username = 'Username is required';
            isValid = false;
        } else {
            newErrors.username = '';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else {
            newErrors.password = '';
        }
        setErrors(newErrors);
        return isValid;
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setUser(formData);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div>
                <LabelInput
                    className={`${styles.loginInput} ${errors.username && styles.errorInput}`}
                    name="username"
                    label="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <p className={styles.errorText}>{errors.username}</p>
            </div>
            <div>
                <LabelInput
                    className={`${styles.loginInput} ${errors.password && styles.errorInput}`}
                    name="password"
                    isPassword={true}
                    label="Password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <p className={styles.errorText}>{errors.password}</p>
            </div>
            <Button className={styles.loginBtn} type="submit">Sign In</Button>
        </form>
    );
}