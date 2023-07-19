import { useState, useEffect } from "react";
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
  mode: string;
}) => {
  const [no, setNo] = useState(room?.no ? room.no : "");
  const [seatQuantity, setSeatQuantity] = useState(
    room?.seatQuantity ? room.seatQuantity : ""
  );
  const [hallsId, setHallsId] = useState(room?.hallsId ? room.hallsId : "");
  useEffect(() => {
    setNo(room?.no ? room.no : "");
    setSeatQuantity(room?.seatQuantity ? room.seatQuantity : "");
    setHallsId(room?.hallsId ? room.hallsId : "");
  }, [room]);

  return (
    <Modal
      title={mode === "CREATE" ? "Add New Room" : "Edit Room"}
      open={open}
      close={close}
    >
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
