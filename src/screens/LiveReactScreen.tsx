import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import Draggable from 'react-native-draggable';
import { Button, useTheme } from 'react-native-paper';
import ConfettiCannon from 'react-native-confetti-cannon';
import Explosion from 'react-native-confetti-cannon';
import LiveReactDisc from '../components/LiveReact/LiveReactDisc';
import LiveReactDial from '../components/LiveReact/LiveReactDial';

export function LiveReactScreen() {
    const confettiRef = useRef<Explosion>(null);

    function fireConfetti() {
        if (confettiRef.current) {
            confettiRef.current.start();
        }
    }

    const theme = useTheme();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    return (
        <View style={{ flex: 1, marginBottom: 30 }}>
            <View
                style={{
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onLayout={event => {
                    setDimensions({
                        width: event.nativeEvent.layout.width,
                        height: event.nativeEvent.layout.height,
                    });
                }}>
                <ConfettiCannon
                    count={75}
                    fadeOut
                    explosionSpeed={1000}
                    fallSpeed={4000}
                    origin={{ x: dimensions.width / 2, y: dimensions.height / 2 }}
                    autoStart={false}
                    ref={confettiRef}
                />
                <LiveReactDial actions={''} />
                <Draggable
                    x={dimensions.width / 2 - 60}
                    y={dimensions.height / 2 - 50}
                    touchableOpacityProps={{ activeOpacity: 0.8 }}
                    isCircle
                    renderSize={200}
                    maxX={1 * dimensions.width}
                    maxY={0.85 * dimensions.height}
                    minX={0 * dimensions.width}
                    minY={0.15 * dimensions.height}
                    animatedViewProps={{ accessibilityHint: 'drag' }}
                    shouldReverse={true}
                    onDrag={(event, gestureState) => {
                        console.log(gestureState.dx, gestureState.dy);
                    }}
                    onPressIn={() => {
                        fireConfetti();
                    }}>
                    <LiveReactDisc initials={'BA'} />
                </Draggable>
            </View>
            <Button
                mode="contained"
                onPress={() => {}}
                style={{ marginTop: 20, alignSelf: 'center' }}
                uppercase
                labelStyle={{
                    fontSize: 16,
                    fontFamily: 'JosefinSans_400Regular',
                }}>
                End Session
            </Button>
        </View>
    );
}

export default LiveReactScreen;
