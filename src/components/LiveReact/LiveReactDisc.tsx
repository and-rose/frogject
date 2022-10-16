import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import LeaperTheme from '../../constants/theme';

export default function LiveReactDisc(props: { initials: string }) {
    return (
        <View style={styles.container}>
            <Avatar.Text
                size={100}
                label={props.initials}
                style={{ backgroundColor: LeaperTheme.colors.secondary }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: LeaperTheme.colors.background,
        borderRadius: 100,
        elevation: 5,
    },
    text: {
        fontSize: 10,
        textAlign: 'center',
    },
});
