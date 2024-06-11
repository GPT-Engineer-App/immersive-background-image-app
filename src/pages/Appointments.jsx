import { Box, Button, Flex, Heading, Input, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useState } from "react";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({ date: "", time: "", customerName: "", rvType: "", appointmentType: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleAddAppointment = () => {
    setAppointments([...appointments, newAppointment]);
    setNewAppointment({ date: "", time: "", customerName: "", rvType: "", appointmentType: "" });
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Appointments</Heading>
      <Flex mb={4}>
        <Input placeholder="Date" name="date" value={newAppointment.date} onChange={handleInputChange} mr={2} />
        <Input placeholder="Time" name="time" value={newAppointment.time} onChange={handleInputChange} mr={2} />
        <Input placeholder="Customer Name" name="customerName" value={newAppointment.customerName} onChange={handleInputChange} mr={2} />
        <Input placeholder="RV Type" name="rvType" value={newAppointment.rvType} onChange={handleInputChange} mr={2} />
        <Input placeholder="Appointment Type" name="appointmentType" value={newAppointment.appointmentType} onChange={handleInputChange} mr={2} />
        <Button onClick={handleAddAppointment}>Add Appointment</Button>
      </Flex>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Time</Th>
            <Th>Customer Name</Th>
            <Th>RV Type</Th>
            <Th>Appointment Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {appointments.map((appointment, index) => (
            <Tr key={index}>
              <Td>{appointment.date}</Td>
              <Td>{appointment.time}</Td>
              <Td>{appointment.customerName}</Td>
              <Td>{appointment.rvType}</Td>
              <Td>{appointment.appointmentType}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Appointments;