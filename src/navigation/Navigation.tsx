// @flow

import { Navigation } from 'react-native-navigation';


export const push = (componentId: string, nextScreen: string, passProps: any, options: any) => {

  let component = {
    name: nextScreen,
    passProps: {
      ...passProps,
    },
    options: {
      ...options,
    },
  };

  Navigation.push(componentId, {
    component: component,
  });
};

export const pop = (componentId: string) => {
  Navigation.pop(componentId);
};

