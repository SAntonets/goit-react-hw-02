import { useEffect, useState } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'


const initialRewiews = {
  good: 0,
  neutral: 0,
  bad: 0
}


function App() {

  const [reviews, setReviews] = useState({
  good: 0,
  neutral: 0,
  bad: 0
});

const handleUpdateFeedback = (feedbackType) => {
  setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
}
  
const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  
const handleResetFeedback = () => {
    setReviews(initialRewiews)
  };

const positiveFeedback = Math.round(((reviews.good + reviews.neutral) / totalFeedback) * 100)


  return (
    <>
    <Description />
    <Options reviews={reviews} handleUpdateFeedback={handleUpdateFeedback} totalFeedback={totalFeedback} handleResetFeedback={handleResetFeedback} />
    <Feedback reviews={reviews} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
    </>
  )
}

export default App