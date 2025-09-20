import {
  Squares2X2Icon,
  BoltIcon,
  UserGroupIcon,
  Bars3BottomLeftIcon,
  PlusIcon,
} from 'react-native-heroicons/outline';
import Home from '../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
  withSpring,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import ComingSoon from '../screens/Comming';

const Cases = () => <ComingSoon message="Cases screen is coming soon 🚀" />;
const Hearings = () => (
  <ComingSoon message="Hearings screen is coming soon ⚡" />
);
const Clients = () => <ComingSoon message="Clients screen is coming soon 👥" />;
const More = () => <ComingSoon message="More features are on the way 🔧" />;

// Animated Icon wrapper
const AnimatedIcon = ({children, focused}) => {
  const scale = useSharedValue(focused ? 1.2 : 1);
  const translateY = useSharedValue(focused ? -10 : 0);

  scale.value = withSpring(focused ? 1.2 : 1);
  translateY.value = withSpring(focused ? -10 : 0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}, {translateY: translateY.value}],
    };
  });

  return (
    <Animated.View
      style={[
        animatedStyle,
        focused && styles.focusedButton, // add glow + bg when focused
      ]}>
      {children}
    </Animated.View>
  );
};

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: '#0B1C2E',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
      }}>
      <Tab.Screen
        name="Cases"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <AnimatedIcon focused={focused}>
              <Squares2X2Icon size={28} color={focused ? '#000' : '#999'} />
            </AnimatedIcon>
          ),
        }}
      />
      <Tab.Screen
        name="Hearings"
        component={Hearings}
        options={{
          tabBarIcon: ({focused}) => (
            <AnimatedIcon focused={focused}>
              <BoltIcon size={28} color={focused ? '#000' : '#999'} />
            </AnimatedIcon>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Cases}
        options={{
          tabBarIcon: ({focused}) => (
            <AnimatedIcon focused={focused}>
              <PlusIcon size={32} color={focused ? '#000' : '#999'} />
            </AnimatedIcon>
          ),
        }}
      />
      <Tab.Screen
        name="Clients"
        component={Clients}
        options={{
          tabBarIcon: ({focused}) => (
            <AnimatedIcon focused={focused}>
              <UserGroupIcon size={28} color={focused ? '#000' : '#999'} />
            </AnimatedIcon>
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({focused}) => (
            <AnimatedIcon focused={focused}>
              <Bars3BottomLeftIcon
                size={28}
                color={focused ? '#000' : '#999'}
              />
            </AnimatedIcon>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  focusedButton: {
    backgroundColor: '#00FF99',
    borderRadius: 40,
    padding: 10,
    shadowColor: '#00FF99',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
  },
});
