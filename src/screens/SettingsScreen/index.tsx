import React from 'react';
import {
    Text,
    View,
    useColorScheme,
} from 'react-native';
import { styles } from './styles';
import AppBar from '../../components/AppBar';
import CardBox from '../../components/Card';
import { theme } from '../../theme';
import { CardContentTypes } from '../../components/Card/types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SettingsScreenNavigationProp } from '../../navigators/type';
export default function SettingsScreen({navigation}: {navigation: SettingsScreenNavigationProp}) {
    const isDarkMode = useColorScheme() !== 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? theme.colors.black : theme.colors.white,
        color: isDarkMode ? theme.colors.lighter : theme.colors.darker,
    };

    const setupCardContents: CardContentTypes[] = [
        {
            title: 'Select An App',
            onClick: () => console.log('log/SettingsScreen/func: Select An App'),
            startIcon: <MaterialCommunityIcons name="tune-variant" size={18} color={backgroundStyle.color} />,
            trailIcon: 'chevron-right',
        },
        {
            title: 'Allow App Usage Permission',
            onClick: () => console.log('log/SettingsScreen/func: Allow App Usage Permission'),
            startIcon: <Ionicons name="grid" size={18} color={backgroundStyle.color} />,
            trailIcon: 'chevron-right',
        },
        {
            title: 'Turn On Accessibility Service',
            onClick: () => console.log('log/SettingsScreen/func: Turn On Accessibility Service'),
            startIcon: <Ionicons name="bar-chart" size={18} color={backgroundStyle.color} />,
            trailIcon: 'chevron-right',
        },
    ];

    const legalAndHelpCardContents: CardContentTypes[] = [
        {
            title: 'Privacy Policy',
            onClick: () => console.log('log/SettingsScreen/func: Privacy Policy'),
            startIcon: <Ionicons name="document" size={18} color={backgroundStyle.color} />,
            trailIcon: 'chevron-right',
        },
        {
            title: 'Terms of Service',
            onClick: () => console.log('log/SettingsScreen/func: Terms of Service'),
            startIcon: <Ionicons name="folder" size={18} color={backgroundStyle.color} />,
            trailIcon: 'chevron-right',
        },
        {
            title: 'Help',
            onClick: () => console.log('log/SettingsScreen/func: Help'),
            startIcon: <Ionicons name="help-circle" size={18} color={backgroundStyle.color} />,
            trailIcon: 'chevron-right',
        },
    ];

    return (
        <View style={[backgroundStyle, styles.container]}>
            <AppBar title="Settings" backgroundStyle={backgroundStyle} navigation={navigation}/>
            <View>
                <View style={[styles.cardContainer]}>
                    <Text style={[styles.cardHeader, { ...backgroundStyle }]}>SETUP</Text>
                    <CardBox backgroundStyle={backgroundStyle} cardContents={setupCardContents} />
                </View>
            </View>
            <View>
                <View style={[styles.cardContainer]}>
                    <Text style={[styles.cardHeader, { ...backgroundStyle }]}>LEGAL & HELP</Text>
                    <CardBox backgroundStyle={backgroundStyle} cardContents={legalAndHelpCardContents} />
                </View>
            </View>
            <View style={styles.version}>
                <Text style={[styles.versionText, backgroundStyle]}>V 1.0</Text>
            </View>
        </View>
    );
}
