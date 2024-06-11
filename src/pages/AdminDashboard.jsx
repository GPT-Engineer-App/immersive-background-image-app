import { Box, Flex, Button, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import AdminCard from "../components/AdminCard";

import { useAuth } from "../hooks/useAuth";

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/login");
    }
  }, [user]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const openCalendar = () => setIsCalendarOpen(true);
  const closeCalendar = () => setIsCalendarOpen(false);

  return (
    <Box bg="gray.100">
      <AdminNavbar />

      <Flex className="main-content" p={4}>
        <AdminSidebar />

        <Box className="content" flex="1" p={4}>
          <AdminCard title="User Management">
            <Text color="black">[User List with Actions]</Text>
          </AdminCard>
          <AdminCard title="RV Inventory Management">
            <Text color="black">[Inventory List with Actions]</Text>
          </AdminCard>
          <AdminCard title="Sales Analytics and Reports">
            <Text color="black">[Charts and Graphs]</Text>
          </AdminCard>
          <AdminCard title="Calendar">
            <Button className="calendar-button" onClick={openCalendar}>Open Calendar</Button>
          </AdminCard>
          <AdminCard title="Notification Center">
            <Text color="black">[Notifications]</Text>
          </AdminCard>
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