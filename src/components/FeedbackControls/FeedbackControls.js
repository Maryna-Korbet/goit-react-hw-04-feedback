import css from 'components/FeedbackControls/FeedbackControls.module.css';

const FeedbackControls = () => (
    <div>
        <button type="button" className={css.button}>Good</button>
        <button type="button" className={css.button}>Neutral</button>
        <button type="button" className={css.button}>Bad</button>
    </div>
)

export default FeedbackControls;