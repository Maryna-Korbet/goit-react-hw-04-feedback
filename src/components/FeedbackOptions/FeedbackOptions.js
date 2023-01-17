import css from 'components/FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const optionsArr = Object.keys(options);
   
    return (
        <div className={css.box}>
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

FeedbackOptions.propTypes = {
    options: PropTypes.objectOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
