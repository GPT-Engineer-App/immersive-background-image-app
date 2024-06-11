import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    console.log("Attempting to login with username:", username);

    if (username === "admin" && password === "password123") {
      login({ username, role: "admin" });
      console.log("Admin login successful");
    } else if (username === "manager" && password === "password123") {
      login({ username, role: "manager" });
      console.log("Manager login successful");
    } else if (username === "salesman" && password === "password123") {
      login({ username, role: "salesman" });
      console.log("Salesman login successful");
    } else {
      setErrorMessage("Invalid username or password");
      console.log("Login failed: Invalid username or password");
    }
  };

  return (
    <Box
      bgImage="url('/images/rv-background.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
    >
      <Box bg="rgba(0, 0, 0, 0.7)" p={8} borderRadius="md" textAlign="center">
        <Heading mb={6} color="orange.400">Login</Heading>
        <Input 
          placeholder="Username" 
          mb={3} 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <Flex mb={3}>
          <Input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={togglePasswordVisibility} ml={2}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </Flex>
        {errorMessage && (
          <Text color="red.500" mb={3}>{errorMessage}</Text>
        )}
        <Button colorScheme="orange" width="100%" mb={3} onClick={handleLogin}>Login</Button>
      </Box>
    </Box>
  );
};

export default Login;