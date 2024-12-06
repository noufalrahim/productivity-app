import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    appsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        marginBottom: 15,
        borderRadius: 8,
    },
    container: {
        flex: 1,
    },
    iconAndText: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        gap: 10,
    },
    innerContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        display: 'flex',
        gap: 2,
    },
    appName: {
        fontSize: 16,
        fontWeight: '600',
    },
    radioButton: {
        marginLeft: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
