import { Box, Heading, Text } from "@chakra-ui/react";

const AdminSidebar = () => {
  return (
    <Box width="250px" bg="gray.700" p={4} color="white">
      <Box bg="gray.600" p={4} mb={4} borderRadius="md" color="white">
        <Heading size="md" mb={2}>Leads Overview</Heading>
        <Text>New: XX</Text>
        <Text>Active: XX</Text>
        <Text>Closed: XX</Text>
      </Box>
    </Box>
  );
};

export default AdminSidebar;