import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContainer: {
        padding: 25,
        borderRadius: 10,
    },
    cardHeader: {
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
    },
    version: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    versionText: {
        textAlign: 'center',
    },
});
