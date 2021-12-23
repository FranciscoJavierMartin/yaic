import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Index from '../../pages/index';

describe('Index', () => {
  it('should render successfully', () => {
    const component = render(<Index />);
    expect(component).toBeDefined();
  });
});
