import React from 'react';
import { render } from '@testing-library/react';
import ProgramPreview from './program-preview';
describe('ProgramPreview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProgramPreview />);
    expect(baseElement).toBeTruthy();
  });
});
