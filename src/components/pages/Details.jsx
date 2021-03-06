import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DetailsHeader from '../DetailsHeader';
import WeekHistory from '../WeekHistory';
import styles from '../../css/components/details.module.css';
import backIcon from '../../assets/images/next.png';

const Details = () => {
  const country = useSelector((state) => state.selectedCountry);
  const baseCurrency = useSelector((state) => state.baseCurrency);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <section>
      <div className={styles.header}>
        <DetailsHeader
          name={country.name}
          flag={country.flag}
          todaysExchange={country.todaysExchange}
          baseCurrency={baseCurrency}
          currency={country.currencyCode}
        />
      </div>
      <div className={styles.historyHeader}>
        <div className="pageContainer">
          <button type="button" onClick={goBack}>
            <img src={backIcon} alt="Go Back" title="Go Back" />
          </button>
          <h2>This week&apos;s exchange</h2>
        </div>
      </div>
      <WeekHistory weekHistory={country.weekHistory} />
    </section>
  );
};

export default Details;
