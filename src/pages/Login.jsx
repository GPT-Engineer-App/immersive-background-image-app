import { Box, Button, Flex, Heading, Input, Text, Link } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [greeting, setGreeting] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (username === "admin" && password === "password123") {
      login({ username, role: "admin" });
    } else if (username === "manager" && password === "password123") {
      login({ username, role: "manager" });
    } else if (username === "salesman" && password === "password123") {
      login({ username, role: "salesman" });
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return "Good Morning";
    } else if (currentHour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  useEffect(() => {
    const user = "Cannon"; // Replace with actual logic to fetch the logged-in user's name
    setGreeting(`${getGreeting()} ${user}`);
  }, []);

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
        <Heading mb={6} color="orange.400">{greeting}</Heading>
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
        <Flex justify="space-between" mb={3}>
          <Flex align="center">
            <Input type="checkbox" id="remember-me" mr={2} />
            <Text>Remember Me</Text>
          </Flex>
          <Link href="#" color="orange.400">Forgot Password?</Link>
        </Flex>
        {errorMessage && (
          <Text color="red.500" mb={3}>{errorMessage}</Text>
        )}
        <Button colorScheme="orange" width="100%" mb={3} onClick={handleLogin}>Login</Button>
        <Flex justify="center">
          <Link href="#" color="orange.400" mx={2}>Privacy Policy</Link>
          <Text>|</Text>
          <Link href="#" color="orange.400" mx={2}>Terms of Service</Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Login;