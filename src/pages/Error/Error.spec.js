import { shallow } from 'enzyme';
import Error from './Error';

jest.mock('react-router-dom')
describe('Error', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Error />);
    expect(wrapper.exists()).toBe(true);
  })

  it("renders page not found", () => {
    const wrapper = shallow(<Error />);
    const quote = `OOops!!! We couldn't find this page.`
    expect(wrapper.find('div').text()).toBe(quote);
  })
});
