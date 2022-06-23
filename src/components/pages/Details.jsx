import { useSelector } from 'react-redux';
import DetailsHeader from '../DetailsHeader';
import styles from '../../css/components/details.module.css';

const Details = () => {
  const country = useSelector((state) => state.selectedCountry);
  const baseCurrency = useSelector((state) => state.baseCurrency);
  return (
    <section>
      <div className={styles.header}>
        <DetailsHeader
          name={country.name}
          flag={country.flag}
          todaysExchange={country.todaysExchange}
          baseCurrency={baseCurrency}
        />
      </div>
      <h1>Details</h1>
    </section>
  );
};

export default Details;
