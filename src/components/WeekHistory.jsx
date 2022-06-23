import PropTypes from 'prop-types';
import styles from '../css/components/weekHistory.module.css';

const WeekHistory = (props) => {
  const { weekHistory } = props;
  console.log(weekHistory);

  return (
    <ul className={`pageContainer ${styles.pagecontainer}`}>
      {
        weekHistory.slice(0).reverse().map((day) => (
          <li key={day.date} className={styles.weekItem}>
            <div className={styles.itemDate}>
              <span>Year - Month - Day</span>
              <p>{day.date}</p>
            </div>
            <div className={styles.itemDate}>
              <span>Exchange</span>
              <p className={styles.itemExchange}>{day.exchange}</p>
            </div>
          </li>
        ))
      }
    </ul>
  );
};

WeekHistory.propTypes = {
  weekHistory: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    exchange: PropTypes.number,
  })).isRequired,
};

export default WeekHistory;
