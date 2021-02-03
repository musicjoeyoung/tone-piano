import "./App.css";
import {
  playC4,
  playDb4,
  playD4,
  playEb4,
  playE4,
  playF4,
  playGb4,
  playG4,
  playAb4,
  playA4,
  playBb4,
  playB4,
  playC5,
  playNote,
} from "./tone.fn.js";

window.addEventListener("keydown", playNote);

function App() {
  return (
    <div className="pianoPage">
      <h1>Piano</h1>
      <div className="piano">
        <div className="white-key" onClick={playC4}>A</div>
        <div className="black-key" onClick={playDb4}>W</div>
        <div className="white-key" onClick={playD4}>S</div>
        <div className="black-key" onClick={playEb4}>E</div>
        <div className="white-key" onClick={playE4}>D</div>
        <div className="white-key" onClick={playF4}>F</div>
        <div className="black-key" onClick={playGb4}>T</div>
        <div className="white-key" onClick={playG4}>G</div>
        <div className="black-key" onClick={playAb4}>Y</div>
        <div className="white-key" onClick={playA4}>H</div>
        <div className="black-key" onClick={playBb4}>U</div>
        <div className="white-key" onClick={playB4}>J</div>
        <div className="white-key" onClick={playC5}>K</div>
      </div>
    </div>
  );
}

export default App;
