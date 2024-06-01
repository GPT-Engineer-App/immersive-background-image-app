import { Box, Button, Flex, Heading, Input, Link, Text } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      bgImage="url('/assets/images/rv-background.jpg')"
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
        <Heading mb={6} color="orange.400">Welcome to RV Dealership</Heading>
        <Input placeholder="Username" mb={3} />
        <Flex mb={3}>
          <Input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
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
        <Button colorScheme="orange" width="100%" mb={3}>Login</Button>
        <Flex justify="center">
          <Link href="#" color="orange.400" mx={2}>Privacy Policy</Link>
          <Text>|</Text>
          <Link href="#" color="orange.400" mx={2}>Terms of Service</Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;