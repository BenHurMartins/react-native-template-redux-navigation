import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Typography, Colors} from '../constants';

import {getUser} from '../actions/UserActions';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const LoginStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const headerGlobalStyles = () => {
  return {
    headerStyle: {
      backgroundColor: Colors.background,
    },
    headerTintColor: Colors.white,
  };
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={({navigation, route}) => ({
          headerTitle: 'Home',
          ...headerGlobalStyles(),
        })}
      />
    </HomeStack.Navigator>
  );
};
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={({navigation, route}) => ({
          headerTitle: 'Profile',
          ...headerGlobalStyles(),
        })}
      />
    </ProfileStack.Navigator>
  );
};

const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={({navigation, route}) => ({
          headerShown: false,
        })}
      />
      <LoginStack.Screen
        name="SignUp"
        component={SignUp}
        options={({navigation, route}) => ({
          headerTitle: 'SignUp',
          ...headerGlobalStyles(),
        })}
      />
    </LoginStack.Navigator>
  );
};

const TabContainer = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {color: Colors.textColor},
        activeBackgroundColor: Colors.navigationBarSelected,
        inactiveBackgroundColor: Colors.navigationBar,
        style: {backgroundColor: Colors.navigationBar},
        // showLabel: false,
      }}
      screenOptions={({route}) => ({
        // tabBarIcon: ({focused, color, size}) => {
        //   let iconName;
        //   switch (route.name) {
        //     case 'Home':
        //       iconName = 'currency-usd';
        //       break;
        //     case 'Profile':
        //       iconName = 'face-profile';
        //       break;
        //     default:
        //       break;
        //   }
        //   return (
        //     <Icon
        //       name={iconName}
        //       size={
        //         focused ? Typography.bigFontSize : Typography.mediumFontSize
        //       }
        //       color={Colors.textColor}
        //     />
      })}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};

const Routes = props => {
  useEffect(() => {
    props.getUser();
  }, []);
  // console.log(props.auth);
  return props.auth ? (
    <>
      <NavigationContainer>
        <TabContainer />
      </NavigationContainer>
    </>
  ) : (
    <NavigationContainer>
      <LoginStackScreen />
    </NavigationContainer>
  );
};

mapStateToProps = state => {
  const {user, auth} = state.UserReducer;
  return {user, auth};
};

export default connect(
  mapStateToProps,
  {getUser},
)(Routes);
