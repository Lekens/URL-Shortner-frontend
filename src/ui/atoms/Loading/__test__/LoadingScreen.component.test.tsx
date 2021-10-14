import React from 'react';

import { render, screen } from '@testing-library/react';
import Loading from 'ui/atoms/Loading/Loading.component';

describe('LoadingScreen component', () => {
  it('should match snapshot', () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
    expect(screen.queryByText('Loading...')).toBeInTheDocument();
  });
});
