import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = () => (
    <>
        <p className={css.title}>Please leave feedback</p>
        <button type="button" className={css.button}>Good</button>
        <button type="button" className={css.button}>Neutral</button>
        <button type="button" className={css.button}>Bad</button>
    </>
)

export default FeedbackOptions;