import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './ProgressBar';

describe('<ProgressBar />', () => {
  it('renders <ProgressBar /> component progress set to 0', () => {
    shallow(<ProgressBar
      progress={0}
    />);
  });

  it('renders <ProgressBar /> component progress set to 25', () => {
    shallow(<ProgressBar
      position="top"
      progress={25}
    />);
  });

  it('renders <ProgressBar /> component progress set to 100', () => {
    shallow(<ProgressBar
      progress={100}
    />);
  });
});
