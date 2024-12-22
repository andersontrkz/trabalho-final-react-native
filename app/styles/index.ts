import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: Colors.background,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.title,
        marginTop: 40,
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 16,
        fontStyle: 'italic',
        color: Colors.subtitle,
        marginBottom: 40,
    },
    input: {
        height: 50,
        width: '100%',
        backgroundColor: Colors.white,
        borderColor: '#DDDDDD',
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: Colors.tint,
        height: 40,
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        width: '100%',
        marginTop: 10,
    },
    label: {
        fontWeight: 'bold',
        color: Colors.white,
    },
    card: {
        borderWidth: 1,
        backgroundColor: Colors.white,
        marginTop: 30,
        width: '100%',
        borderColor: Colors.border,
        borderRadius: 10,
        padding: 20,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.cardTitle,
    },
    cardText: {
        fontSize: 16,
        color: Colors.cardText,
    },
});

export default styles;
