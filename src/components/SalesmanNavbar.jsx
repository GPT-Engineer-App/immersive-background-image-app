import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const SalesmanNavbar = () => {
  return (
    <Box bg="gray.800" px={4} py={2} color="white">
      <Flex justify="space-between" align="center">
        <Flex>
          <Link as={NavLink} to="/salesman/dashboard" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Dashboard
          </Link>
          <Link as={NavLink} to="/salesman/leads" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Leads
          </Link>
          <Link as={NavLink} to="/salesman/appointments" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Appointments
          </Link>
        </Flex>
        <Flex>
          <Link as={NavLink} to="/salesman/profile" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
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

export default SalesmanNavbar;