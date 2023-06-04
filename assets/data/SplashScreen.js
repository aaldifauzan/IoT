import React, { useState, useEffect } from "react";
import { View, Image, Dimensions, Text, StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const { width } = Dimensions.get("window");
  const [isLoaded, setIsLoaded] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    // Navigate to SignInScreen after the delay
    setTimeout(() => {
      navigation.navigate('SignIn');
    }, 2500);
  }, [navigation]);


  if (!isLoaded) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 550, // Adjust the width as needed
            height: 653,
            borderRadius: 500,
            backgroundColor: "#97BAE0",
            bottom: "35%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatusBar backgroundColor={'#97BAE0'} barStyle={"dark-content"} />
          <Image
            style={{
              width: 200, // Adjust the width as needed
              height: 200, // Adjust the height as needed
              top: "15%",
            }}
            source={require('../images/logoApp.png')}
          />
          <Text
            style={{
              color: "#22313F",
              fontSize: 12,
              fontFamily: "Poppins-Bold",
              top: "15%",
            }}
          >
            Your Health, Our Top Priority
          </Text>
        </View>
        <View
          style={{
            width: width,
            height: 99,
            backgroundColor: "#DBECF4",
            position: "absolute",
            bottom: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: 128, // Adjust the width as needed
              height: 58, // Adjust the height as needed
            }}
            source={require('../images/kemenkesLogo.png')}
          />
        </View>
      </View>
    );
  }
  return null;
};

export default SplashScreen;
