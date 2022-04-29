import * as React from 'react';
import { render, getByText } from '../test-utils';
import App from './App';

describe('test App component', () => {
  test('component displays message', () => {
    render(<App />);

    const message = 'Hello from client';
    const messageEl = getByText(message);

    expect(messageEl).not.toBe(undefined);
  });
});
