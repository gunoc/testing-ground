import classes from "./UserInput.module.css";

export function UserInput() {
  return (
    <div className={classes.UserInputLayout}>
      <div className={classes.date}>2023.07.01 월</div>
      <div className={classes.inputLayout}>
        <input type="text" />
        <button>+</button>
      </div>
    </div>
  );
}
