import styles from "./ResultBar.module.css";
function ResultBar(props) {
  return <div id={styles["result-bar"]}>{props.operand}</div>;
}

export default ResultBar;
