import { Box, Button, Flex, Heading, Input, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useState } from "react";

const Leads = () => {
  const [leads, setLeads] = useState([]);
  const [newLead, setNewLead] = useState({ name: "", contactInfo: "", rvType: "", leadSource: "", status: "", assignedSalesperson: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLead({ ...newLead, [name]: value });
  };

  const handleAddLead = () => {
    setLeads([...leads, newLead]);
    setNewLead({ name: "", contactInfo: "", rvType: "", leadSource: "", status: "", assignedSalesperson: "" });
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Leads</Heading>
      <Flex mb={4}>
        <Input placeholder="Name" name="name" value={newLead.name} onChange={handleInputChange} mr={2} />
        <Input placeholder="Contact Info" name="contactInfo" value={newLead.contactInfo} onChange={handleInputChange} mr={2} />
        <Input placeholder="RV Type" name="rvType" value={newLead.rvType} onChange={handleInputChange} mr={2} />
        <Input placeholder="Lead Source" name="leadSource" value={newLead.leadSource} onChange={handleInputChange} mr={2} />
        <Input placeholder="Status" name="status" value={newLead.status} onChange={handleInputChange} mr={2} />
        <Input placeholder="Assigned Salesperson" name="assignedSalesperson" value={newLead.assignedSalesperson} onChange={handleInputChange} mr={2} />
        <Button onClick={handleAddLead}>Add Lead</Button>
      </Flex>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Contact Info</Th>
            <Th>RV Type</Th>
            <Th>Lead Source</Th>
            <Th>Status</Th>
            <Th>Assigned Salesperson</Th>
          </Tr>
        </Thead>
        <Tbody>
          {leads.map((lead, index) => (
            <Tr key={index}>
              <Td>{lead.name}</Td>
              <Td>{lead.contactInfo}</Td>
              <Td>{lead.rvType}</Td>
              <Td>{lead.leadSource}</Td>
              <Td>{lead.status}</Td>
              <Td>{lead.assignedSalesperson}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Leads;