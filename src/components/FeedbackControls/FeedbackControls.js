import css from 'components/FeedbackControls/FeedbackControls.module.css';

const FeedbackControls = () => (
    <>
        <p className={css.title}>Please leave feedback</p>
        <button type="button" className={css.button}>Good</button>
        <button type="button" className={css.button}>Neutral</button>
        <button type="button" className={css.button}>Bad</button>
    </>
)

export default FeedbackControls;