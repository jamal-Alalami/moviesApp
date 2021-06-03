import { Navigation } from "react-native-navigation";
import { screenIds } from '.';
import { NativeModules } from 'react-native';
import setDefaultOptions from "./setDefaultOptions";


export const startApp = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: screenIds.HOME_SCREEN,
            options: {
            }
          }
        }]
      }
    }
  });

}


const setRoot = () => {
  Navigation.events().registerAppLaunchedListener(async () => {
    setDefaultOptions();
    Navigation.setRoot({
      root: {
        component: {
          name: screenIds.WELCOME_SCREEN,
          options: {
            topBar: {
              visible: false,
              drawBehind: true,
            },
            statusBar: {
              drawBehind: true,
              style: "light"
            }
          }
        }
      },
    });
  });
};

export default setRoot;