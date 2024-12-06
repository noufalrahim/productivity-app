import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
    card: {
        backgroundColor: theme.colors.dark,
        padding: 10,
        gap: 10,
        borderRadius: 16,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        justifyContent: 'space-between',
        marginLeft: 10,
    },
    cardText: {
        paddingVertical: 10,
        fontSize: 14,
    },
    iconAndText: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
});
