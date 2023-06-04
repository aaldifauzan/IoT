import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const handleSignUp = () => {
    // Add sign up logic or actions
    console.log("Sign Up pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.rectangle} />
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Masukkan Email" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Masukkan Password" secureTextEntry />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput style={styles.input} placeholder="Masukkan Nama Lengkap" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tanggal Lahir</Text>
        <TextInput style={styles.input} placeholder="Masukkan Tanggal Lahir" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>NIK</Text>
        <TextInput style={styles.input} placeholder="Masukkan NIK" />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Saya Setuju</Text>
      </TouchableOpacity>
      <Text style={styles.textLink} onPress={() => navigation.navigate('SignIn')}>
        Sudah punya akun? <Text style={styles.daftarText}>Sign In</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#97BAE0',
  },
  rectangle: {
    position: 'absolute',
    top: '10%',
    width: 400,
    height: 800,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
  },
  title: {
    color: '#000000',
    fontSize: 26,
    top: '2.5%',
    fontFamily: 'Poppins-Medium',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 4,
  },
  label: {
    color: '#000000',
    marginBottom: 5,
    fontFamily: 'Poppins-Regular',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  textLink: {
    color: '#787878',
    fontFamily: 'Poppins-Regular',
  },
  daftarText: {
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: '#22313F',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
  },
});

export default SignUpScreen;
