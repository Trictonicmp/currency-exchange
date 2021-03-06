import PropTypes from 'prop-types';
import styles from '../css/components/detailsHeader.module.css';

const DetailsHeader = (props) => {
  const {
    name,
    flag,
    todaysExchange,
    baseCurrency,
    currency,
  } = props;

  return (
    <div className={`pageContainer ${styles.detailsHeader}`}>
      <h3>{ flag }</h3>
      <div>
        <span>Country</span>
        <h2>{ name }</h2>
      </div>
      <div>
        <span>Currency</span>
        <h2>{ currency }</h2>
      </div>
      <div>
        <span>{`Today's exchange | based on: 1 ${baseCurrency}`}</span>
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
  currency: PropTypes.string,
};

DetailsHeader.defaultProps = {
  name: 'Unknown',
  flag: '⚠️',
  todaysExchange: 0,
  baseCurrency: '',
  currency: '',
};

export default DetailsHeader;
