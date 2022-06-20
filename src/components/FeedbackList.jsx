import {motion,AnimatePresence}from 'framer-motion';
import Feedbackitem from "./Feedbackitem";
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';


function FeedbackList() {
    const {feedback}= useContext(FeedbackContext)

   if(!feedback || feedback.length === 0){
       return <p>no feedback yet</p>
   }
  return (
    <div className="feedback-list">
        <AnimatePresence>
        {feedback.map((item)=>(
            <motion.div 
            key={item.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            layout
            >
             <Feedbackitem key={item.id} item={item}
             />
            </motion.div>

        ))}
        </AnimatePresence>
    </div>
  )
//   return (
//     <div className="feedback-list">
//         {feedback.map((item)=>(
//             <Feedbackitem key={item.id} item={item}
//             hendleDelete={hendleDelete}/>
//         ))}
//     </div>
//   )
}
//because of usecontext we delete this:
// FeedbackList.protoType = {
//     feedback : PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     )
// }

export default FeedbackList