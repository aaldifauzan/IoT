import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';
import HistoryScreen from './HistoryScreen';
import ProfileScreen from './ProfileScreen';

const HomeScreen = () => {
  const [IR1Filled, setIR1Filled] = useState(false);
  const [IR2Filled, setIR2Filled] = useState(false);
  const [IR3Filled, setIR3Filled] = useState(false);

  const handleIRPress = (irNumber) => {
    switch (irNumber) {
      case 1:
        setIR1Filled(!IR1Filled);
        break;
      case 2:
        setIR2Filled(!IR2Filled);
        break;
      case 3:
        setIR3Filled(!IR3Filled);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <StatusBar backgroundColor={'#5F84A1'} barStyle={'dark-content'} />
      <View style={styles.container}>
        <View style={styles.rectangle}>
          <View style={styles.rowContainer}>
            <Image source={require('../images/Avatar.png')} style={styles.avatar} />
            <Text style={styles.text}>
              Hallo, Welcome{'\n'}
              <Text style={styles.boldText}>Muhammad Fauzan</Text>
            </Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={[styles.subtitle, { marginTop: 16 }]}>
            Tampilan Realtime Slot Parkir
          </Text>
          <View style={styles.rowContainer2}>
            <TouchableOpacity
              style={[
                styles.rectangleIR,
                { backgroundColor: IR1Filled ? '#038634' : '#4F1717' },
              ]}
              onPress={() => handleIRPress(1)}
            >
              <Text style={styles.irText}>IR1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.rectangleIR,
                { backgroundColor: IR2Filled ? '#038634' : '#4F1717' },
              ]}
              onPress={() => handleIRPress(2)}
            >
              <Text style={styles.irText}>IR2</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[
              styles.rectangleIR,
              { backgroundColor: IR3Filled ? '#038634' : '#4F1717' },
              { marginTop: 48 },
            ]}
            onPress={() => handleIRPress(3)}
          >
            <Text style={styles.irText}>IR3</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = require('../images/home.png');
          } else if (route.name === 'History') {
            iconSource = require('../images/history.png');
          } else if (route.name === 'Profile') {
            iconSource = require('../images/profile.png');
          }

          return <Image source={iconSource} style={[styles.icon, { tintColor: color }]} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#22313F',
        inactiveTintColor: '#FFFFFF',
        activeBackgroundColor: '#22313F',
        inactiveBackgroundColor: '#22313F',
        style: {
          backgroundColor: '#22313F',
        },
        tabStyle: {
          backgroundColor: '#5F84A1',
          height: 65,
          alignSelf: 'flex-end',
        },
        labelStyle: {
          bottom: '10%',
          fontFamily: 'Poppins-Medium',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#22313F',
    alignSelf: 'center',
    marginTop: 6,
    marginBottom: 10,
    top:10,
  },
  rectangle: {
    width: '100%',
    alignSelf: 'stretch',
    height: 120,
    backgroundColor: '#5F84A1',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
    borderBottomEndRadius:32,
    borderBottomStartRadius:32,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  rowContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:16,
    
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  boldText: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  avatar: {
    width: 48,
    height: 48,
    marginRight: 12,
  },
  rectangleIR: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F1717',
    borderRadius: 24,
    marginLeft:20,
    marginRight:20,
  },
  irText: {
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    fontSize: 20,
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default HomeTabNavigator;
