import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { AppBarProps } from './types';
import { styles } from './styles';
export default function AppBar({ title, backgroundStyle, showBackButton = true, trailIcons, navigation }: AppBarProps) {
    return (
        <Appbar.Header style={backgroundStyle}>
            {
                showBackButton &&
                <Appbar.BackAction onPress={() => navigation.pop()} color={backgroundStyle.color} />
            }
            <Appbar.Content title={title} titleStyle={[{ color: backgroundStyle.color }, styles.appContent]} />
            {
                trailIcons && trailIcons.map((trailIcon, index) => (
                    <Appbar.Action key={index} icon={trailIcon.title} onPress={trailIcon.onClick} color={backgroundStyle.color}/>
                ))
            }
        </Appbar.Header>
    );
}
