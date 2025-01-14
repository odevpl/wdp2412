import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import NewFurniture from './NewFurniture';

const mockStore = {
  getState: () => ({
    viewport: 'desktop',
    categories: [],
    products: [],
  }),
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};

describe('Component NewFurniture', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={mockStore}>
        <NewFurniture />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
