import { useState, useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";

import DatePicker from "@/components/DatePicker";
import Modal from "@/components/Modal";
import useAlert from "@/hooks/useAlert";
import {
  useCreateStaffMutation,
  useUpdateStaffMutation,
} from "@/store/services/staff.services";

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
  const [name, setName] = useState(staff?.staffDetails?.name ?? "");
  const [email, setEmail] = useState(staff?.staffDetails?.email ?? "");
  const [joinedAt, setJoinedAt] = useState(staff?.staffDetails?.joinedAt ?? "");
  const [leftAt, setLeftAt] = useState(staff?.staffDetails?.leftAt ?? "");
  const [positionsId, setPositionsId] = useState(staff?.positionsId ?? "");
  const [hallsId, setHallsId] = useState(staff?.hallsId ?? "");

  // setting alert for CREATE request
  const [
    createStaff,
    {
      data: createData,
      error: createError,
      isLoading: createIsLoading,
      isSuccess: createIsSucess,
      isError: createIsError,
      reset: createReset,
    },
  ] = useCreateStaffMutation();

  useAlert(
    createData,
    createError,
    createIsLoading,
    createIsSucess,
    createIsError,
    createReset
  );

  //setting alert for UPDATE request
  const [
    updateStaff,
    {
      data: updateData,
      error: updateError,
      isLoading: updateIsLoading,
      isSuccess: updateIsSucess,
      isError: updateIsError,
      reset: updateReset,
    },
  ] = useUpdateStaffMutation();

  useAlert(
    updateData,
    updateError,
    updateIsLoading,
    updateIsSucess,
    updateIsError,
    updateReset
  );

  useEffect(() => {
    setName(staff?.staffDetails?.name ?? "");
    setEmail(staff?.staffDetails?.email ?? "");
    setJoinedAt(staff?.staffDetails?.joinedAt ?? "");
    setLeftAt(staff?.staffDetails?.leftAt ?? "");
    setPositionsId(staff?.positionsId ?? "");
    setHallsId(staff?.hallsId ?? "");
  }, [staff]);

  const handleOnSubmit = () => {
    if (mode === "CREATE") {
      createStaff({
        name,
        email,
        joinedAt,
        leftAt,
        positionsId,
        hallsId,
      });
    } else if (mode === "UPDATE") {
      updateStaff({
        id: staff?.id,
        name,
        email,
        joinedAt,
        leftAt,
        positionsId,
        hallsId,
      });
    }
    close();
  };

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
          <DatePicker
            sx={{ width: "100%" }}
            label="Joined At"
            value={joinedAt}
            onChange={(value: Date) => setJoinedAt(value)}
          />
        </Grid>
        <Grid item xs={12}>
          <DatePicker
            sx={{ width: "100%" }}
            label="Left At"
            value={leftAt}
            onChange={(value: Date) => setLeftAt(value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Position"
            value={positionsId}
            onChange={(e) => setPositionsId(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Hall"
            value={hallsId}
            onChange={(e) => setHallsId(e.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOnSubmit}
            disabled={mode === "CREATE" ? createIsLoading : updateIsLoading}
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
