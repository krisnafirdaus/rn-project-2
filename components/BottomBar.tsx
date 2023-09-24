import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { assets } from '../constants';
import News from "../screens/News";
import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import Chats from "../screens/Chats";

const Tab = createBottomTabNavigator();

const BottomBar = () => {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image source={assets.Feed} />
            ),
          }}
        />
        <Tab.Screen
          name="Chats"
          component={Chats}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image source={assets.Chats} />
            ),
          }}
        />
        <Tab.Screen
          name="News"
          component={News}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image source={assets.News} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image source={assets.Profile} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  
export default BottomBar;