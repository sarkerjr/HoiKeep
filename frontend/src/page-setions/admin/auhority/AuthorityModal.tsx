import { useEffect, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

import Modal from "@/components/Modal";

const AuthorityModal = ({
  open,
  close,
  authority,
  mode,
}: {
  open: boolean;
  close: () => void;
  authority: any;
  mode: string;
}) => {
  const [name, setName] = useState(authority?.name ? authority.name : "");
  const [email, setEmail] = useState(authority?.email ? authority.email : "");
  const [designation, setDesignation] = useState(
    authority?.designation ? authority.designation : ""
  );
  const [joinedAt, setJoinedAt] = useState(
    authority?.joinedAt ? authority.joinedAt : ""
  );
  const [leftAt, setLeftAt] = useState(
    authority?.leftAt ? authority.leftAt : ""
  );
  const [position, setPosition] = useState(
    authority?.position ? authority.position : ""
  );
  const [hall, setHall] = useState(authority?.hall ? authority.hall : "");
  const [department, setDepartment] = useState(
    authority?.department ? authority.department : ""
  );
  useEffect(() => {
    setName(authority?.name ? authority.name : "");
    setEmail(authority?.email ? authority.email : "");
    setDesignation(authority?.designation ? authority.designation : "");
    setJoinedAt(authority?.joinedAt ? authority.joinedAt : "");
    setLeftAt(authority?.leftAt ? authority.leftAt : "");
    setPosition(authority?.position ? authority.position : "");
    setHall(authority?.hall ? authority.hall : "");
    setDepartment(authority?.department ? authority.department : "");
  }, [authority]);

  return (
    <Modal
      title={mode === "CREATE" ? "Add New Authority" : "Edit Authority"}
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
            label="Designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
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
          <TextField
            label="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
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

export default AuthorityModal;
