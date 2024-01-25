import styles from "./Button.module.css";

const variants = {
    primary: styles.primaryBtn,
    outline: styles.outlineBtn
};

/**
 * Renders a button component with customizable styles and variant
 *
 * @param {Object} props - The component properties
 * @param {string} [props.className] - Additional class name for styling
 * @param {string} [props.variant="primary"] - "primary" | "outline"
 * @return {JSX.Element} The rendered button component
 */
export default function Button({ className, variant = "primary", ...props }) {
    return <button className={`${styles.btn} ${variants[variant]} ${className}`}  {...props}>{props.children}</button>;
}