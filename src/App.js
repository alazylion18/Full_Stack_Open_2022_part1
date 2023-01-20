import { click } from '@testing-library/user-event/dist/click'
import {useState} from 'react'


const Button = (props) => {
  <button onClick={props.handleClick}>
    {props.text}
  </button>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good-bad)/(good+neutral+bad)
  const positive = good/all

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  
  const handleBadClick = () => {
    setBad(bad + 1)
  }
  

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>
        good
      </button>
      <button onClick={handleNeutralClick}>
        neutral
      </button>
      <button onClick={handleBadClick}>
        bad
      </button>
      <br></br>
      <h2>statistics</h2>
      <p>
        good {good} 
      </p>
      <p>
        neutral {neutral}
      </p>
      <p>
        bad {bad}
      </p>
      <p>
        all {all}
      </p>
      <p>
        average {average}
      </p>
      <p>
        positive {positive}
      </p>
     </div>
  )
}

export default App;