import { shallow } from 'enzyme';
import Progress from './Progress';

jest.mock('react-router-dom')
describe('Progress', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Progress />);
    expect(wrapper.exists()).toBe(true);
  })

  it("renders page in progress", () => {
    const wrapper = shallow(<Progress />);
    const quote = `Work in progress!!! Check back soon...`
    expect(wrapper.find('div').text()).toBe(quote);
  })
});
