import { Box, Heading, Button, Table, Tbody, Td, Th, Thead, Tr, Flex, Input, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { client } from "../../lib/crud";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: "", password: "", role: "" });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await client.getWithPrefix("user:");
      setUsers(data.map(item => ({ id: item.key.split(":")[1], ...item.value })));
    };

    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = async () => {
    const userId = `user:${new Date().getTime()}`;
    await client.set(userId, newUser);
    setUsers([...users, { id: userId.split(":")[1], ...newUser }]);
    setNewUser({ username: "", password: "", role: "" });
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleUpdateUser = async () => {
    await client.set(`user:${editingUser.id}`, editingUser);
    setUsers(users.map(user => (user.id === editingUser.id ? editingUser : user)));
    setEditingUser(null);
  };

  const handleDeleteUser = async (userId) => {
    await client.delete(`user:${userId}`);
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Admin Dashboard</Heading>
      <Flex mb={4}>
        <Input placeholder="Username" name="username" value={newUser.username} onChange={handleInputChange} mr={2} />
        <Input placeholder="Password" name="password" value={newUser.password} onChange={handleInputChange} mr={2} />
        <Select placeholder="Select role" name="role" value={newUser.role} onChange={handleInputChange} mr={2}>
          <option value="salesman">Salesman</option>
          <option value="sales-manager">Sales Manager</option>
        </Select>
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
          {users.map(user => (
            <Tr key={user.id}>
              <Td>{user.username}</Td>
              <Td>{user.role}</Td>
              <Td>
                <Button size="sm" onClick={() => handleEditUser(user)} mr={2}>Edit</Button>
                <Button size="sm" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {editingUser && (
        <Box mt={4}>
          <Heading size="md" mb={2}>Edit User</Heading>
          <Flex mb={4}>
            <Input placeholder="Username" name="username" value={editingUser.username} onChange={(e) => setEditingUser({ ...editingUser, username: e.target.value })} mr={2} />
            <Input placeholder="Password" name="password" value={editingUser.password} onChange={(e) => setEditingUser({ ...editingUser, password: e.target.value })} mr={2} />
            <Select placeholder="Select role" name="role" value={editingUser.role} onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })} mr={2}>
              <option value="salesman">Salesman</option>
              <option value="sales-manager">Sales Manager</option>
            </Select>
            <Button onClick={handleUpdateUser}>Update User</Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default AdminDashboard;