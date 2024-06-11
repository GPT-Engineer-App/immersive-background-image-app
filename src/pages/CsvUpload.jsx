import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const CsvUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    // Replace with actual CSV upload logic
    setMessage("File uploaded successfully.");
  };

  return (
    <Box p={4}>
      <Heading mb={4}>CSV Upload</Heading>
      <Input type="file" onChange={handleFileChange} mb={4} />
      <Button onClick={handleUpload}>Upload</Button>
      {message && <Text mt={4}>{message}</Text>}
    </Box>
  );
};

export default CsvUpload;