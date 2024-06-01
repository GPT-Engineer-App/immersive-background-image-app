import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react";

const Dashboard = () => (
  <Box p={4}>
    <Heading mb={4}>Dashboard</Heading>
    <Flex direction="column" gap={4}>
      <Box bg="gray.100" p={4} borderRadius="md">
        <Heading size="md">Leads Overview</Heading>
        <Text>New: XX</Text>
        <Text>Active: XX</Text>
        <Text>Closed: XX</Text>
      </Box>
      <Box bg="gray.100" p={4} borderRadius="md">
        <Heading size="md">User Management</Heading>
        <Text>[User List with Actions]</Text>
      </Box>
      <Box bg="gray.100" p={4} borderRadius="md">
        <Heading size="md">RV Inventory Management</Heading>
        <Text>[Inventory List with Actions]</Text>
      </Box>
      <Box bg="gray.100" p={4} borderRadius="md">
        <Heading size="md">Sales Analytics and Reports</Heading>
        <Text>[Charts and Graphs]</Text>
      </Box>
      <Box bg="gray.100" p={4} borderRadius="md">
        <Heading size="md">Calendar</Heading>
        <Button colorScheme="green">Open Calendar</Button>
      </Box>
      <Box bg="gray.100" p={4} borderRadius="md">
        <Heading size="md">Notification Center</Heading>
        <Text>[Notifications]</Text>
      </Box>
    </Flex>
  </Box>
);

export default Dashboard;