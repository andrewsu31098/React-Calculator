import styles from "./OperandKey.module.css";

function OperandKey(props) {
  return (
    <div
      data-value={props.value}
      onClick={props.onClick}
      className={styles["operand-key"]}
    >
      {props.value}
    </div>
  );
}

export default OperandKey;
