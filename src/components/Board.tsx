import classes from "./Board.module.css";

export function Board() {
  return (
    <ul className={classes.BoardLayout}>
      <li className={classes.listItem}>
        <p>할일</p>
      </li>
      <li className={classes.listItem}>할일</li>
      <li className={classes.listItem}>할일</li>
      <li className={classes.listItem}>할일</li>
      <li className={classes.listItem}>할일</li>
    </ul>
  );
}
