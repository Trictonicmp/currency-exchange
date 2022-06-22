const simplifyCountries = (countriesData) => {
  const simplifiedCountries = [];
  countriesData.forEach((country) => {
    const simpleCountry = {
      name: '',
      currencyCode: '',
      flag: '',
    };

    simpleCountry.name = country.name.common;
    simpleCountry.currencyCode = country.currencies ? Object.keys(country.currencies)[0] : '';
    simpleCountry.flag = country.flag;

    simplifiedCountries.push(simpleCountry);
  });

  return simplifiedCountries;
};

const getCountriesData = async () => {
  let countries = [];
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  countries = simplifyCountries(data);
  return countries;
};

export const getCurrencies = async (base) => {
  let currencies = {};
  const response = await fetch(`https://api.exchangerate.host/latest?base=${base}`);
  const data = await response.json();
  currencies = data.rates;
  return currencies;
};

const getInitialAndFinalDate = () => {
  const today = new Date();
  const endDate = today.toISOString().split('T')[0];
  // substract 7 days from today
  today.setDate(today.getDate() - 7);
  const startDate = today.toISOString().split('T')[0];

  return [startDate, endDate];
};

export const getWeekHistory = async (baseCurrency = 'USD') => {
  const [startDate, endDate] = getInitialAndFinalDate();
  const response = await fetch(`https://api.exchangerate.host/timeseries?start_date=${startDate}&end_date=${endDate}&base=${baseCurrency}`);
  const data = await response.json();
  return data.rates;
};

const getCountriesCurrencies = async (baseCurrency, errorCallback) => {
  const countriesCurrencies = [];
  try {
    const countries = await getCountriesData();
    const currencies = await getCurrencies(baseCurrency);
    const countriesWeekHistory = await getWeekHistory(baseCurrency);

    countries.forEach((country, index) => {
      countries[index].todaysExchange = currencies[country.currencyCode];

      const weekHistory = [];
      Object.entries(countriesWeekHistory).forEach((day) => {
        const history = { date: day[0], exchange: day[1][country.currencyCode] };
        weekHistory.push(history);
      });

      countries[index].weekHistory = weekHistory;
    });
  } catch (error) {
    errorCallback(error);
  }

  return countriesCurrencies;
};

export default getCountriesCurrencies;
