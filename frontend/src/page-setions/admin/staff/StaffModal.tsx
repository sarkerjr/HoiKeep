import { useState, useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";

import Modal from "@/components/Modal";

const StaffModal = ({
  open,
  close,
  staff,
  mode,
}: {
  open: boolean;
  close: () => void;
  staff: any;
  mode: string;
}) => {
  const [name, setName] = useState(staff?.name ? staff.name : "");
  const [email, setEmail] = useState(staff?.email ? staff.email : "");
  const [joinedAt, setJoinedAt] = useState(
    staff?.joinedAt ? staff.joinedAt : ""
  );
  const [leftAt, setLeftAt] = useState(staff?.leftAt ? staff.leftAt : "");
  const [position, setPosition] = useState(
    staff?.position ? staff.position : ""
  );
  const [hall, setHall] = useState(staff?.hall ? staff.hall : "");

  useEffect(() => {
    setName(staff?.name ? staff.name : "");
    setEmail(staff?.email ? staff.email : "");
    setJoinedAt(staff?.joinedAt ? staff.joinedAt : "");
    setLeftAt(staff?.leftAt ? staff.leftAt : "");
    setPosition(staff?.position ? staff.position : "");
    setHall(staff?.hall ? staff.hall : "");
  }, [staff]);

  return (
    <Modal
      title={mode === "CREATE" ? "Add New Staff" : "Edit Staff"}
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
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Joined At"
            value={joinedAt}
            onChange={(e) => setJoinedAt(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Left At"
            value={leftAt}
            onChange={(e) => setLeftAt(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Hall"
            value={hall}
            onChange={(e) => setHall(e.target.value)}
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

export default StaffModal;
