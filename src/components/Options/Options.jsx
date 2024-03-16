import clsx from "clsx";
import css from "./Options.module.css";


const Options = ({ handleUpdateFeedback, totalFeedback, handleResetFeedback }) => {
    
    
    return (
    <div>
 <ul className={css.buttonList}>
    <li><button onClick={() => handleUpdateFeedback('good')}>Good</button></li>
    <li><button onClick={() => handleUpdateFeedback('neutral')}>Neutral</button></li>
    <li><button onClick={() => handleUpdateFeedback('bad')}>Bad</button></li>
                 {totalFeedback !== 0 && <li><button onClick={() => handleResetFeedback()}>Reset</button></li>}
 </ul>
    </div>
  );
};

export default Options;