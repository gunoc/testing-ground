import { Board } from "./Board";
import classes from "./MainLayout.module.css";

export function MainLayout() {
  return (
    <div className={classes.MainLayout}>
      <Board />
      <Board />
      <Board />
    </div>
  );
}
