import { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';

import Modal from '@/components/Modal';

const DepartmentModal = ({
  open,
  close,
  department,
  mode,
}: {
  open: boolean;
  close: () => void;
  department: any;
  mode: 'CREATE' | 'EDIT';
}) => {
  const [name, setName] = useState(department?.name ?? '');
  const [nameTag, setNameTag] = useState(department?.nameTag ?? '');

  return (
    <Modal title={'Add New Department'} open={open} close={close}>
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
            label="Name Tag"
            value={nameTag}
            onChange={(e) => setNameTag(e.target.value)}
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

export default DepartmentModal;