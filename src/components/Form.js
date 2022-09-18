import { Box, Typography, TextField, Button } from "@mui/material";

export default function Form({
  inputs,
  idOnChange,
  nameOnChange,
  ageOnChange,
}) {
  return (
    <Box display={'flex'} width={"90%"} justifyContent={'center'}>
      <Box>
        {inputs.map((input, index) => (
          <Box
            key={index}
            display={"flex"}
            flexDirection={"column"}
            bgcolor={"white"}
            borderRadius={"10px"}
            padding={"10px"}
            margin={"10px"}
            alignItems={"center"}
          >
            <Typography>{input.label}</Typography>
            {input.id && <TextField label={"id"} onChange={idOnChange} />}
            {input.name && <TextField label={"name"} onChange={nameOnChange} />}
            {input.age && <TextField label={"age"} onChange={ageOnChange} />}
            <Button onClick={input.onSubmit} style={{ background: "white" }}>
              Submit
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
