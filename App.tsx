import 'react-native-gesture-handler';
import React, { useRef } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { theme } from './src/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './src/navigators';
// import BottomSheetComponent from './src/components/BottomSheet';
// import BottomSheet from '@gorhom/bottom-sheet';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() !== 'dark';
  // const bottomSheetRef = useRef<BottomSheet>(null);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? theme.colors.black : theme.colors.white,
    flex: 1,
  };

//   const openBottomSheet = () => {
//     console.log('log/HomeScreen/info: Opening bottom sheet');
//     bottomSheetRef.current?.expand();
// };

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <RootNavigator />
      {/* <BottomSheetComponent bottomSheetRef={bottomSheetRef} /> */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
