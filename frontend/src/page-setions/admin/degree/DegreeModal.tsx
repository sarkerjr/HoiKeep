import { useState, useEffect } from "react";
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
  mode: string;
}) => {
  const [name, setName] = useState(degree?.name ? degree.name : "");
  useEffect(() => {
    setName(degree?.name ? degree.name : "");
  }, [degree]);

  return (
    <Modal
      title={mode === "CREATE" ? "Add New Degree" : "Edit Degree"}
      open={open}
      close={close}
    >
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
