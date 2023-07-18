import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

import Modal from "@/components/Modal";

const DegreeModal = ({
  open,
  close,
  degree,
  mode,
}: {
  open: boolean;
  close: () => void;
  degree: any;
  mode: "CREATE" | "EDIT";
}) => {
  const [name, setName] = useState(degree?.name ?? "");

  return (
    <Modal title={"Add New Degree"} open={open} close={close}>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              close();
            }}
            disabled={true}
            fullWidth
          >
            {mode}
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default DegreeModal;
