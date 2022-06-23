import PropTypes from 'prop-types';

const WeekHistory = (props) => {
  const { weekHistory } = props;
  console.log(weekHistory);

  return (
    <ul className="pageContainer">
      {
        weekHistory.map((day) => (
          <li key={day.date}>
            <p>{day.date}</p>
            <p>{day.exchange}</p>
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
