import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Draggable from 'react-native-draggable';
import { Button, Dialog, Paragraph, Portal, RadioButton, useTheme, Text } from 'react-native-paper';
import ConfettiCannon from 'react-native-confetti-cannon';
import Explosion from 'react-native-confetti-cannon';
import LiveReactDisc from '../components/LiveReact/LiveReactDisc';
import LiveReactDial from '../components/LiveReact/LiveReactDial';
import * as Haptics from 'expo-haptics';

export function LiveReactScreen(props: { navigation: any; route: any }) {
    const confettiRef = useRef<Explosion>(null);
    const [sessionLive, setSessionLive] = useState(false);
    const [visible, setVisible] = React.useState(false);
    const [endorseVisible, setEndorseVisible] = React.useState(false);
    const hideDialog = () => setVisible(false);
    const hideEndorseDialog = () => setEndorseVisible(false);
    const [endorseValue, setEndorseValue] = React.useState('first');

    function fireConfetti() {
        if (confettiRef.current) {
            confettiRef.current.start();
        }
    }

    const theme = useTheme();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    function checkDrag(pageX: number, pageY: number) {
        if (pageX < dimensions.width / 3) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        } else if (pageX > (dimensions.width / 3) * 2) {
            fireConfetti();
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        } else if (pageY < dimensions.height / 3) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        } else if (pageY > dimensions.height / 3) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
    }

    return (
        <View style={{ flex: 1, marginBottom: 30, justifyContent: 'center' }}>
            {sessionLive ? (
                <>
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
                            count={25}
                            fadeOut
                            explosionSpeed={1000}
                            fallSpeed={4000}
                            origin={{ x: dimensions.width - 60, y: dimensions.height / 2 }}
                            autoStart={false}
                            ref={confettiRef}
                        />
                        <LiveReactDial
                            actions={['thumb-down', 'thumb-up', 'fire', 'party-popper']}
                        />
                        <Draggable
                            x={dimensions.width / 2 - 61}
                            y={dimensions.height / 2 - 61}
                            touchableOpacityProps={{ activeOpacity: 0.8 }}
                            isCircle
                            renderSize={200}
                            maxX={1 * dimensions.width}
                            maxY={0.85 * dimensions.height}
                            minX={0 * dimensions.width}
                            minY={0.15 * dimensions.height}
                            animatedViewProps={{ accessibilityHint: 'drag' }}
                            shouldReverse={true}
                            onDragRelease={e => {
                                checkDrag(e.nativeEvent.pageX, e.nativeEvent.pageY);
                            }}>
                            <LiveReactDisc name={props.route.params.name} />
                        </Draggable>
                    </View>
                    <Button
                        mode="contained"
                        onPress={() => {
                            setVisible(true);
                        }}
                        style={{ marginTop: 20, alignSelf: 'center' }}
                        uppercase
                        labelStyle={{
                            fontSize: 16,
                            fontFamily: 'JosefinSans_400Regular',
                        }}>
                        End Session
                    </Button>
                    <Portal>
                        <Dialog visible={visible} dismissable={false}>
                            <Dialog.Icon icon="alert" />
                            <Dialog.Title style={styles.title}>End Live React Session</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph>
                                    Are you sure you would like to end your session with{' '}
                                    {props.route.params.name}?
                                </Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button onPress={hideDialog}>Cancel</Button>
                                <Button
                                    onPress={() => {
                                        hideDialog();
                                        setEndorseVisible(true);
                                    }}>
                                    Yes
                                </Button>
                            </Dialog.Actions>
                        </Dialog>
                        <Dialog visible={endorseVisible} dismissable={true}>
                            <Dialog.Icon icon="alert" />
                            <Dialog.Title style={styles.title}>
                                Would you like to gift {props.route.params.name} an endorsement?
                            </Dialog.Title>
                            <Dialog.Content>
                                <RadioButton.Group
                                    onValueChange={newValue => setEndorseValue(newValue)}
                                    value={endorseValue}>
                                    <RadioButton.Item label="Good Sportsmanship" value="first" />
                                    <RadioButton.Item label="Most Valuable Player" value="second" />
                                    <RadioButton.Item label="Clutched Up" value="third" />
                                </RadioButton.Group>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button
                                    onPress={() => {
                                        hideEndorseDialog();
                                        setSessionLive(false);
                                    }}>
                                    Maybe Next Time
                                </Button>
                                <Button
                                    onPress={() => {
                                        hideEndorseDialog();
                                        setSessionLive(false);
                                    }}>
                                    Submit
                                </Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </>
            ) : (
                <Button
                    mode="contained"
                    onPress={() => {
                        setSessionLive(true);
                    }}
                    style={{ marginTop: 20, alignSelf: 'center' }}
                    uppercase
                    labelStyle={{
                        fontSize: 16,
                        fontFamily: 'JosefinSans_400Regular',
                    }}>
                    Start Session
                </Button>
            )}
        </View>
    );
}

export default LiveReactScreen;

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
    },
});
