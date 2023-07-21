import { useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import DatePicker from '@/components/DatePicker';

import Modal from '@/components/Modal';

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
  const [name, setName] = useState(
    authority?.authorityDetails?.name ? authority.authorityDetails?.name : ''
  );
  const [email, setEmail] = useState(
    authority?.authorityDetails?.email ? authority.authorityDetails?.email : ''
  );
  const [designation, setDesignation] = useState(
    authority?.authorityDetails?.designation
      ? authority.authorityDetails?.designation
      : ''
  );
  const [joinedAt, setJoinedAt] = useState(
    authority?.authorityDetails?.joinedAt
      ? authority.authorityDetails?.joinedAt
      : ''
  );
  const [leftAt, setLeftAt] = useState(
    authority?.authorityDetails?.leftAt
      ? authority.authorityDetails?.leftAt
      : ''
  );
  const [position, setPosition] = useState(
    authority?.position ? authority.position : ''
  );
  const [hall, setHall] = useState(authority?.hall ? authority.hall : '');
  const [department, setDepartment] = useState(
    authority?.department ? authority.department : ''
  );

  useEffect(() => {
    setName(authority?.name ? authority.name : '');
    setEmail(authority?.email ? authority.email : '');
    setDesignation(authority?.designation ? authority.designation : '');
    setJoinedAt(authority?.joinedAt ? authority.joinedAt : '');
    setLeftAt(authority?.leftAt ? authority.leftAt : '');
    setPosition(authority?.position ? authority.position : '');
    setHall(authority?.hall ? authority.hall : '');
    setDepartment(authority?.department ? authority.department : '');
  }, [authority]);

  return (
    <Modal
      title={mode === 'CREATE' ? 'Add New Authority' : 'Edit Authority'}
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
          <DatePicker
            sx={{ width: '100%' }}
            label="Joined At"
            value={joinedAt}
            onChange={(value: Date) => setJoinedAt(value)}
          />
        </Grid>
        <Grid item xs={12}>
          <DatePicker
            sx={{ width: '100%' }}
            label="Left At"
            value={leftAt}
            onChange={(value: Date) => setLeftAt(value)}
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
