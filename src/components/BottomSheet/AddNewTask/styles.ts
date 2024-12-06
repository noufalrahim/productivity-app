import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    },
    button: {
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: '600',
    },
    header: {
        marginVertical: 10,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    headerTextContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    iconBodyContainer: {
        padding: 10,
        borderRadius: 16,
    },
    iconHeaderContainer: {
        padding: 4,
        borderRadius: 20,
    },
    innerBodySection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        width: '100%',
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        width: '90%',
        paddingVertical: 20,
    },
    input: {
        width: '70%',
    },
    subHeaderText: {
        fontSize: 14,
    },
    textArea: {
        width: '100%',
        height: 100,
        maxHeight: 200,
    },
});
