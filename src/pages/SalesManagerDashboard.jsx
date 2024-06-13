import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import SalesmanSidebar from "../components/SalesmanSidebar";

const SalesManagerDashboard = () => {
  return (
    <Box>
      <Flex className="main-content" p={4}>
        <SalesmanSidebar />

        <Box className="content" flex="1" p={4}>
          <Box bg="gray.600" p={4} mb={4} borderRadius="md">
            <Heading size="md" mb={2}>KPI Summary</Heading>
            <Text>Total Sales: $XXX</Text>
            <Text>Conversion Rate: XX%</Text>
            <Text>Average Deal Size: $XXX</Text>
          </Box>
          <Box bg="gray.600" p={4} mb={4} borderRadius="md">
            <Heading size="md" mb={2}>Recent Leads</Heading>
            [Recent Leads List]
          </Box>
          <Box bg="gray.600" p={4} mb={4} borderRadius="md">
            <Heading size="md" mb={2}>Sales Pipeline</Heading>
            [Sales Pipeline Visualization]
          </Box>
          <Box bg="gray.600" p={4} mb={4} borderRadius="md">
            <Heading size="md" mb={2}>Upcoming Appointments/Tasks</Heading>
            [Upcoming Appointments/Tasks List]
          </Box>
          <Box bg="gray.600" p={4} mb={4} borderRadius="md">
            <Heading size="md" mb={2}>Salesperson Performance</Heading>
            [Salesperson Performance Metrics]
          </Box>
          <Box bg="gray.600" p={4} mb={4} borderRadius="md">
            <Heading size="md" mb={2}>Lead Source Performance</Heading>
            [Lead Source Performance Visualization]
          </Box>
          <Box bg="gray.600" p={4} mb={4} borderRadius="md">
            <Heading size="md" mb={2}>Lead Assignment</Heading>
            [Lead Assignment Status]
          </Box>
          <Box bg="gray.600" p={4} mb={4} borderRadius="md">
            <Heading size="md" mb={2}>Email Marketing</Heading>
            [Upcoming Automated Marketing Emails]
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SalesManagerDashboard;