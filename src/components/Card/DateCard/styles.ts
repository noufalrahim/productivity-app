import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardContainer: {
        paddingHorizontal: 16,
        margin: 10,
        paddingVertical: 16,
        borderRadius: 16,
        display: 'flex',
        gap: 16,
        // elevation: 3,
        // shadowColor: '#000',
        // shadowOpacity: 0.1,
        // shadowRadius: 5,
    },
    dateInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconAndText: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        gap: 8,
    },
    text: {
        fontSize: 14,
        fontWeight: '500',
    },
});
