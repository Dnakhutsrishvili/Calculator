import classes from "./Buttons.module.css";

const Buttons = (props) => {
  return (
    <div className={classes.div}>
      <div>
        <div className={classes.btnParent}>
          <button className={classes.btn} onClick={props.sevenHendeler}>
            {7}
          </button>
          <button className={classes.btn} onClick={props.eightHendeler}>
            {8}
          </button>
          <button className={classes.btn} onClick={props.nineHendeler}>
            {9}
          </button>
        </div>
        <div className={classes.btnParent}>
          <button className={classes.btn} onClick={props.fourHendeler}>
            {4}
          </button>
          <button className={classes.btn} onClick={props.fiveHendeler}>
            {5}
          </button>
          <button className={classes.btn} onClick={props.sixHendeler}>
            {6}
          </button>
        </div>
        <div className={classes.btnParent}>
          <button className={classes.btn} onClick={props.oneHendeler}>
            {1}
          </button>
          <button className={classes.btn} onClick={props.twoHendeler}>
            {2}
          </button>
          <button className={classes.btn} onClick={props.threeHendeler}>
            {3}
          </button>
        </div>
        <div className={classes.btnParent}>
          <button className={classes.btn} onClick={props.zeroHendeler}>
            {0}
          </button>
          <button className={classes.btn} onClick={props.pointHendeler}>
            {"."}
          </button>
          <button className={classes.btn} onClick={props.equalHendeler}>
            {"="}
          </button>
        </div>
      </div>
      <div className={classes.rowBtn}>
        <button className={classes.btn} onClick={props.multHendeler}>
          {"*"}
        </button>
        <button className={classes.btn} onClick={props.divideHendeler}>
          {"/"}
        </button>
        <button className={classes.btn} onClick={props.minusHendeler}>
          {"-"}
        </button>
        <button className={classes.btn} onClick={props.plusHendeler}>
          {"+"}
        </button>
      </div>

      <button className={classes.btnC} onClick={props.eraseHendeler}>
        {"C"}
      </button>
    </div>
  );
};
export default Buttons;
