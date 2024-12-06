import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 10,
        gap: 10,
        justifyContent: 'space-between',
    },
    endContainer: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    headerText: {
        fontSize: 15,
        fontWeight: 'semibold',
    },
    iconAndText: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    iconContainer: {
        padding: 10,
        borderRadius: 100,
    },
    subHeaderText: {
        fontSize: 12,
    },
    timestampText: {
        display: 'flex',
        flexDirection: 'row',
    },
});
