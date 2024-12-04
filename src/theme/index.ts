import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
export const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      dark: Colors.dark,
      darker: Colors.darker,
      light: Colors.light,
      lighter: Colors.lighter,
      black: '#0A0A0A',
      white: Colors.white,
      primary: '#33CCFF',
      secondary: '#181818',
    },
};
