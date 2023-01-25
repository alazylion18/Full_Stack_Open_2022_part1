import { click } from '@testing-library/user-event/dist/click'
import {useState} from 'react'


const Button = (props) => {
  <button onClick={props.handleClick}>
    {props.text}
  </button>
}

  const Statistics = (props) => {
    //console.log(props)
    if(props.Statistics[0]===0 && props.Statistics[1]===0 && props.Statistics[2]===0) {
      return(
        <div>
          No feedback given
        </div>
      )
    }
  
    {
    //console.log(props)
    const all = props.Statistics[0] + props.Statistics[1] + props.Statistics[2]
    const average = (props.Statistics[0]-props.Statistics[2])/(props.Statistics[0] + props.Statistics[1] + props.Statistics[2])
    const positive = props.Statistics[0]/all
        return(
          <div>
          <StatisticsLine text="all" value={props} />
          <StatisticsLine text="average" value={props} />
          <StatisticsLine text="positive" value={props}/>
          </div>
        )
    }
}

const StatisticsLine = (props) => {
  //console.log(props.text)
  const all = props.value.Statistics[0] + props.value.Statistics[1] + props.value.Statistics[2]
  const average = (props.value.Statistics[0]-props.value.Statistics[2])/(props.value.Statistics[0] + props.value.Statistics[1] + props.value.Statistics[2])
  const positive = props.value.Statistics[0]/all
  if (props.text ==="all"){  
  return(
  <div>
  <table>
  <tbody>
  <tr>
  <td>
  {props.text} {all}
  </td>
  </tr>
  </tbody>
  </table>
  </div>
  )
  }
  if (props.text ==="average"){  
    return(
    <div>
    <table>
    <tbody>
    <tr>
    <td>
    {props.text} {average}
    </td>
    </tr>
    </tbody> 
    </table>    
    </div>
    )
    }
  if (props.text ==="positive"){  
    return(
    <div>
    <table>
    <tbody>
    <tr>
    <td>
    {props.text} {positive}
    </td>
    </tr>
    </tbody>
    </table>
    </div>
    )
    }
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
      <table>
      <tbody>
         <tr>
          <td>good {good}</td>
          </tr>
         <tr>
         <td>neutral {neutral}</td>
         </tr>
         <tr>
         <td>bad {bad}</td>
         </tr>
      </tbody>
      </table>
      <Statistics Statistics={[good, neutral, bad]}/>
     </div>  
  )
}

export default App;