import { Navigation } from "react-native-navigation";

const animations = () => {
  return {
    animations: {
      setRoot: {
        waitForRender: true,
        y: {
          from: 1000,
          to: 0,
          duration: 350,
          interpolation: 'accelerate',
        },
        alpha: {
          from: 0,
          to: 1,
          duration: 600,
          interpolation: 'accelerate'
        }
      },
      push: {
        enabled: true,
        waitForRender: true,
      },
    }
  };
};


const setDefaultOptions = () => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
      drawBehind: true
    },
    statusBar: {
      drawBehind: true,
      style: "dark"
    },
    ...animations(),
  });
};

export default setDefaultOptions;
