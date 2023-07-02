import classes from "./Header.module.css";

export function Header() {
  return (
    <header>
      <h1>오늘은 무엇을 해치울까?</h1>
      <button className={classes.loginBtn}>로그인</button>
    </header>
  );
}
