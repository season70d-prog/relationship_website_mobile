import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Passcode from "./components/Passcode";
import Question from "./components/Question";
import Timer from "./components/Timer";
import Recap from "./components/Recap";
import Message from "./components/Message";
import Music from "./components/Music";
import Picture from "./components/Picture";
import Letter from "./components/Letter";
import Closing from "./components/Closing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Passcode />} />
        <Route path="/question" element={<Question />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/recap" element={<Recap />} />
        <Route path="/recap/message" element={<Message />} />
        <Route path="/recap/music" element={<Music />} />
        <Route path="/recap/pictures" element={<Picture />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/closing" element={<Closing />} />
      </Routes>
    </Router>
  );
}

export default App;