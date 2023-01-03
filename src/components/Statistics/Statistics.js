import css from 'components/Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (

    <div className={css.text}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
        <p>Positive feedback: { positivePercentage }%</p>
    </div>
);

export default Statistics;