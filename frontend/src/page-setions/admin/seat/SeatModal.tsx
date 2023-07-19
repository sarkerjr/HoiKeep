import { useState, useEffect } from "react";
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
  mode: string;
}) => {
  const [no, setNo] = useState(seat?.no ? seat.no : "");
  const [roomsId, setRoomsId] = useState(seat?.roomsId ? seat.roomsId : "");

  useEffect(() => {
    setNo(seat?.no ? seat.no : "");
    setRoomsId(seat?.roomsId ? seat.roomsId : "");
  }, [seat]);

  return (
    <Modal
      title={mode === "CREATE" ? "Add New Seat" : "Edit Seat"}
      open={open}
      close={close}
    >
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
            value={roomsId}
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
