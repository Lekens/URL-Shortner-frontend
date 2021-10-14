import React from 'react';

import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import ComponentWrapper from 'ui/atoms/ComponentWrapper/ComponentWrapper.component';

describe('Should test ComponentWrapper', () => {
  it('Should match snapshot', () => {
    const state = {
      getState() {},
      subscribe: () => {},
      dispatch: () => {},
    };
    const { container } = render(
      <Provider store={state as any}>
        <ComponentWrapper>
          <div>Hello World</div>
        </ComponentWrapper>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
  it('Should find Hello text on Dom', () => {
    const state = {
      getState() {},
      subscribe: () => {},
      dispatch: () => {},
    };
    const container = shallow(
      <Provider store={state as any}>
        <ComponentWrapper>
          <div>Hello World, This is a Child Dom</div>
        </ComponentWrapper>
      </Provider>,
    );

    expect(
      container.contains(<div>Hello World, This is a Child Dom</div>),
    ).toBe(true);
  });
});
