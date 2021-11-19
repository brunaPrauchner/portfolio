import { shallow } from 'enzyme';
import Home from './Home';

jest.mock('react-router-dom')
describe('Home', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBe(true);
  })

  it("renders a button with Go to CV", () => {
    const wrapper = shallow(<Home />);
    const buttonText = 'Go to CV'
    expect(wrapper.find('Button').prop('desc')).toBe(buttonText);
  })

  it("renders a image on right side", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').prop('src')).toBe('logoBruna.jpeg');
    expect(wrapper.find('img').prop('alt')).toBe('Bruna Prauchner');
  })
});
