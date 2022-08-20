import { useState } from "react";
import "./App.css";
import Wrapper from "./Components/Wrapper/Wrapper";
import { evaluate } from "mathjs";
import Buttons from "./Components/Buttons";
import Screen from "./Components/Screen";

function App() {
  const [screen, setscreen] = useState([]);

  const oneHendeler = () => {
    setscreen([...screen, 1]);
  };
  const twoHendeler = () => {
    setscreen([...screen, 2]);
  };

  const threeHendeler = () => {
    setscreen([...screen, 3]);
  };
  const fourHendeler = () => {
    setscreen([...screen, 4]);
  };

  const fiveHendeler = () => {
    setscreen([...screen, 5]);
  };
  const sixHendeler = () => {
    setscreen([...screen, 6]);
  };

  const sevenHendeler = () => {
    setscreen([...screen, 7]);
  };
  const eightHendeler = () => {
    setscreen([...screen, 8]);
  };

  const nineHendeler = () => {
    setscreen([...screen, 9]);
  };
  const zeroHendeler = () => {
    setscreen([...screen, 0]);
  };

  const plusHendeler = () => {
    setscreen([...screen, "+"]);
  };
  const minusHendeler = () => {
    setscreen([...screen, "-"]);
  };
  const multHendeler = () => {
    setscreen([...screen, "*"]);
  };
  const divideHendeler = () => {
    setscreen([...screen, "/"]);
  };

  const pointHendeler = () => {
    setscreen([...screen, "."]);
  };
  const equalHendeler = () => {
    const readyEquasion = screen.join("");
    const n = evaluate(readyEquasion);
    setscreen([n]);
  };

  const eraseHendeler = () => {
    setscreen([]);
  };
  return (
    <Wrapper>
      <Screen calculated={screen}></Screen>
      <Buttons
        eraseHendeler={eraseHendeler}
        equalHendeler={equalHendeler}
        pointHendeler={pointHendeler}
        divideHendeler={divideHendeler}
        multHendeler={multHendeler}
        minusHendeler={minusHendeler}
        plusHendeler={plusHendeler}
        zeroHendeler={zeroHendeler}
        nineHendeler={nineHendeler}
        eightHendeler={eightHendeler}
        sevenHendeler={sevenHendeler}
        sixHendeler={sixHendeler}
        fiveHendeler={fiveHendeler}
        fourHendeler={fourHendeler}
        threeHendeler={threeHendeler}
        twoHendeler={twoHendeler}
        oneHendeler={oneHendeler}
      ></Buttons>
    </Wrapper>
  );
}

export default App;
