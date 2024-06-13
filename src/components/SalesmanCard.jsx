import { Box, Heading, Text } from "@chakra-ui/react";

const SalesmanCard = ({ title, children }) => {
  return (
    <Box bg="gray.600" p={4} mb={4} borderRadius="md">
      <Heading size="md" mb={2}>{title}</Heading>
      <Text>{children}</Text>
    </Box>
  );
};

export default SalesmanCard;