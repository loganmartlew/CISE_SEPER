import * as React from 'react';
import { render, screen, getByText } from '../test-utils';
import App from './App';

describe('test App component', () => {
  test('component displays message', () => {
    render(<App />);

    const message = 'Hello from client';
    const messageEl = screen.getByText(message);

    expect(messageEl).not.toBe(undefined);
  });
});
