import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import App from 'App/App';
import history from 'utils/history';
import { store } from 'redux-settings/store';
import reportWebVitals from 'reportWebVitals';
import 'features/common/assets/styles/vendor.css';
import 'features/common/assets/styles/global.module.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
