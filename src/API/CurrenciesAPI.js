const getCurrencies = async (errorCallback) => {
  let currencies = [];
  try {
    const response = await fetch('https://api.exchangerate.host/latest');
    currencies = await response.json();
  } catch (error) {
    errorCallback();
  }
  return currencies;
};

export default getCurrencies;
