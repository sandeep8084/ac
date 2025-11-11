import { TextField } from "@mui/material";

const CustomTextField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  multiline = false,
  rows = 1,
  sx = {},
  ...props
}) => {
  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      multiline={multiline}
      rows={rows}
      variant="outlined"
      sx={{
        mb: 4,
        "& .MuiOutlinedInput-root": {
          color: "white", // text color
          "& fieldset": {
            borderColor: "white", // default border
          },
          "&:hover fieldset": {
            borderColor: "white", // hover border
          },
          "&.Mui-focused fieldset": {
            borderColor: "white", // focused border
          },
        },
        "& .MuiInputLabel-root": {
          color: "white", // label color
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "white", // focused label color
        },
        "& .MuiInputBase-input::placeholder": {
          color: "white",
          opacity: 0.7, // make placeholder slightly lighter
        },
        ...sx, // allow override
      }}
      {...props}
    />
  );
};

export default CustomTextField;
