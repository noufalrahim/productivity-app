import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    taskContainer: {
        paddingHorizontal: 20,
        display: 'flex',
        gap: 20,
    },
    footerContainer: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    footerText: {
        textAlign: 'center',
        fontWeight: '700',
    },
    header: {},
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 2,
        paddingVertical: 8,
        gap: 5,
    },
    innerContainer: {
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 14,
        borderRadius: 10,
    },
    line: {
        flex: 1,
        height: 1,
        marginHorizontal: 8,
    },
    text: {
        fontSize: 16,
    },
    number: {
        fontSize: 16,
    },
});
