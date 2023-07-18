import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

import Modal from "@/components/Modal";

const SeatModal = ({
  open,
  close,
  seat,
  mode,
}: {
  open: boolean;
  close: () => void;
  seat: any;
  mode: "CREATE" | "EDIT";
}) => {
  const [no, setNo] = useState(seat?.no ?? "");
  const [roomssId, setRoomsId] = useState(seat?.roomsId ?? "");

  return (
    <Modal title={"Add New Seat"} open={open} close={close}>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Seat Number"
            value={no}
            onChange={(e) => setNo(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Rooms Id"
            value={roomssId}
            onChange={(e) => setRoomsId(e.target.value)}
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

export default SeatModal;
