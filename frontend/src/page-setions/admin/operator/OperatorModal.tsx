import { useState, useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";
import DatePicker from "@/components/DatePicker";
import Modal from "@/components/Modal";
import useAlert from "@/hooks/useAlert";
import {
  useCreateOperatorMutation,
  useUpdateOperatorMutation,
} from "@/store/services/operator.services";

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
  const [name, setName] = useState(operator?.operatorDetails?.name ?? "");
  const [email, setEmail] = useState(operator?.operatorDetails?.email ?? "");
  const [joinedAt, setJoinedAt] = useState(
    operator?.operatorDetails?.joinedAt ?? ""
  );
  const [leftAt, setLeftAt] = useState(operator?.operatorDetails?.leftAt ?? "");
  const [positionsId, setPositionsId] = useState(operator?.positionsId ?? "");
  const [hallsId, setHallsId] = useState(operator?.hallsId ?? "");

  // setting alert for CREATE request
  const [
    createOperator,
    {
      data: createData,
      error: createError,
      isLoading: createIsLoading,
      isSuccess: createIsSucess,
      isError: createIsError,
      reset: createReset,
    },
  ] = useCreateOperatorMutation();

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
    updateOperator,
    {
      data: updateData,
      error: updateError,
      isLoading: updateIsLoading,
      isSuccess: updateIsSucess,
      isError: updateIsError,
      reset: updateReset,
    },
  ] = useUpdateOperatorMutation();

  useAlert(
    updateData,
    updateError,
    updateIsLoading,
    updateIsSucess,
    updateIsError,
    updateReset
  );

  useEffect(() => {
    setName(operator?.operatorDetails?.name ?? "");
    setEmail(operator?.operatorDetails?.email ?? "");
    setJoinedAt(operator?.operatorDetails?.joinedAt ?? "");
    setLeftAt(operator?.operatorDetails?.leftAt ?? "");
    setPositionsId(operator?.positionsId ?? "");
    setHallsId(operator?.hallsId ?? "");
  }, [operator]);

  const handleOnSubmit = () => {
    if (mode === "CREATE") {
      createOperator({
        name,
        email,
        joinedAt,
        leftAt,
        positionsId,
        hallsId,
      });
    } else if (mode === "UPDATE") {
      updateOperator({
        id: operator?.id,
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

export default OperatorModal;
