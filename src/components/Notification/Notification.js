import css from 'components/Notification/Notification.module.css';

const Notification = ({ message }) => {
    return <p className={css.message}>{message}</p>
}

export default Notification;