// @flow

import { Navigation } from 'react-native-navigation';
import screenIds from './screenIds';
import {
  WelcomeScreen,
  HomeScreen,
  MovieScreen,
} from 'src/screens';

export default function () {
  Navigation.registerComponent(screenIds.WELCOME_SCREEN, () => WelcomeScreen);
  Navigation.registerComponent(screenIds.HOME_SCREEN, () => HomeScreen);
  Navigation.registerComponent(screenIds.MOVIES_SCREEN, () => MovieScreen);

}
