import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";

const Logout = () => {
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
        <Heading mb={6} color="orange.400">You have been logged out</Heading>
        <Text fontSize="lg" mb={6}>Thank you for visiting our RV Dealership. We hope to see you again soon!</Text>
        <Link href="/">
          <Button colorScheme="orange" width="100%">Return to Login</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Logout;