import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import SalesmanNavbar from "../components/SalesmanNavbar";
import SalesmanSidebar from "../components/SalesmanSidebar";
import SalesmanCard from "../components/SalesmanCard";

const SalesManagerDashboard = () => {
  return (
    <Box>
      <SalesmanNavbar />

      <Flex className="main-content" p={4}>
        <SalesmanSidebar />

        <Box className="content" flex="1" p={4}>
          <SalesmanCard title="Number of Leads">
            <Text color="black">{kpiData.numberOfLeads}</Text>
          </SalesmanCard>
          <SalesmanCard title="Conversion Rate">
            <Text color="black">{kpiData.conversionRate}%</Text>
          </SalesmanCard>
          <SalesmanCard title="Total Sales">
            <Text color="black">{kpiData.totalSales}</Text>
          </SalesmanCard>
        </Box>
      </Flex>
    </Box>
  );
};

export default SalesManagerDashboard;