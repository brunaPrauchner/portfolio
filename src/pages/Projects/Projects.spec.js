import { shallow } from 'enzyme';
import Projects from './Projects';

jest.mock('react-router-dom')
describe('Projects', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Projects />);
    expect(wrapper.exists()).toBe(true);
  })

  it("renders Projects - Gina Tells Project with title, link, desc, img and caption", () => {
    const wrapper = shallow(<Projects />);
    expect(wrapper.find('Project').exists()).toBe(true);
    expect(wrapper.find('Project').at(0).prop('title')).toBe('Gina Tells')
    expect(wrapper.find('Project').at(0).prop('link')).toBe('https://github.com/ginatells')
    expect(wrapper.find('Project').at(0).prop('desc')).toBeTruthy
    expect(wrapper.find('Project').at(0).prop('img')).toBe('ginatells.png')
    expect(wrapper.find('Project').at(0).prop('caption')).toBe('Gina Tells Logo');
  })

  it("renders Projects - Save Giraffe Project with title, link, desc, img and caption", () => {
    const wrapper = shallow(<Projects />);
    expect(wrapper.find('Project').exists()).toBe(true);
    expect(wrapper.find('Project').at(1).prop('title')).toBe('Save Giraffe')
    expect(wrapper.find('Project').at(1).prop('link')).toBe('https://github.com/brunaPrauchner/AI-AutomatedPlanning-SaveGiraffe')
    expect(wrapper.find('Project').at(1).prop('desc')).toBeTruthy
    expect(wrapper.find('Project').at(1).prop('img')).toBe('savegiraffee.png')
    expect(wrapper.find('Project').at(1).prop('caption')).toBe('Project Image for Save Giraffe');
  })

  it("renders Projects - Fox Adm Tool Project with title, link, desc, img and caption", () => {
    const wrapper = shallow(<Projects />);
    expect(wrapper.find('Project').exists()).toBe(true);
    expect(wrapper.find('Project').at(2).prop('title')).toBe('Fox Adm Tool')
    expect(wrapper.find('Project').at(2).prop('link')).toBe('https://github.com/brunaPrauchner/fox-adm-tool-api')
    expect(wrapper.find('Project').at(2).prop('desc')).toBeTruthy
    expect(wrapper.find('Project').at(2).prop('img')).toBe('foxadmtool.png')
    expect(wrapper.find('Project').at(2).prop('caption')).toBe('Project Image for Fox Adm Tool');
  })

  it("renders Projects - Check Weather Project with title, link, desc, img and caption", () => {
    const wrapper = shallow(<Projects />);
    expect(wrapper.find('Project').exists()).toBe(true);
    expect(wrapper.find('Project').at(3).prop('title')).toBe('Check Weather')
    expect(wrapper.find('Project').at(3).prop('link')).toBe('')
    expect(wrapper.find('Project').at(3).prop('desc')).toBeTruthy
    expect(wrapper.find('Project').at(3).prop('img')).toBe('weat1.png')
    expect(wrapper.find('Project').at(3).prop('caption')).toBe('Project Image for Check Weather');
  })

  it("renders Projects - KPI Tracking Project with title, link, desc, img and caption", () => {
    const wrapper = shallow(<Projects />);
    expect(wrapper.find('Project').exists()).toBe(true);
    expect(wrapper.find('Project').at(4).prop('title')).toBe('KPI Tracking')
    expect(wrapper.find('Project').at(4).prop('link')).toBe('')
    expect(wrapper.find('Project').at(4).prop('desc')).toBeTruthy
    expect(wrapper.find('Project').at(4).prop('img')).toBe('kpi.png')
    expect(wrapper.find('Project').at(4).prop('caption')).toBe('Project Image for KPI Tracking');
  })

});
