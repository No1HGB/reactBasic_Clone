import { useState, useEffect } from "react";

function LearnUseEffect() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");

  //useEffect => firstArgument:the func that run only once, secondArg:code execute when 'secondArg' is changed
  useEffect(() => console.log("I run only once"), []);
  useEffect(() => {
    if (keyword !== "" && keyword.length >= 5) {
      console.log("I run when 'keyword' changes", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword | counter' changes");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
export default LearnUseEffect;
