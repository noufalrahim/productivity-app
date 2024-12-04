import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        color: theme.colors.white,
        fontWeight: 'bold',
    },
    subHeading: {
        fontSize: 10,
        color: theme.colors.light,
    },
});
