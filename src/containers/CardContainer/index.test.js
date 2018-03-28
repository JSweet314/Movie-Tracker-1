import { shallow } from 'enzyme';
import React from 'react';
import { CardContainer } from './index.js';
import * as mockData from '../../mockData/';
import * as helper from '../../helpers/';


describe('Card Container', () => {
  let wrapper;

  beforeEach(() => {
    const movies = helper.moviesWrangler(mockData.mockMovies);
    wrapper = shallow(<CardContainer movies={movies}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});