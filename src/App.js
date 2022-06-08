import Button from "./Button";
import styles from "./App.module.css";
import LearnUseEffect from "./LearnUseEffect";
import LearnCleanUp from "./LearnCleanUp";

function App() {
  return (
    <div>
      <div>
        <h1 className={styles.title}>Welcome back!</h1>
        <Button text={"Continue"} />
      </div>
      <hr />
      <LearnUseEffect />
      <hr />
      <LearnCleanUp />
    </div>
  );
}

export default App;
