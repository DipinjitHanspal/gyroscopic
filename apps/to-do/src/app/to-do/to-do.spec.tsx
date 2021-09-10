import { render } from '@testing-library/react';

import ToDo from './to-do';

describe('ToDo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ToDo />);
    expect(baseElement).toBeTruthy();
  });
});
