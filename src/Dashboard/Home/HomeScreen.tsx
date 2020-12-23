import React, {useRef, useEffect} from 'react';
import {FC} from 'react';
import {View, Dimensions, ViewProps, StyleSheet} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Routers from '../../Routers';
import {useTheme} from '@react-navigation/native';
import {Center} from '../../Assets/Template/Center';
import Style from '../../Assets/Template/Style';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const {
  set,
  cond,
  eq,
  add,
  spring,
  Value,
  Clock,
  event,
  startClock,
  stopClock,
  clockRunning,
  sub,
  defined,
  Code,
  useCode,
} = Animated;

type Props = StackScreenProps<Routers, 'HomeScreen'>;
// export interface PropsAnimate extends Animated.AnimatedProps<ViewProps> {
//   // Custom props
// }

export const HomeScreen: FC<Props> = ({navigation, route}) => {
  const {colors} = useTheme();
  const {width} = Dimensions.get('screen');

  const [x, setTranslateX] = React.useState(new Value(0 ));
  const [y, setTranslatey] = React.useState(new Value(0));
  const [dragX, setDragX] = React.useState(new Value(0));
  const [state, setSstate] = React.useState(new Value(-1));

  const transX = new Value(0);

  const onGestureEvent = event([
    {nativeEvent: {translationX: x, translationY: y, state}},
  ]);
  const xx = cond(
    eq(state, State.ACTIVE),
    [
      //state active
      set(transX, dragX),
      transX,
    ],
    [
      //state inactive
      set(transX, 0),
      transX,
    ],
  );

  const onHandlerStartChange = (event: any) => {
    if (event.nativeEvent.oldState == State.ACTIVE) {
      setTranslateX(dragX)
    } else{
      setTranslateX(new Value(0))
    }
    
  };
  // useEffect(() => {
  //   const transX = new Value(0);
  //   cond(
  //     eq(state, State.ACTIVE),
  //     [set(transX, dragX), transX],
  //     [set(transX, 0), transX],
  //   );
  //   setTranslateX( transX )
  // }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStartChange}>
          <Animated.View
            style={[styles.box, {transform: [{translateX: x, translateY: y}]}]}>
            <Image
              source={require('../../Assets/Images/logo.png')}
              style={{
                width: 100,
                height: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              resizeMode="stretch"
            />
          </Animated.View>
        </PanGestureHandler>
      </View>

      {/* <View
        style={{
          height: 150,
          width: 150,
          borderRadius: 150 / 2,
          borderColor: 'red',
          borderWidth: 2,
          position: 'absolute',
        }}>
        <View>
          <Image
            source={require('../../Assets/Images/logo.png')}
            style={{
              width: 100,
              height: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            resizeMode="stretch"
          />
         
        </View>
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    borderWidth: 2,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
