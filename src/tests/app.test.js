import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import countries from '../redux/countries/countries';
import appStatus from '../redux/app/appStatus';
import baseCurrency from '../redux/countries/baseCurrency';
import filteredCountries, { getFilteredCountries } from '../redux/countries/filteredCountries';
import selectedCountry from '../redux/selectedItem/selectedITem';
import App from '../App';
import Home from '../components/pages/Home';
import Details from '../components/pages/Details';

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

  test('It should render the Home', () => {
    const countries = [
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
    ];
    const store = createStore();
    const app = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home countries={countries} baseCurrency="USD" />
        </BrowserRouter>
      </Provider>,
    );

    expect(app).toMatchSnapshot();
  });

  test('It should render the Details', () => {
    const store = createStore();
    const app = render(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </Provider>,
    );

    expect(app).toMatchSnapshot();
  });
});

describe('App events', () => {
  test('Click on country item should open details page', () => {
    const store = createStore();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );
    fireEvent.click(screen.getByText('Mexico'));
    expect(screen.getByText("This week's exchange")).toBeInTheDocument();
  });
});
