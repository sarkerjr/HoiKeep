import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

import Modal from "@/components/Modal";

const RoomModal = ({
  open,
  close,
  room,
  mode,
}: {
  open: boolean;
  close: () => void;
  room: any;
  mode: "CREATE" | "EDIT";
}) => {
  const [no, setNo] = useState(room?.no ?? "");
  const [seatQuantity, setSeatQuantity] = useState(room?.seatQuantity ?? "");
  const [hallsId, setHallsId] = useState(room?.hallsId ?? "");

  return (
    <Modal title={"Add New Room"} open={open} close={close}>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Room Number"
            value={no}
            onChange={(e) => setNo(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Seat Quantity"
            value={seatQuantity}
            onChange={(e) => setSeatQuantity(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Halls Id"
            value={hallsId}
            onChange={(e) => setHallsId(e.target.value)}
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

export default RoomModal;
