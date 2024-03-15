const Feedback = ({ reviews, totalFeedback, positiveFeedback }) => {
    
if (totalFeedback > 0)
  return (
    <div>
 <ul>
              <li>Good: {reviews.good}</li>
              <li>Neutral: {reviews.neutral}</li>
              <li>Bad: {reviews.bad}</li>
              <li>Total: {totalFeedback}</li>
              <li>Positive: {positiveFeedback}</li>
 </ul>
    </div>
  )
else
    return (
<div><p>No feedback yet</p></div>)
    
};

export default Feedback;