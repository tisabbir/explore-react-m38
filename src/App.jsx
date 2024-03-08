import "./App.css";
import Todo from "./Todo";

function App() {
  return (
    <>
      <Todo task="learn react" isDone={true}></Todo>
      <Todo task="Lear the core concepts" isDone={false}></Todo>
      <Todo task="Learn to learn " isDone={true}></Todo>
      <Todo task="learn critical thinking" isDone={false}></Todo>
      {/* <h1>Vite + React</h1>
      <Person></Person>
      <Device name="Laptop"></Device>
      <Person></Person>
      <Person></Person>
      <Student name={"ali"} age={25}></Student>
      <Student name="sabbir" age="24"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}

function Person() {
  const age = 25;
  const money = "3M";
  return (
    <h3>
      I am a person with age {age}. I have {money} Money
    </h3>
  );
}
function Device(props) {
  return <h3>This Device : {props.name} </h3>;
}
function Student({ name, age }) {
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Name : {name} </p>
      <p>Age : {age} </p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    border: "2px solid tomato",
    margin: "20px",
    padding: "20px",
    borderRadius: "20px",
    backgroundColor: "lightblue",
  };
  return (
    <div style={developerStyle}>
      <h3>The Developer on the rise</h3>
      <p>Eat</p>
      <p>Sleep</p>
      <p>Code</p>
      <p>Repeat</p>
    </div>
  );
}
export default App;
