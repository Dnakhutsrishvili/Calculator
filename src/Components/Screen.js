import classes from "./Screen.module.css";

const Screen = (props) => {
  return (
    <div className={classes.calculatorBox}>
      <div className={classes.screenParent}>
        <p className={classes.digit}>{props.calculated}</p>
      </div>
    </div>
  );
};
export default Screen;
