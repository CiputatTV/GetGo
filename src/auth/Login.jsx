import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LoginForm = () => {
  const [loginInput, setLoginInput] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false); // New state for sign-up loading
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    setIsLoading(true);

    setTimeout(() => {
      // Simulate user data (replace with actual user data fetching)
      const users = [
        { email: 'test@example.com', phone: '1234567890', username: 'testuser', password: 'password', role: 'user' },
        // Add other user roles as needed
      ];

      const user = users.find(
        (user) =>
          (user.email === loginInput || user.phone === loginInput || user.username === loginInput) &&
          user.password === password
      );

      setIsLoading(false);

      if (user) {
        switch (user.role) {
          case 'user':
            navigation.navigate('UserTab');
            break;
          case 'admin':
            navigation.navigate('AdminTab');
            break;
          case 'driver':
            navigation.navigate('DriverTab');
            break;
          default:
            Alert.alert('Error', 'Unknown role');
        }
      } else {
        Alert.alert('Login Failed', 'Invalid credentials');
      }
    }, 3000);
  };

  const handleForgotPassword = () => {
    navigation.navigate('Forgot');
  };

  const handleSignUp = () => {
    setIsSigningUp(true);

    setTimeout(() => {
      setIsSigningUp(false);
      navigation.navigate('Register');
    }, 5000); // 5 seconds delay
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.inputContainer}>
        <Icon name="person" size={20} color="#aaa" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email, Phone, or Username"
          value={loginInput}
          onChangeText={setLoginInput}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styles.passwordContainer}>
        <Icon name="lock" size={20} color="#aaa" style={styles.icon} />
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
          <Text style={styles.toggleText}>{isPasswordVisible ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={handleForgotPassword} style={styles.linkButton}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignUp} style={styles.linkButton}>
        <Text style={styles.link}>Sign Up</Text>
      </TouchableOpacity>

      {isSigningUp && (
        <ActivityIndicator size="large" color="#007bff" style={styles.loadingIndicator} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#333',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  inputPassword: {
    flex: 1,
    fontSize: 16,
  },
  toggleButton: {
    padding: 10,
  },
  toggleText: {
    color: '#007bff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkButton: {
    marginBottom: 10,
  },
  link: {
    color: '#007bff',
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
  loadingIndicator: {
    marginTop: 20,
  },
});

export default LoginForm;
