import configureStore from './src/store/configureStore';
import { CounterComponent } from './src/components/counter';
import * as ActionCreatorsCounter from './src/action-creators/counter';
import { bindActionCreators } from 'redux';

const store = configureStore();
const actionCreatorsCounter= bindActionCreators(ActionCreatorsCounter,
  store.dispatch
);

CounterComponent.init(store, actionCreatorsCounter);
