import React, { useEffect, useState } from "react";

import styles from "./Calculator.module.css";
import ResultBar from "../ResultBar/ResultBar";
import InputKey from "../InputKey/InputKey";
import OperandKey from "../OperandKey/OperandKey";

function Calculator(props) {
  const [firstOp, setFirstOp] = useState("0");
  const [secondOp, setSecondOp] = useState(null);
  const [operator, setOperator] = useState(null);
  const [viewedOp, setView] = useState("0");

  useEffect(() => {
    if (operator && secondOp) setView(secondOp);
    else setView(firstOp);
  });

  function clearAll() {
    setFirstOp("0");
    setSecondOp(null);
    setOperator(null);
    setView(firstOp);
  }

  const onInputHandler = (event) => {
    const clickedInput = event.target.getAttribute("data-value");
    switch (clickedInput) {
      case "AC":
        clearAll();
        break;
      case "+/-":
        if (secondOp) {
          let f = parseFloat(secondOp);
          setSecondOp(`${(f *= -1)}`);
        } else {
          let f = parseFloat(firstOp);
          setFirstOp(`${(f *= -1)}`);
        }
        break;
      case "%":
        if (secondOp && operator) {
          let f = parseFloat(calculate(firstOp, secondOp, operator));
          f /= 100;
          setFirstOp(f.toString());
          setSecondOp(null);
          setOperator(null);
        } else {
          let f = parseFloat(firstOp);
          f /= 100;
          setFirstOp(f.toString());
        }
        break;
      case ".":
        secondOp
          ? setSecondOp(secondOp + clickedInput)
          : setFirstOp(firstOp + clickedInput);
        break;
      default:
        if (operator) {
          !secondOp
            ? setSecondOp(clickedInput)
            : setSecondOp(secondOp + clickedInput);
        } else {
          firstOp === "0"
            ? setFirstOp(clickedInput)
            : setFirstOp(firstOp + clickedInput);
        }
    }
  };

  function calculate(op1str, op2str, operator) {
    const op1 = parseFloat(op1str);
    const op2 = parseFloat(op2str);
    let result = "";
    switch (operator) {
      case "÷":
        result = (op1 / op2).toString();
        break;
      case "x":
        result = (op1 * op2).toString();
        break;
      case "-":
        result = (op1 - op2).toString();
        break;
      case "+":
        result = (op1 + op2).toString();
        break;
      default:
        throw Error("OperandHandler error");
    }
    return result;
  }

  const onOperandHandler = (event) => {
    const clickedInput = event.target.getAttribute("data-value");
    if (clickedInput === "=") {
      if (firstOp && secondOp && operator) {
        setFirstOp(calculate(firstOp, secondOp, operator));
        setSecondOp(null);
        setOperator(null);
      }
    } else {
      if (firstOp && secondOp && operator) {
        setFirstOp(calculate(firstOp, secondOp, operator));
        setSecondOp(null);
      }
      setOperator(clickedInput);
    }
  };

  return (
    <section className={styles["calculator"]}>
      <ResultBar operand={viewedOp} />
      <InputKey value={"AC"} onClick={onInputHandler} />
      <InputKey value={"+/-"} onClick={onInputHandler} />
      <InputKey value={"%"} onClick={onInputHandler} />
      <OperandKey value={"÷"} onClick={onOperandHandler} />
      <InputKey value={"7"} onClick={onInputHandler} />
      <InputKey value={"8"} onClick={onInputHandler} />
      <InputKey value={"9"} onClick={onInputHandler} />
      <OperandKey value={"x"} onClick={onOperandHandler} />
      <InputKey value={"6"} onClick={onInputHandler} />
      <InputKey value={"5"} onClick={onInputHandler} />
      <InputKey value={"4"} onClick={onInputHandler} />
      <OperandKey value={"-"} onClick={onOperandHandler} />
      <InputKey value={"3"} onClick={onInputHandler} />
      <InputKey value={"2"} onClick={onInputHandler} />
      <InputKey value={"1"} onClick={onInputHandler} />
      <OperandKey value={"+"} onClick={onOperandHandler} />
      <InputKey value={"0"} onClick={onInputHandler} />
      <InputKey value={"."} onClick={onInputHandler} />
      <OperandKey value={"="} onClick={onOperandHandler} />
    </section>
  );
}

export default Calculator;
