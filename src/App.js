
import { useState } from 'react';
import { AnswerSelector } from './components/AnswerSelector/AnswerSelector';
import { question1 as q1, question2 as q2 } from './data/data.js'
import './App.css';

function App() {
  const [ answers, setAnswers ] = useState({})
  
  const handleChange = (data) => {
    setAnswers(prev => ({
      ...prev, 
      [data.questionId]: data
    }))
  }

  console.log(answers)
  return (
    <div>
      <AnswerSelector questionId={q1.id} onChange={handleChange}>
        <AnswerSelector.Question>
          {q1.text}
        </AnswerSelector.Question>
        {q1.answers.map(({id, title}) => (
            <AnswerSelector.Radio key={id} id={id}>
              {title}
            </AnswerSelector.Radio>
        ))}
        
      </AnswerSelector>

      <AnswerSelector questionId={q2.id} onChange={handleChange}>
        <AnswerSelector.Question>
          {q2.text}
        </AnswerSelector.Question>
        {q2.answers.map(({id, title}) => (
            <AnswerSelector.Checkbox key={id} id={id}>
              {title}
            </AnswerSelector.Checkbox>
        ))}
        
      </AnswerSelector> 
    </div>
  );
}

export default App;
