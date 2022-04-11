import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    centralView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        paddingTop: 45,
        paddingBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textFechar: {
        alignItems: 'center',
        marginTop: 8
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonAbrir: {
        backgroundColor: '#2196F3',
    },
    buttonFechar: {
        backgroundColor: 'red',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        alignItems: 'center',
    },
    modalText: {
        marginBottom: 15,
        lineHeight: 30,
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 8
    },
    linha: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
    }
});