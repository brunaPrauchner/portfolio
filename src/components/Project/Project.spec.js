import { shallow } from 'enzyme';
import Project from './Project';

jest.mock('react-router-dom')
describe('Project', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Project />);
    expect(wrapper.exists()).toBe(true);
  })

  it("renders a title using h5", () => {
    const wrapper = shallow(<Project />);
    expect(wrapper.find('h5').exists()).toBe(true);
  })

  it("renders a description using p", () => {
    const wrapper = shallow(<Project />);
    expect(wrapper.find('p').exists()).toBe(true);
  })

  it("renders a image on right side", () => {
    const wrapper = shallow(<Project img='image-test.png' caption='caption to test'/>);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').prop('src')).toBe('image-test.png');
    expect(wrapper.find('img').prop('alt')).toBe('caption to test');
  })

  it("renders a button when it has a link", () => {
    const wrapper = shallow(<Project link='www.test.com' desc='Check project'/>);
    expect(wrapper.find('Button').exists()).toBe(true);
    expect(wrapper.find('Button').prop('linkBt')).toBe('www.test.com');
    expect(wrapper.find('Button').prop('desc')).toBe('Check project');
  })

  it("not renders a button when it has not a link", () => {
    const wrapper = shallow(<Project />);
    expect(wrapper.find('Button').exists()).toBe(false);
  })
});
