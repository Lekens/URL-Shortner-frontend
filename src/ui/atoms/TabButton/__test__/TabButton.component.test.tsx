import React from 'react';

import { shallow } from 'enzyme';

import TabButton from 'ui/atoms/TabButton/TabButton.component';
import { render } from '@testing-library/react';

describe('TabButton component', () => {
  it('Show match snapshot', () => {
    const executeClick = () => {};
    const { container } = render(
      <TabButton
        title="Hello Tab"
        onClick={executeClick}
        style={{ width: '20px' }}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should find Hello Tab on Dom', () => {
    const executeClick = () => {};
    const container = shallow(
      <TabButton
        title="Hello Tab"
        onClick={executeClick}
        style={{ width: '20px' }}
      />,
    );

    expect(container.contains(<span>Hello Tab</span>)).toBe(true);
  });
});
