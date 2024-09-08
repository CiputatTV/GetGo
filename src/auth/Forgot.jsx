import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ForgotPasswordForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUsingEmail, setIsUsingEmail] = useState(true); // Default to email

  const handleForgotPassword = () => {
    if (isUsingEmail && !email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }
    if (!isUsingEmail && !phone) {
      Alert.alert('Error', 'Please enter your phone number');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      // Simulate password reset process
      // Replace with actual password reset logic

      setIsLoading(false);
      Alert.alert('Success', 'Password reset link sent');
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>

      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, isUsingEmail && styles.activeToggle]}
          onPress={() => setIsUsingEmail(true)}
        >
          <Text style={[styles.toggleText, isUsingEmail && styles.activeToggleText]}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, !isUsingEmail && styles.activeToggle]}
          onPress={() => setIsUsingEmail(false)}
        >
          <Text style={[styles.toggleText, !isUsingEmail && styles.activeToggleText]}>Phone</Text>
        </TouchableOpacity>
      </View>

      {isUsingEmail ? (
        <View style={styles.inputContainer}>
          <Icon name="email" size={24} color="#007bff" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor="#aaa"
          />
        </View>
      ) : (
        <View style={styles.inputContainer}>
          <Icon name="phone" size={24} color="#007bff" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholderTextColor="#aaa"
          />
        </View>
      )}

      {isLoading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
          <Text style={styles.buttonText}>Send Reset Link</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.linkButton} onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Back to Login</Text>
      </TouchableOpacity>
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
  toggleContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  toggleButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 5,
  },
  activeToggle: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  toggleText: {
    color: '#007bff',
    fontSize: 16,
  },
  activeToggleText: {
    color: '#fff',
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
    paddingVertical: 0,
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
    marginTop: 20,
  },
  link: {
    color: '#007bff',
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
});

export default ForgotPasswordForm;
