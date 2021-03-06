import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components

import App from '../../src/components/app';
import CurrencyWidget from '../../src/components/CurrencyWidget';

describe('<App />', () => {
  it('renders two <CurrencyWidget /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CurrencyWidget)).toHaveLength(2);
  });
});
