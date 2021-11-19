import { shallow } from 'enzyme';
import App from './App';

test('App to have length 1', () => {
  expect(shallow(<App />)).toHaveLength(1);
});
