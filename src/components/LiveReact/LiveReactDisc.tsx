import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import LeaperTheme from '../../constants/theme';
import { getInitials } from '../../utils/stringUtils';

export default function LiveReactDisc(props: { name: string }) {
    return (
        <View style={styles.container}>
            <Avatar.Text
                size={100}
                label={getInitials(props.name ?? '')}
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
