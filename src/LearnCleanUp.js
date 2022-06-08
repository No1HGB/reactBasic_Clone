import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("Created!");
    //if return func in useEffect, we know when Component is destroyed! => CleanUp
    return () => {
      console.log("Destroyed!");
    };
  }, []);
  return <h1>Hello</h1>;
}

function LearnCleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
export default LearnCleanUp;
