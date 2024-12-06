import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    HomeScreen: undefined,
    SettingsScreen: undefined,
    AllAppsScreen: undefined,
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
export type SettingsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SettingsScreen'>;
export type AllAppsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AllAppsScreen'>;
