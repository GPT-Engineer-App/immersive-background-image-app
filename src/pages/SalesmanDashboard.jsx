import { Box, Flex, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import SalesmanNavbar from "../components/SalesmanNavbar";
import SalesmanSidebar from "../components/SalesmanSidebar";


import { client } from "../../lib/crud";

const SalesmanDashboard = () => {
  const [kpiData, setKpiData] = useState({
    numberOfLeads: 0,
    conversionRate: 0,
    totalSales: 0,
  });

  useEffect(() => {
    const fetchKpiData = async () => {
      try {
        console.log("Fetching KPI data...");
        const numberOfLeads = await client.get("kpi:numberOfLeads");
        const conversionRate = await client.get("kpi:conversionRate");
        const totalSales = await client.get("kpi:totalSales");

        setKpiData({
          numberOfLeads: numberOfLeads?.[0]?.value || 0,
          conversionRate: conversionRate?.[0]?.value || 0,
          totalSales: totalSales?.[0]?.value || 0,
        });
      } catch (error) {
        console.error("Error fetching KPI data:", error);
      }
    };

    fetchKpiData();
  }, []);
  return (
    <Box>
      <SalesmanNavbar />

      <Flex className="main-content" p={4}>
        <SalesmanSidebar />

        <Box className="content" flex="1" p={4}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            <Box bg="gray.600" p={4} mb={4} borderRadius="md">
              <Heading size="md" mb={2}>Number of Leads</Heading>
              <Text color="black">{kpiData.numberOfLeads}</Text>
            </Box>
            <Box bg="gray.600" p={4} mb={4} borderRadius="md">
              <Heading size="md" mb={2}>Conversion Rate</Heading>
              <Text color="black">{kpiData.conversionRate}%</Text>
            </Box>
            <Box bg="gray.600" p={4} mb={4} borderRadius="md">
              <Heading size="md" mb={2}>Total Sales</Heading>
              <Text color="black">{kpiData.totalSales}</Text>
            </Box>
          </SimpleGrid>
          <Box bg="gray.600" p={4} mb={4} borderRadius="md">
            <Heading size="md" mb={2}>Recent Leads</Heading>
            <Text color="black">[Recent Leads List]</Text>
          </Box>
          <Box bg="gray.600" p={4} mb={4} borderRadius="md">
            <Heading size="md" mb={2}>Sales Pipeline</Heading>
            <Text color="black">[Sales Pipeline Visualization]</Text>
          </Box>
          <Box bg="gray.600" p={4} mb={4} borderRadius="md">
            <Heading size="md" mb={2}>Upcoming Appointments/Tasks</Heading>
            <Text color="black">[Upcoming Appointments/Tasks List]</Text>
          </Box>
          <Box bg="gray.600" p={4} mb={4} borderRadius="md">
            <Heading size="md" mb={2}>Lead Management</Heading>
            <Text color="black">[Lead Management Actions]</Text>
          </Box>
          <Box bg="gray.600" p={4} mb={4} borderRadius="md">
            <Heading size="md" mb={2}>Customer Interaction</Heading>
            <Text color="black">[Customer Interaction Tracking]</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SalesmanDashboard;