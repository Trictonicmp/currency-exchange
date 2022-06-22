const simplifyCountries = (countriesData) => {
  const simplifiedCountries = [];
  countriesData.forEach((country) => {
    // console.log(country);
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

const getCountriesData = async (errorCallback) => {
  let countries = [];
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    countries = simplifyCountries(data);
  } catch (error) {
    errorCallback(error);
  }
  return countries;
};

const getCurrencies = async (base, errorCallback = null) => {
  let currencies = {};
  try {
    const response = await fetch(`https://api.exchangerate.host/latest?base=${base}`);
    const data = await response.json();
    currencies = data.rates;
  } catch (error) {
    errorCallback(error);
  }
  return currencies;
};
