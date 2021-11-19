import { shallow } from 'enzyme'
import About from './About'
import FormatSkill from '../../components/FormatSkill/FormatSkill'

jest.mock('react-router-dom')
describe('About', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.exists()).toBe(true);
  })

  it("renders FormatDescription for My Story with section, desc, img and caption", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find('FormatDescription').exists()).toBe(true);
    expect(wrapper.find('FormatDescription').at(0).prop('section')).toBe('My Story')
    expect(wrapper.find('FormatDescription').at(0).prop('desc')).toBeTruthy
    expect(wrapper.find('FormatDescription').at(0).prop('img')).toBe('bru-mystory.png')
    expect(wrapper.find('FormatDescription').at(0).prop('caption')).toBe('Bruna Prauchner');
  })

  it("renders FormatDescription for Tech Skills with section, desc, img and caption", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find('FormatDescription').exists()).toBe(true);
    expect(wrapper.find('FormatDescription').at(1).prop('section')).toBe('Tech Skills')
    expect(wrapper.find('FormatDescription').at(1).prop('desc')).toBeTruthy
    expect(wrapper.find('FormatDescription').at(1).prop('customComponent')).toBeTruthy
  })

  it("renders FormatDescription for Community Involvement - Toastmaster with section, title, desc, img and caption", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find('FormatDescription').exists()).toBe(true);
    expect(wrapper.find('FormatDescription').at(2).prop('section')).toBe('Community Involvement')
    expect(wrapper.find('FormatDescription').at(2).prop('title')).toBe('Toastmaster')
    expect(wrapper.find('FormatDescription').at(2).prop('desc')).toBeTruthy
    expect(wrapper.find('FormatDescription').at(2).prop('img')).toBe('tm.png')
    expect(wrapper.find('FormatDescription').at(2).prop('caption')).toBe('Toastmaster Logo');
  })
  it("renders FormatDescription for Community Involvement - Study Group with title, desc, img and caption", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find('FormatDescription').exists()).toBe(true);
    expect(wrapper.find('FormatDescription').at(3).prop('title')).toBe('Study Group')
    expect(wrapper.find('FormatDescription').at(3).prop('desc')).toBeTruthy
    expect(wrapper.find('FormatDescription').at(3).prop('img')).toBe('biti.png')
    expect(wrapper.find('FormatDescription').at(3).prop('caption')).toBe('Study Group Logo');
  })
  it("renders FormatDescription for Community Involvement - NGO Doutorzinhos with title, desc, img and caption", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find('FormatDescription').exists()).toBe(true);
    expect(wrapper.find('FormatDescription').at(4).prop('title')).toBe('NGO Doutorzinhos')
    expect(wrapper.find('FormatDescription').at(4).prop('desc')).toBeTruthy
    expect(wrapper.find('FormatDescription').at(4).prop('img')).toBe('dout.png')
    expect(wrapper.find('FormatDescription').at(4).prop('caption')).toBe('Doutorzinhos Logo');
  })
});
