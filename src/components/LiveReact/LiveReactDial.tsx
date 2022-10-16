import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LeaperTheme from '../../constants/theme';

export default function LiveReactDial(props: { actions: string[3] }) {
    return (
        <View style={styles.dialContainer}>
            <LiveReactIcon icon={props.actions[0]} style={styles.topAction} />
            <LiveReactIcon icon={props.actions[1]} style={styles.bottomAction} />
            <LiveReactIcon icon={props.actions[2]} style={styles.leftAction} />
            <LiveReactIcon icon={props.actions[2]} style={styles.rightAction} />
        </View>
    );
}

function LiveReactIcon(props: { icon: string; style: any }) {
    return (
        <View style={[styles.iconContainer, props.style]}>
            <MaterialCommunityIcons name={'email'} size={35} style={{ padding: 10 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    dialContainer: {
        width: 380,
        height: 380,
    },
    iconContainer: {
        position: 'absolute',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: LeaperTheme.colors.background,
        borderRadius: 100,
        elevation: 5,
    },
    topAction: {
        top: 0,
        left: 150,
    },
    bottomAction: {
        bottom: 0,
        left: 150,
    },
    leftAction: {
        left: 0,
        top: 150,
    },
    rightAction: {
        right: 0,
        top: 150,
    },
});
