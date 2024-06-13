import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import SalesmanNavbar from "../components/SalesmanNavbar";
import SalesmanSidebar from "../components/SalesmanSidebar";

import { client } from "../../lib/crud";

const SalesmanCard = ({ title, children }) => {
  return (
    <Box bg="gray.600" p={4} mb={4} borderRadius="md">
      <Heading size="md" mb={2}>{title}</Heading>
      <Text>{children}</Text>
    </Box>
  );
};

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
            <SalesmanCard title="Number of Leads">
              <Text color="black">{kpiData.numberOfLeads}</Text>
            </SalesmanCard>
            <SalesmanCard title="Conversion Rate">
              <Text color="black">{kpiData.conversionRate}%</Text>
            </SalesmanCard>
            <SalesmanCard title="Total Sales">
              <Text color="black">{kpiData.totalSales}</Text>
            </SalesmanCard>
          </SimpleGrid>
          <SalesmanCard title="Recent Leads">
            <Text color="black">[Recent Leads List]</Text>
          </SalesmanCard>
          <SalesmanCard title="Sales Pipeline">
            <Text color="black">[Sales Pipeline Visualization]</Text>
          </SalesmanCard>
          <SalesmanCard title="Upcoming Appointments/Tasks">
            <Text color="black">[Upcoming Appointments/Tasks List]</Text>
          </SalesmanCard>
          <SalesmanCard title="Lead Management">
            <Text color="black">[Lead Management Actions]</Text>
          </SalesmanCard>
          <SalesmanCard title="Customer Interaction">
            <Text color="black">[Customer Interaction Tracking]</Text>
          </SalesmanCard>
        </Box>
      </Flex>
    </Box>
  );
};

export default SalesmanDashboard;