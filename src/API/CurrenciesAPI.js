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

export default getCurrencies;
