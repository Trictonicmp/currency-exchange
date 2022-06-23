import styles from '../css/components/countriesList.module.css';
import CountryListItem from './CountryListItem';

const CountriesListLoading = () => {
  const sampleCountry = {
    name: 'Loading',
    flag: '🌏',
    currencyCode: 'LOD',
    todaysExchange: 0,
    weekHistory: [],

  };

  const listItems = [];
  for (let i = 0; i < 30; i += 1) {
    listItems.push(
      <CountryListItem
        country={sampleCountry}
        key={`${sampleCountry.name}${sampleCountry.currencyCode}${i}`}
        baseCurrency="LOD"
      />,
    );
  }

  return (
    <div className={`${styles.countriesListContainer}`}>
      <ul className={`${styles.countriesList} ${styles.loading}`}>
        { listItems }
      </ul>
    </div>
  );
};

export default CountriesListLoading;
