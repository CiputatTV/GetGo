import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Sử dụng điều hướng
import { users } from './../data/userData'; // Import dữ liệu từ data.js

const LoginForm = () => {
  const [loginInput, setLoginInput] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Trạng thái loading
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Trạng thái hiển thị mật khẩu
  const navigation = useNavigation(); // Hook điều hướng

  const handleLogin = () => {
    setIsLoading(true); // Bắt đầu loading

    // Thực hiện load trong 3 giây
    setTimeout(() => {
      const user = users.find(
        (user) =>
          (user.email === loginInput || user.phone === loginInput || user.username === loginInput) &&
          user.password === password
      );

      setIsLoading(false); // Kết thúc loading

      if (user) {
        // Điều hướng dựa trên vai trò (role)
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
    }, 3000); // Chờ 3 giây
  };

  // Điều hướng đến màn hình quên mật khẩu
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  // Điều hướng đến màn hình đăng ký
  const handleSignUp = () => {
    navigation.navigate('Register');
  };

  // Chuyển đổi trạng thái hiển thị mật khẩu
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email, Phone, or Username"
        value={loginInput}
        onChangeText={setLoginInput}
        autoCapitalize="none"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible} // Điều kiện ẩn/hiện mật khẩu
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Text style={styles.toggleText}>{isPasswordVisible ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" /> // Hiển thị biểu tượng loading
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      )}

      {/* Nút Quên mật khẩu */}
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Nút Đăng ký */}
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.link}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#333',
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  inputPassword: {
    flex: 1,
    height: 48,
    fontSize: 16,
  },
  toggleText: {
    color: '#007bff',
    fontSize: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: '#007bff',
    marginTop: 12,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default LoginForm;
