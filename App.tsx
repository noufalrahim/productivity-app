import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { theme } from './src/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './src/navigators';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() !== 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? theme.colors.black : theme.colors.white,
    flex: 1,
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <RootNavigator />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
