import './App.css';
import Header from "./components/header/header"
import Quiz from './components/quiz/Quiz';

import QuestionContext from "./components/store/wrapperContext"

function App() {
  return (
    <div className="App">
      <QuestionContext>
        <Header />
        <Quiz />
      </QuestionContext>
    </div>
  );
}

export default App;
