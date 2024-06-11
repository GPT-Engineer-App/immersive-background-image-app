import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <Box bg="gray.800" px={4} py={2} color="white">
      <Flex justify="space-between" align="center">
        <Flex>
          <Link as={NavLink} to="/admin/dashboard" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Dashboard
          </Link>
          <Link as={NavLink} to="/admin/users" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Users
          </Link>
          <Link as={NavLink} to="/admin/inventory" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Inventory
          </Link>
          <Link as={NavLink} to="/admin/reports" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Reports
          </Link>
        </Flex>
        <Flex>
          <Link as={NavLink} to="/admin/profile" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Profile
          </Link>
          <Link as={NavLink} to="/logout" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Logout
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AdminNavbar;