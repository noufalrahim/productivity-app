import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {},
    card: {
        width: '100%',
    },
    header: {
        marginVertical: 10,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    iconContainer: {
        padding: 4,
        borderRadius: 20,
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        width: '90%',
        paddingVertical: 20,
    },
});
