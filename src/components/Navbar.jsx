import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" px={4} py={2} color="white">
      <Flex justify="space-between" align="center">
        <Flex>
          <Link as={NavLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Home
          </Link>
          <Link as={NavLink} to="/about" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
            About
          </Link>
          <Link as={NavLink} to="/contact" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Contact
          </Link>
        </Flex>
        <Flex>
          <Link as={NavLink} to="/profile" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Profile
          </Link>
          <Link as={NavLink} to="/logout" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Logout
          </Link>
          <Link as={NavLink} to="/admin" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Admin
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;