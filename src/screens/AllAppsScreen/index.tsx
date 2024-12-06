import React from 'react';
import { ScrollView, Text, useColorScheme, View } from 'react-native';
import { theme } from '../../theme';
import { styles } from './styles';
import AppBar from '../../components/AppBar';
import { AllAppsScreenNavigationProp } from '../../navigators/type';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';

export default function AllAppsScreen({ navigation }: { navigation: AllAppsScreenNavigationProp }) {
    const isDarkMode = useColorScheme() !== 'dark';
    const [selectedApp, setSelectedApp] = React.useState<string | null>(null);
    const backgroundStyle = {
        backgroundColor: isDarkMode ? theme.colors.black : theme.colors.white,
        color: isDarkMode ? theme.colors.lighter : theme.colors.darker,
        primary: isDarkMode ? theme.colors.gray : theme.colors.lighter,
        secondary: isDarkMode ? theme.colors.dark : theme.colors.light,
        tertiary: isDarkMode ? theme.colors.darker : theme.colors.lighter,
    };

    const recommendedApps = [
        {
            id: '1',
            name: 'Google Chrome',
            icon: 'logo-apple',
        },
        {
            id: '2',
            name: 'Google Maps',
            icon: 'logo-apple',
        },
        {
            id: '3',
            name: 'Google Drive',
            icon: 'logo-apple',
        },
        {
            id: '4',
            name: 'Google Photos',
            icon: 'logo-apple',
        },
    ];

    const allApps = [
        {
            id: '1',
            name: 'Instagram',
            icon: 'logo-apple',
        },
        {
            id: '2',
            name: 'Facebook',
            icon: 'logo-apple',
        },
        {
            id: '3',
            name: 'Twitter',
            icon: 'logo-apple',
        },
        {
            id: '4',
            name: 'LinkedIn',
            icon: 'logo-apple',
        },
        {
            id: '5',
            name: 'Snapchat',
            icon: 'logo-apple',
        },
        {
            id: '6',
            name: 'Pinterest',
            icon: 'logo-apple',
        },
        {
            id: '7',
            name: 'WhatsApp',
            icon: 'logo-apple',
        },
        {
            id: '8',
            name: 'Telegram',
            icon: 'logo-apple',
        },
        {
            id: '9',
            name: 'Signal',
            icon: 'logo-apple',
        },
        {
            id: '10',
            name: 'Skype',
            icon: 'logo-apple',
        },
        {
            id: '11',
            name: 'Zoom',
            icon: 'logo-apple',
        },
        {
            id: '12',
            name: 'Google Meet',
            icon: 'logo-apple',
        },
        {
            id: '13',
            name: 'Microsoft Teams',
            icon: 'logo-apple',
        },
        {
            id: '14',
            name: 'Slack',
            icon: 'logo-apple',
        },
        {
            id: '15',
            name: 'Trello',
            icon: 'logo-apple',
        },
        {
            id: '16',
            name: 'Asana',
            icon: 'logo-apple',
        },
        {
            id: '17',
            name: 'Todoist',
            icon: 'logo-apple',
        },
        {
            id: '18',
            name: 'Notion',
            icon: 'logo-apple',
        },
        {
            id: '19',
            name: 'Evernote',
            icon: 'logo-apple',
        },
        {
            id: '20',
            name: 'OneNote',
            icon: 'logo-apple',
        },
        {
            id: '21',
            name: 'Google Keep',
            icon: 'logo-apple',
        },
    ];

    return (
        <View style={[backgroundStyle, styles.container]}>
            <AppBar title="Select an App" backgroundStyle={backgroundStyle} navigation={navigation} />
            <ScrollView style={styles.innerContainer}>
                <View>
                    <Text style={[{ color: backgroundStyle.primary }]}>Recommended</Text>
                    <View>
                        {
                            recommendedApps.map((app, index) => (
                                <View style={styles.appsContainer} key={index}>
                                    <View style={styles.iconAndText}>
                                        <Ionicons name="logo-apple" size={24} color={backgroundStyle.color} />
                                        <Text style={{ color: backgroundStyle.color }}>Instagram</Text>
                                    </View>
                                    <RadioButton
                                        value={app.id}
                                        status={selectedApp === app.id ? 'checked' : 'unchecked'}
                                        onPress={() => setSelectedApp(app.id)}
                                    />
                                </View>
                            ))}
                    </View>
                </View>
                <View>
                    <Text style={[{ color: backgroundStyle.primary }]}>All Apps</Text>
                    <View>
                        {
                            allApps.map((app, index) => (
                                <View style={styles.appsContainer} key={index}>
                                    <View style={styles.iconAndText}>
                                        <Ionicons name="logo-apple" size={24} color={backgroundStyle.color} />
                                        <Text style={{ color: backgroundStyle.color }}>Instagram</Text>
                                    </View>
                                    <RadioButton
                                        value={app.id}
                                        status={selectedApp === app.id ? 'checked' : 'unchecked'}
                                        onPress={() => setSelectedApp(app.id)}
                                    />
                                </View>
                            ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
