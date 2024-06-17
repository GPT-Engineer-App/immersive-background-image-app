import { Box, Flex, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import SalesmanNavbar from "../components/SalesmanNavbar";
import SalesmanSidebar from "../components/SalesmanSidebar";
import AdminCard from "../components/AdminCard";

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
            <AdminCard title="Number of Leads">
              <Text color="black">{kpiData.numberOfLeads}</Text>
            </AdminCard>
            <AdminCard title="Conversion Rate">
              <Text color="black">{kpiData.conversionRate}%</Text>
            </AdminCard>
            <AdminCard title="Total Sales">
              <Text color="black">{kpiData.totalSales}</Text>
            </AdminCard>
          </SimpleGrid>
          <AdminCard title="Recent Leads">
            <Text color="black">[Recent Leads List]</Text>
          </AdminCard>
          <AdminCard title="Sales Pipeline">
            <Text color="black">[Sales Pipeline Visualization]</Text>
          </AdminCard>
          <AdminCard title="Upcoming Appointments/Tasks">
            <Text color="black">[Upcoming Appointments/Tasks List]</Text>
          </AdminCard>
          <AdminCard title="Lead Management">
            <Text color="black">[Lead Management Actions]</Text>
          </AdminCard>
          <AdminCard title="Customer Interaction">
            <Text color="black">[Customer Interaction Tracking]</Text>
          </AdminCard>
        </Box>
      </Flex>
    </Box>
  );
};

export default SalesmanDashboard;