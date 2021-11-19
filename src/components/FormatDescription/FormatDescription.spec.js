import { shallow } from 'enzyme'
import FormatDescription from './FormatDescription'
import FormatSkill from '../../components/FormatSkill/FormatSkill'

jest.mock('react-router-dom')
describe('FormatDescription', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<FormatDescription />);
    expect(wrapper.exists()).toBe(true);
  })

  it("renders a section using h5", () => {
    const wrapper = shallow(<FormatDescription />);
    expect(wrapper.find('h5').exists()).toBe(true);
  })

  it("has a title and renders a title using span", () => {
    const wrapper = shallow(<FormatDescription  title= 'Tech Skills' />);
    expect(wrapper.find('span').exists()).toBe(true);
  })

  it("renders a description using p", () => {
    const wrapper = shallow(<FormatDescription />);
    expect(wrapper.find('p').exists()).toBe(true);
  })

  it("renders an image", () => {
    const wrapper = shallow(<FormatDescription img='test.png' caption='image for test'/>);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').prop('src')).toEqual('test.png');
    expect(wrapper.find('img').prop('alt')).toEqual('image for test');
  })

  it("renders a custom component instead of an image", () => {
    const wrapper = shallow(<FormatDescription customComponent={<FormatSkill />}/>);
    expect(wrapper.find('img').exists()).toBe(false);
    expect(wrapper.find('FormatSkill').text()).toEqual('<FormatSkill />');
  })
});