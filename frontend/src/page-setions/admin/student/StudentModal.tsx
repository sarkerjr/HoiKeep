import { useState, useEffect } from 'react';
import {
  Button,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';

// project imports
import DatePicker from '@/components/DatePicker';
import Modal from '@/components/Modal';
import useAlert from '@/hooks/useAlert';
import {
  useCreateStudentMutation,
  useUpdateStudentMutation,
} from '@/store/services/student.services';
import { useReadDepartmentsQuery } from '@/store/services/department.services';
import { useReadDegreesQuery } from '@/store/services/degree.services';

const StudentModal = ({
  open,
  close,
  student,
  mode,
}: {
  open: boolean;
  close: () => void;
  student: any;
  mode: string;
}) => {
  const [name, setName] = useState(student?.studentProfiles?.name ?? '');
  const [email, setEmail] = useState(student?.studentProfiles?.email ?? '');
  const [studentNo, setStudentNo] = useState(
    student?.studentProfiles?.studentNo ?? ''
  );
  const [session, setSession] = useState(
    student?.studentProfiles?.session ?? ''
  );
  const [semester, setSemester] = useState(
    student?.studentProfiles?.semester ?? ''
  );
  const [year, setYear] = useState(student?.studentProfiles?.year ?? '');
  const [admissionDate, setAdmissionDate] = useState(
    student?.studentProfiles?.admissionDate ?? ''
  );
  const [departmentsId, setDepartmentsId] = useState(
    student?.departments?.id ?? ''
  );
  const [degreesId, setDegreesId] = useState(
    student?.studentProfiles?.degrees?.id ?? ''
  );

  const { data: departments } = useReadDepartmentsQuery();
  const { data: degrees } = useReadDegreesQuery();

  // setting alert for CREATE request
  const [
    createStudent,
    {
      data: createData,
      error: createError,
      isLoading: createIsLoading,
      isSuccess: createIsSucess,
      isError: createIsError,
      reset: createReset,
    },
  ] = useCreateStudentMutation();

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
    updateStudent,
    {
      data: updateData,
      error: updateError,
      isLoading: updateIsLoading,
      isSuccess: updateIsSucess,
      isError: updateIsError,
      reset: updateReset,
    },
  ] = useUpdateStudentMutation();

  useAlert(
    updateData,
    updateError,
    updateIsLoading,
    updateIsSucess,
    updateIsError,
    updateReset
  );

  useEffect(() => {
    setName(student?.studentProfiles?.name ?? '');
    setEmail(student?.studentProfiles?.email ?? '');
    setStudentNo(student?.studentProfiles?.studentNo ?? '');
    setSession(student?.studentProfiles?.session ?? '');
    setSemester(student?.studentProfiles?.semester ?? '');
    setYear(student?.studentProfiles?.year ?? '');
    setAdmissionDate(student?.studentProfiles?.admissionDate ?? '');
    setDepartmentsId(student?.departments?.id ?? '');
    setDegreesId(student?.studentProfiles?.degrees?.id ?? '');
  }, [student]);

  const handleOnSubmit = () => {
    if (mode === 'CREATE') {
      createStudent({
        name,
        email,
        studentNo,
        session,
        semester,
        year,
        admissionDate,
        departmentsId,
        degreesId,
      });
    } else if (mode === 'UPDATE') {
      updateStudent({
        id: student?.id,
        name,
        email,
        studentNo,
        session,
        semester,
        year,
        admissionDate,
        departmentsId,
        degreesId,
      });
    }
    close();
  };

  return (
    <Modal
      title={mode === 'CREATE' ? 'Add New Student' : 'Edit Student'}
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
            label="Student ID"
            value={studentNo}
            onChange={(e) => setStudentNo(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Session"
            value={session}
            onChange={(e) => setSession(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <DatePicker
            sx={{ width: '100%' }}
            label="Admission Date"
            value={admissionDate}
            onChange={(value: Date) => setAdmissionDate(value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="department-select-label">Department</InputLabel>
            <Select
              label="Department"
              labelId="room-select-label"
              value={departmentsId}
              onChange={(event) => setDepartmentsId(event.target.value)}
              fullWidth
            >
              {departments?.map((department: any) => (
                <MenuItem value={department.id} key={department.id}>
                  {department.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="degree-select-label">Degree</InputLabel>
            <Select
              label="Degree"
              labelId="degree-select-label"
              value={degreesId}
              onChange={(event) => setDegreesId(event.target.value)}
              fullWidth
            >
              {degrees?.map((degree: any) => (
                <MenuItem value={degree.id} key={degree.id}>
                  {degree.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOnSubmit}
            disabled={mode === 'CREATE' ? createIsLoading : updateIsLoading}
            fullWidth
          >
            {mode}
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default StudentModal;
