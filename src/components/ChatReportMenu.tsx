import React from 'react';
import { View } from 'react-native';
import { Divider, IconButton, Menu } from 'react-native-paper';

export function ChatMoreMenu(props: { route: any; navigation: any }) {
    const [showMenu, setShowMenu] = React.useState(false);

    return (
        <View style={{}}>
            <Menu
                visible={showMenu}
                onDismiss={() => setShowMenu(false)}
                anchor={<IconButton icon="dots-vertical" onPress={() => setShowMenu(true)} />}>
                <Menu.Item leadingIcon="alert" onPress={() => {}} title="Report User" />
                <Menu.Item
                    leadingIcon="gamepad-variant"
                    onPress={() => {
                        props.navigation.navigate('LiveReact');
                        setShowMenu(false);
                    }}
                    title="Launch Live React"
                />
            </Menu>
        </View>
    );
}
