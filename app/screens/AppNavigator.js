import React from 'react';
import {Button, Text, View, Dimensions} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Icon} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import NavigationDrawerStructure from '../components/NavigationDrawerStructure';
import CustomSidebarMenu from '../components/CustomSidebarMenu';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import Page1Screen from './Page1Screen';
import RegisterPage1Screen from './tabs/RegisterPage1Screen';
import RegisterPage2Screen from './tabs/RegisterPage2Screen';
import Page21Screen from './tabs/Page21Screen';
import Page22Screen from './tabs/Page22Screen';

export default class AppNavigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const RegisterStack = createStackNavigator({
  RegisterPage1: {
    screen: RegisterPage1Screen,
    navigationOptions: ({ navigation }) => ({
      title: 'Register (1)',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    })
  },
  RegisterPage2: {
    screen: RegisterPage2Screen,
    navigationOptions: ({ navigation }) => ({
      title: 'Register (2)',
    })
  }
});

const Service2Stack = createStackNavigator({
  Page21Stack: {
    screen: Page21Screen,
    navigationOptions: ({ navigation }) => ({
      title: 'Page 21 Screen',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    })
  },
  Page22Stack: {
    screen: Page22Screen,
    navigationOptions: ({ navigation }) => ({
      title: 'Page 22 Screen'
    })
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Register: {
      screen: RegisterStack,
      navigationOptions: {
        tabBarLabel: 'Register',
      },
    },
    Bar2Tab: {
      screen: Service2Stack,
      navigationOptions: {
        tabBarLabel: 'Scan Booking',
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let iconName = 'home';

        return <Icon type="Icon" name={iconName} size={40} color={tintColor} />;
      },
    }),
    initialRouteName: 'Register',
    tabBarOptions: {
      activeTintColor: '#F5A623',
      inactiveTintColor: 'gray',
      showLabel: true,
      style: {
        height: 55,
        backgroundColor: 'white',
        borderTopWidth: 0.8,
        borderColor: 'grey',
      },
      labelStyle: {
        marginTop: -5,
        marginBottom: 5,
      },
    },
  },
);

global.currentScreenIndex = 0;
const DrawerNavigator = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    NavScreen1: {
      screen: RegisterStack,
      navigationOptions: {
        drawerLabel: 'Register',
      },
    },
    NavScreen2: {
      screen: Service2Stack,
      navigationOptions: {
        drawerLabel: 'Stack 2',
      },
    }
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 130,
  }
);

const AppsNavigator = createAppContainer(
  createSwitchNavigator(
    {
      SplashScreen: SplashScreen,
      Login: LoginScreen,
      Drawer: DrawerNavigator,
    },
    {
      initialRouteName: 'SplashScreen',
    },
  ),
);

const AppContainer = createAppContainer(AppsNavigator);
