import styles from "./InputKey.module.css";

function InputKey(props) {
  return (
    <div
      data-value={props.value}
      className={`${styles["input-key"]} ${
        props.value === "0" ? styles["input-key-zero"] : ""
      }`}
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
}

export default InputKey;
