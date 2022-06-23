import PropTypes from 'prop-types';
import styles from '../css/components/detailsHeader.module.css';

const DetailsHeader = (props) => {
  const {
    name,
    flag,
    todaysExchange,
    baseCurrency,
  } = props;

  return (
    <div className={`pageContainer ${styles.detailsHeader}`}>
      <h3>{ flag }</h3>
      <div>
        <span>Country</span>
        <h2>{ name }</h2>
      </div>
      <div>
        <span>{`Exchange | based on: 1 ${baseCurrency}`}</span>
        <h2>{ todaysExchange }</h2>
      </div>
    </div>
  );
};

DetailsHeader.propTypes = {
  name: PropTypes.string,
  flag: PropTypes.string,
  todaysExchange: PropTypes.number,
  baseCurrency: PropTypes.string,
};

DetailsHeader.defaultProps = {
  name: 'Unknown',
  flag: '⚠️',
  todaysExchange: 0,
  baseCurrency: '',
};

export default DetailsHeader;
