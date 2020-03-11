import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Login from './Login';

storiesOf('Login', module).add('to Storybook', () => <Login showApp={linkTo('Button')} />);