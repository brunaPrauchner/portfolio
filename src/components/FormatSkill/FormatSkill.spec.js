import { shallow } from 'enzyme'
import FormatSkill from '../../components/FormatSkill/FormatSkill'

jest.mock('react-router-dom')
describe('FormatSkill', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<FormatSkill />);
    expect(wrapper.exists()).toBe(true);
  })

  it("renders 3 times the icon BiRightArrow", () => {
    const wrapper = shallow(<FormatSkill />);
    expect(wrapper.find('BiRightArrow').exists()).toBe(true);
    expect(wrapper.find('BiRightArrow')).toHaveLength(3)
  })

  it("renders 3 times a text using span", () => {
    const wrapper = shallow(<FormatSkill />);
    expect(wrapper.find('span')).toHaveLength(3)
  })

});