import { Box, Flex, Heading, Text, Button, Link } from "@chakra-ui/react";
import { useState } from "react";

const AdminDashboard = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const openCalendar = () => setIsCalendarOpen(true);
  const closeCalendar = () => setIsCalendarOpen(false);

  return (
    <Box>
      <Box className="navbar" bg="gray.800" px={4} py={2} color="white">
        <Flex justify="space-between" align="center">
          <Flex>
            <Link href="#" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
              Dashboard
            </Link>
            <Link href="#" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
              Users
            </Link>
            <Link href="#" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
              Inventory
            </Link>
            <Link href="#" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
              Reports
            </Link>
          </Flex>
          <Flex>
            <Link href="#" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
              Profile
            </Link>
            <Link href="#" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
              Logout
            </Link>
          </Flex>
        </Flex>
      </Box>

      <Flex className="main-content" p={4}>
        <Box className="sidebar" width="250px" bg="gray.700" p={4} color="white">
          <Box className="card" bg="gray.600" p={4} mb={4} borderRadius="md">
            <Heading size="md" mb={2}>Leads Overview</Heading>
            <Text>New: XX</Text>
            <Text>Active: XX</Text>
            <Text>Closed: XX</Text>
          </Box>
        </Box>

        <Box className="content" flex="1" p={4}>
          <Box className="card" bg="gray.600" p={4} mb={4} borderRadius="md">
            <Heading size="md" mb={2}>User Management</Heading>
            <Text>[User List with Actions]</Text>
          </Box>
          <Box className="card" bg="gray.600" p={4} mb={4} borderRadius="md">
            <Heading size="md" mb={2}>RV Inventory Management</Heading>
            <Text>[Inventory List with Actions]</Text>
          </Box>
          <Box className="card" bg="gray.600" p={4} mb={4} borderRadius="md">
            <Heading size="md" mb={2}>Sales Analytics and Reports</Heading>
            <Text>[Charts and Graphs]</Text>
          </Box>
          <Box className="card" bg="gray.600" p={4} mb={4} borderRadius="md">
            <Heading size="md" mb={2}>Calendar</Heading>
            <Button className="calendar-button" onClick={openCalendar}>Open Calendar</Button>
          </Box>
          <Box className="card" bg="gray.600" p={4} mb={4} borderRadius="md">
            <Heading size="md" mb={2}>Notification Center</Heading>
            <Text>[Notifications]</Text>
          </Box>
        </Box>
      </Flex>

      {isCalendarOpen && (
        <>
          <Box className="modal-overlay" position="fixed" top="0" left="0" width="100%" height="100%" bg="rgba(0, 0, 0, 0.5)" zIndex="999" onClick={closeCalendar}></Box>
          <Box className="calendar-modal" position="fixed" top="50%" left="50%" transform="translate(-50%, -50%)" bg="white" color="black" p={4} borderRadius="md" boxShadow="md" zIndex="1000">
            <Heading size="md" mb={4}>Calendar</Heading>
            <Box id="calendar">[Calendar Component]</Box>
            <Button mt={4} onClick={closeCalendar}>Close</Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default AdminDashboard;