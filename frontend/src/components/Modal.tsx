import {
  Box,
  Typography,
  Modal as MuiModal,
  Grid,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import MainCard from "@/components/Cards/MainCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
};

const Modal = ({ children, title, open, close }) => {
  return (
    <MuiModal open={open} onClose={close}>
      <Box
        sx={{
          ...style,
          maxHeight: "80vh",
          overflow: "auto",
        }}
      >
        <MainCard>
          <Grid container spacing={2}>
            {/* Modal Header Section */}
            <Grid item xs={11}>
              <Typography>{title}</Typography>
            </Grid>
            <Grid item xs={1} justifyContent="center">
              <CloseIcon sx={{ cursor: "pointer" }} onClick={close} />
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>

            {/* Modal Body Section */}
            <Grid item xs={12}>
              {children}
            </Grid>
          </Grid>
        </MainCard>
      </Box>
    </MuiModal>
  );
};

export default Modal;
