import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import Draggable from 'react-native-draggable';
import { useTheme } from 'react-native-paper';
import ConfettiCannon from 'react-native-confetti-cannon';
import Explosion from 'react-native-confetti-cannon';

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
            <Draggable
                renderSize={100}
                isCircle
                renderColor={theme.colors.primary}
                x={dimensions.width / 2 - 50}
                y={dimensions.height / 2 - 50}
                maxX={0.9 * dimensions.width}
                maxY={0.72 * dimensions.height}
                minX={0.1 * dimensions.width}
                minY={0.28 * dimensions.height}
                animatedViewProps={{ accessibilityHint: 'drag' }}
                shouldReverse={true}
                onDrag={(event, gestureState) => {
                    console.log(gestureState.dx, gestureState.dy);
                }}
                onPressIn={() => {
                    fireConfetti();
                }}
            />
        </View>
    );
}

export default LiveReactScreen;
