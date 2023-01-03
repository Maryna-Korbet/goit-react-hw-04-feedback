import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const optionsArr = Object.keys(options);
   
    return (
        <div>
            <p className={css.title}>Please leave feedback</p>
            {optionsArr.map(option => (
                <button
                    key={option}
                    name={option}
                    type="button"
                    className={css.button}
                    onClick={() => onLeaveFeedback(option)}
                >
                    <span className={css.name}>{option}</span>
                </button>
            ))}
    </div>
    );
};

export default FeedbackOptions;
