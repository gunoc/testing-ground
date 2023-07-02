import "./App.css";
import { Header } from "./components/Header";
import { UserInput } from "./components/UserInput";
import { Board } from "./components/Board";
import { MainLayout } from "./components/MainLayout";
import { AchievementText } from "./components/AchievementText";

function App() {
  return (
    <>
      <Header />
      <UserInput />
      <AchievementText />
      <MainLayout />
    </>
  );
}

export default App;
