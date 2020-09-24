import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app';

configure({
  adapter: new Adapter(),
});

test('App should content the title', () => {
  const app = shallow(<App />);

  const title = app.find('.title');

  expect(title.text()).toBe('Hello World!');
});
