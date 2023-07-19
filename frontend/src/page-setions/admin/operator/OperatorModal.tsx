import { useState, useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";

import Modal from "@/components/Modal";

const OperatorModal = ({
  open,
  close,
  operator,
  mode,
}: {
  open: boolean;
  close: () => void;
  operator: any;
  mode: string;
}) => {
  const [name, setName] = useState(operator?.name ? operator.name : "");
  const [email, setEmail] = useState(operator?.email ? operator.email : "");
  const [joinedAt, setJoinedAt] = useState(
    operator?.joinedAt ? operator.joinedAt : ""
  );
  const [leftAt, setLeftAt] = useState(operator?.leftAt ? operator.leftAt : "");
  const [position, setPosition] = useState(
    operator?.position ? operator.position : ""
  );
  const [hall, setHall] = useState(operator?.hall ? operator.hall : "");

  useEffect(() => {
    setName(operator?.name ? operator.name : "");
    setEmail(operator?.email ? operator.email : "");
    setJoinedAt(operator?.joinedAt ? operator.joinedAt : "");
    setLeftAt(operator?.leftAt ? operator.leftAt : "");
    setPosition(operator?.position ? operator.position : "");
    setHall(operator?.hall ? operator.hall : "");
  }, [operator]);

  return (
    <Modal
      title={mode === "CREATE" ? "Add New Operator" : "Edit Operator"}
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

export default OperatorModal;
