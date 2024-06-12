import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import SalesmanNavbar from "../components/SalesmanNavbar";
import SalesmanSidebar from "../components/SalesmanSidebar";
import AdminCard from "../components/AdminCard";

const SalesmanDashboard = () => {
  return (
    <Box>
      <SalesmanNavbar />

      <Flex className="main-content" p={4}>
        <SalesmanSidebar />

        <Box className="content" flex="1" p={4}>
          <AdminCard title="KPI Summary">
            <Text>Number of Leads: XX</Text>
            <Text>Conversion Rate: XX%</Text>
            <Text>Total Sales: $XXX</Text>
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
          <AdminCard title="Lead Management">
            [Lead Management Actions]
          </AdminCard>
          <AdminCard title="Customer Interaction">
            [Customer Interaction Tracking]
          </AdminCard>
        </Box>
      </Flex>
    </Box>
  );
};

export default SalesmanDashboard;