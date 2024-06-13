import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import SalesmanNavbar from "../components/SalesmanNavbar";
import SalesmanSidebar from "../components/SalesmanSidebar";
import AdminCard from "../components/AdminCard";

const SalesManagerDashboard = () => {
  return (
    <Box>
      <SalesmanNavbar />

      <Flex className="main-content" p={4}>
        <SalesmanSidebar />

        <Box className="content" flex="1" p={4}>
          <AdminCard title="KPI Summary">
            <Text>Total Sales: $XXX</Text>
            <Text>Conversion Rate: XX%</Text>
            <Text>Average Deal Size: $XXX</Text>
          </AdminCard>
          <AdminCard title="Recent Leads">
            [Recent Leads List]
          </AdminCard>
          <AdminCard title="Sales Pipeline">
            [Sales Pipeline Visualization]
          </AdminCard>
          <AdminCard title="Upcoming Appointments/Tasks">
            [Upcoming Appointments/Tasks List]
          </AdminCard>
          <AdminCard title="Salesperson Performance">
            [Salesperson Performance Metrics]
          </AdminCard>
          <AdminCard title="Lead Source Performance">
            [Lead Source Performance Visualization]
          </AdminCard>
          <AdminCard title="Lead Assignment">
            [Lead Assignment Status]
          </AdminCard>
          <AdminCard title="Email Marketing">
            [Upcoming Automated Marketing Emails]
          </AdminCard>
        </Box>
      </Flex>
    </Box>
  );
};

export default SalesManagerDashboard;