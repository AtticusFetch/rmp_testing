import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { fetchSome } from './../actions';

import App from './../App';

jest.useFakeTimers();

jest.mock('./../actions');
jest.mock('./../Component', () => 'Component');

let props = {};

describe('App', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<App />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('should change data', () => {
    const eventMock = {
      target: {
        value: 'test_value'
      }
    };
    const component = shallow(<App />);

    component.find('input').simulate('change', eventMock);

    const textValue = component
      .find('#data + span')
      .text();

      expect(textValue).toEqual(eventMock.target.value);
  });

  it('should set timeoutDone', () => {
    const component = shallow(<App />);

    jest.runAllTimers();
    component.update();

    expect(component.find('#timeout').text()).toMatch(/true/gi);
  });

  it('fetch data', () => {
    const component = shallow(<App {...props} />);

    component.find('button').simulate('click');

    const textValue = component
    .find('#data + span')
    .text();

    expect(textValue).toEqual('some mocked data');
  });
});
