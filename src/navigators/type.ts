import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    HomeScreen: {
        openBottomSheet: () => void;
    },
    SettingsScreen: undefined
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
export type SettingsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SettingsScreen'>;
