import React from 'react';

import { shallow } from 'enzyme';

import { render } from '@testing-library/react';
import Avatar from 'ui/atoms/Avatar/Avatar.component';

describe('Avatar Component', () => {
  it('It should match snapshot with image src = https://s.dou.ua/img/avatars/200x200_158710.jpg', () => {
    const data = {
      src: 'https://s.dou.ua/img/avatars/200x200_158710.jpg',
      size: 30,
      extraClassName: 'HelloClass',
    };
    const { container } = render(<Avatar {...data} />);

    expect(container).toMatchSnapshot();

    const imageWrapper = shallow(<Avatar {...data} />);
    expect(imageWrapper.find('img').props().src).toBe(
      'https://s.dou.ua/img/avatars/200x200_158710.jpg',
    );
    expect(imageWrapper.find('img').props().alt).toBe(
      'https://s.dou.ua/img/avatars/200x200_158710.jpg',
    );
  });
});
