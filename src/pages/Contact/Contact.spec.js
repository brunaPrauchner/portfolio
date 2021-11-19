import { shallow } from 'enzyme';
import Contact from './Contact';

jest.mock('react-router-dom')
describe('Contact', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.exists()).toBe(true);
  })

  it("renders contact email", () => {
    const wrapper = shallow(<Contact />);
    const email = 'prauchner.bruna@gmail.com '
    expect(wrapper.find('span').text()).toBe(email);
  })

  it("renders a list of social media with github, linkedin, leetcode", () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.find('li')).toHaveLength(3);
    expect(wrapper.find('a').at(0).prop('href')).toEqual('https://github.com/brunaPrauchner')
    expect(wrapper.find('a').at(1).prop('href')).toEqual('https://www.linkedin.com/in/bruna-prauchner/')
    expect(wrapper.find('a').at(2).prop('href')).toEqual('https://leetcode.com/BrunaPrauchner23/')
  })
});
