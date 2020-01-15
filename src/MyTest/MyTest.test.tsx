import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyTest from './MyTest';

describe('<MyTest />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<MyTest />);
    const myTest = getByTestId('MyTest');

    expect(myTest).toBeInTheDocument();
  });
});