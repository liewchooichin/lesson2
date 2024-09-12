import styles from "./Button.module.css";

export function ProductButton({ label, handleClick }) {
  return (
    <button 
        className={styles.button}
        onClick={handleClick}
    >
        {label}
    </button>
  );
}

