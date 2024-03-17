import clsx from "clsx";
import css from "./Feedback.module.css";

const Feedback = ({ reviews, totalFeedback, positiveFeedback }) => {
    

  return (
    <div>
      <ul className={css.reviewsResults}>
              <li>Good: {reviews.good}</li>
              <li>Neutral: {reviews.neutral}</li>
              <li>Bad: {reviews.bad}</li>
              <li>Total: {totalFeedback}</li>
              <li>Positive: {positiveFeedback}%</li>
 </ul>
    </div>
 )   
};

export default Feedback;