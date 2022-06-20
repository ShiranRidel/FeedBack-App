import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const {feedback}=useContext(FeedbackContext)

    // caculate rating avg
    let average = feedback.reduce((acc,cur)=>{
        return acc+cur.rating

    },0) / feedback.length
    //remove .0 after 9.0 we see only 9
    average= average.toFixed(1).replace(/[.,]0$/,'')

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} reviews</h4>
        <h4>Average Rating: {isNaN(average)?0:average}</h4>
    </div>
  )
}
export default FeedbackStats
