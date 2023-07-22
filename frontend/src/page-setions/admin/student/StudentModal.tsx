import { useState, useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";

import Modal from "@/components/Modal";

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
  const [name, setName] = useState(student?.name ? student.name : "");
  const [email, setEmail] = useState(student?.email ? student.email : "");
  const [studentNo, setStudentNo] = useState(
    student?.studentNo ? student.studentNo : ""
  );
  const [session, setSession] = useState(
    student?.session ? student.session : ""
  );
  const [semester, setSemester] = useState(
    student?.semester ? student.semester : ""
  );
  const [year, setYear] = useState(student?.year ? student.year : "");
  const [admissionDate, setAdmissionDate] = useState(
    student?.admissionDate ? student.admissionDate : ""
  );
  const [imageUrl, setImageUrl] = useState(
    student?.imageUrl ? student.imageUrl : ""
  );
  const [hallsId, setHallsId] = useState(
    student?.hallsId ? student.hallsId : ""
  );
  const [departmentsId, setDepartmentsId] = useState(
    student?.departmentsId ? student.departmentsId : ""
  );
  const [degreesId, setDegreesId] = useState(
    student?.degreesId ? student.degreesId : ""
  );

  useEffect(() => {
    setName(student?.name ? student.name : "");
    setName(student?.email ? student.email : "");
    setName(student?.studentNo ? student.studentNo : "");
    setName(student?.session ? student.session : "");
    setName(student?.semester ? student.semester : "");
    setName(student?.year ? student.year : "");
    setName(student?.admissionDate ? student.admissionDate : "");
    setName(student?.imageUrl ? student.imageUrl : "");
    setName(student?.hallsId ? student.hallsId : "");
    setName(student?.departmentsId ? student.departmentsId : "");
    setName(student?.degreesId ? student.degreesId : "");
  }, [student]);

  return (
    <Modal
      title={mode === "CREATE" ? "Add New Student" : "Edit Student"}
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
            label="Student Number"
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
          <TextField
            label="Admission Date"
            value={admissionDate}
            onChange={(e) => setAdmissionDate(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Image Url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Hall Id"
            value={hallsId}
            onChange={(e) => setHallsId(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Department Id"
            value={departmentsId}
            onChange={(e) => setDepartmentsId(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Degree Id"
            value={degreesId}
            onChange={(e) => setDegreesId(e.target.value)}
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

export default StudentModal;
