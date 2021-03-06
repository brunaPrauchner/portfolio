import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
  })

  it('renders a button with label', () => {
    const wrapper = shallow(<Button desc='Go to CV' />);
    expect(wrapper.find('button').text()).toBe('Go to CV ');
  })

  it('execute a function when button receives a link', () => {
    global.open = jest.fn()
    const wrapper = shallow(<Button linkBt='www.test.com' />);
    wrapper.find('button').simulate('click');
    expect(global.open).toHaveBeenCalledTimes(1);
  })
});