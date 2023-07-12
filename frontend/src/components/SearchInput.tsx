import { FC } from "react";
import { Search } from "@mui/icons-material";
import { InputBase, InputBaseProps, styled } from "@mui/material";

// styled component
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  height: 44,
  fontSize: 14,
  width: "100%",
  maxWidth: 350,
  fontWeight: 500,
  padding: "0 1rem",
  borderRadius: "8px",
  color: theme.palette.grey[600],
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: { maxWidth: "100%" },
  "::placeholder": { color: theme.palette.text.disabled },
}));

const SearchInput: FC<InputBaseProps> = (props) => {
  return (
    <StyledInputBase
      startAdornment={<Search sx={{ fontSize: 19, mr: 1 }} />}
      {...props}
    />
  );
};

export default SearchInput;
