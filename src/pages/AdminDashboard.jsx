import { Box, Button, Flex, Heading, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { client } from "../../lib/crud";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: "", role: "" });

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await client.getWithPrefix("user:");
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = async () => {
    await client.set(`user:${newUser.username}`, newUser);
    setUsers([...users, { key: `user:${newUser.username}`, value: newUser }]);
    setNewUser({ username: "", role: "" });
  };

  const handleDeleteUser = async (username) => {
    await client.delete(`user:${username}`);
    setUsers(users.filter(user => user.key !== `user:${username}`));
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Admin Dashboard</Heading>
      <Flex mb={4}>
        <Input placeholder="Username" name="username" value={newUser.username} onChange={handleInputChange} mr={2} />
        <Input placeholder="Role" name="role" value={newUser.role} onChange={handleInputChange} mr={2} />
        <Button onClick={handleAddUser}>Add User</Button>
      </Flex>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Username</Th>
            <Th>Role</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => (
            <Tr key={index}>
              <Td>{user.value.username}</Td>
              <Td>{user.value.role}</Td>
              <Td>
                <Button colorScheme="red" onClick={() => handleDeleteUser(user.value.username)}>Delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default AdminDashboard;