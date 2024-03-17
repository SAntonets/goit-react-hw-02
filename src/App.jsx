import { useEffect, useState } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notofication/Notification'


const initialReviews = {
  good: 0,
  neutral: 0,
  bad: 0
}


function App() {

const [reviews, setReviews] = useState(() => {
    const stringifiedReviews = localStorage.getItem("reviewsValues");
    const parsedReviews = JSON.parse(stringifiedReviews) ?? initialReviews;
    return parsedReviews;
  });

const handleUpdateFeedback = (feedbackType) => {
  setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
}
  
const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  
const handleResetFeedback = () => {
    setReviews(initialReviews)
  };

  const positiveFeedback = Math.round(((reviews.good + reviews.neutral) / totalFeedback) * 100)
  

  useEffect(() => {
    localStorage.setItem("reviewsValues", JSON.stringify(reviews));
  }, [reviews]); 


  return (
    <>
    <Description />
    <Options reviews={reviews} handleUpdateFeedback={handleUpdateFeedback} totalFeedback={totalFeedback} handleResetFeedback={handleResetFeedback} />
     {totalFeedback !== 0 ? (
            <Feedback reviews={reviews} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
        ) : (
            <Notification />
        )}
    
    </>
  )
}

export default App
