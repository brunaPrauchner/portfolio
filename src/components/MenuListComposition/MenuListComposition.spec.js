import { shallow } from 'enzyme';
import MenuListComposition from './MenuListComposition';

describe('MenuListComposition', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<MenuListComposition />);
    expect(wrapper.exists()).toBe(true);
  })
});
