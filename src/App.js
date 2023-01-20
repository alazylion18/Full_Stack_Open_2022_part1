import { click } from '@testing-library/user-event/dist/click'
import {useState} from 'react'


const Button = (props) => {
  <button onClick={props.handleClick}>
    {props.text}
  </button>
}

  const Statistics = (props) => {
    console.log(props)
        const all = props.Statistics[0] + props.Statistics[1] + props.Statistics[2]
        const average = (props.Statistics[0]-props.Statistics[2])/(props.Statistics[0] + props.Statistics[1] + props.Statistics[2])
        const positive = props.Statistics[0]/all
        return(
          <div>
        all {all}
         <br></br>
        average {average}
         <br></br>
        positive {positive}
        </div>
        )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
      <h2>Statistics</h2>
      <p>
         good {good}
       </p>
       <p>
         neutral {neutral}
       </p>
       <p>
         bad {bad}
       </p>
      <Statistics Statistics={[good, neutral, bad]}/>
     </div>  
  )
}

export default App;