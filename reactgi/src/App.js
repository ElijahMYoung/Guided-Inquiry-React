import "./App.css";
import Medium from "./Components/medium";
import Hard from "./Components/hard";

function App() {
  return (
    <div className="App">
      {/* <div className="Very-Easy">
        <h1>Personal Info</h1>
        <ul>
          <li>Name: Elijah</li>
          <li>Phone: 704-996-3461</li>
          <li>Email: eyoung11@r2hstudent.org</li>
        </ul>
      </div> */}
      {/* <Medium
        name="Elijah"
        phone="704-996-3461"
        email="eyoung11@r2hstudent.org"
      /> */}
      <Hard />
    </div>
  );
}

export default App;
