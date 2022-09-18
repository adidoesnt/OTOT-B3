import { Box, Typography } from "@mui/material";

export default function Card({ name, age, id }) {
  return (
    <Box
      bgcolor={"white"}
      borderRadius={"10px"}
      padding={"10px"}
      margin={"10px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography>Name: {name}</Typography>
      <Typography>Age: {age}</Typography>
      <Typography>ID: {id}</Typography>
    </Box>
  );
}
