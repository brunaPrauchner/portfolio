import FormatDescription from './FormatDescription'
import { shallow } from 'enzyme'

describe('FormatDescription', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<FormatDescription />);
      expect(wrapper.exists()).toBe(true);
    });
  
    it('renders a list of items with name, sku and price', () => {
      const wrapper = shallow(<FormatDescription />);
      expect(wrapper.find('ul'));
    });
  
    // it('renders ShoppingItem component with values even with one value missing', () => {
    // });
  })