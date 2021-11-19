import { shallow } from 'enzyme';
import Navbar from './Navbar';

jest.mock('react-router-dom')
describe('Navbar', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.exists()).toBe(true);
  })

  it("renders a logo", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').prop('src')).toBe('rounded-logo.png')
    expect(wrapper.find('img').prop('alt')).toBe('home');
  })

  it("renders a list with About Projects Contact", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('ul').exists()).toBe(true);
    expect(wrapper.find('li').at(0).text()).toBe(' About')
    expect(wrapper.find('li').at(1).text()).toBe(' Projects')
    expect(wrapper.find('li').at(2).text()).toBe(' Contact')
  })
});
