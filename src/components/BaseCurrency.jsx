import { useSelector } from 'react-redux';

const BaseCurrency = () => {
  const countries = useSelector((state) => state.countries);
  const baseCurrency = useSelector((state) => state.baseCurrency);
  console.log('00');

  const orderedCountries = countries.sort((a, b) => (a.name < b.name ? -1 : 1));

  const options = [];
  let currencyFound = false;
  orderedCountries.forEach((country) => {
    if (country.currencyCode === baseCurrency && !currencyFound) {
      options.push(
        <option value={country.currencyCode} selected>
          {`${country.currencyCode} - ${country.name}`}
        </option>,
      );
      currencyFound = true;
    } else {
      options.push(
        <option value={country.currencyCode}>
          {`${country.currencyCode} - ${country.name}`}
        </option>,
      );
    }
  });

  return (
    <div>
      <h2>Base Currency</h2>
      <select>
        { options }
      </select>
    </div>
  );
};

export default BaseCurrency;
