import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

import countries from '../redux/countries/countries';
import appStatus from '../redux/app/appStatus';
import baseCurrency from '../redux/countries/baseCurrency';
import filteredCountries from '../redux/countries/filteredCountries';
import selectedCountry from '../redux/selectedItem/selectedITem';

const { configureStore } = require('@reduxjs/toolkit');

const createStore = () => {
  const preloadedState = {
    appStatus: 'SUCCESS',
    baseCurrency: 'USD',
    countries: [
      {
        name: 'Afghanistan',
        currencyCode: 'AFN',
        flag: '🇦🇫',
        todaysExchange: 89.230209,
        weekHistory: [
          {
            date: '2022-06-17',
            exchange: 88.9083,
          },
          {
            date: '2022-06-16',
            exchange: 89.272511,
          },
        ],
      },
      {
        name: 'Mexico',
        currencyCode: 'MXN',
        flag: '🇦🇫🇲🇽',
        todaysExchange: 20.24042,
        weekHistory: [
          {
            date: '2022-06-17',
            exchange: 20.423423,
          },
          {
            date: '2022-06-16',
            exchange: 20.316285,
          },
        ],
      },
    ],

    filteredCountries: [
      {
        name: 'Afghanistan',
        currencyCode: 'AFN',
        flag: '🇦🇫',
        todaysExchange: 89.230209,
        weekHistory: [
          {
            date: '2022-06-17',
            exchange: 88.9083,
          },
          {
            date: '2022-06-16',
            exchange: 89.272511,
          },
        ],
      },
      {
        name: 'Mexico',
        currencyCode: 'MXN',
        flag: '🇦🇫🇲🇽',
        todaysExchange: 20.24042,
        weekHistory: [
          {
            date: '2022-06-17',
            exchange: 20.423423,
          },
          {
            date: '2022-06-16',
            exchange: 20.316285,
          },
        ],
      },
    ],

    selectedCountry: {
      name: 'Mexico',
      currencyCode: 'MXN',
      flag: '🇦🇫🇲🇽',
      todaysExchange: 20.24042,
      weekHistory: [
        {
          date: '2022-06-17',
          exchange: 20.423423,
        },
        {
          date: '2022-06-16',
          exchange: 20.316285,
        },
      ],
    },
  };

  return configureStore({
    preloadedState,
    reducer: {
      countries,
      appStatus,
      baseCurrency,
      filteredCountries,
      selectedCountry,
    },
  });
};

describe('App snapshots', () => {
  test('It should render the app', () => {
    const store = createStore();
    const app = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );

    expect(app).toMatchSnapshot();
  });

  test('It should render the Rockets page', () => {
    const store = createStore();
    const rocketsPage = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(rocketsPage).toMatchSnapshot();
  });

  test('It should render the Missiosn page', () => {
    const store = createStore();
    const missionsPage = render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );
    expect(missionsPage).toMatchSnapshot();
  });

  test('It should render the Profile page', () => {
    const store = createStore();
    const profilePage = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(profilePage).toMatchSnapshot();
  });
});
