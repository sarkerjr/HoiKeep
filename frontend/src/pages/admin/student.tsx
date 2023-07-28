import { useEffect } from 'react';
import {
  Box,
  Card,
  Stack,
  Table,
  TableBody,
  TableContainer,
} from '@mui/material';

// project imports
import SearchArea from 'components/SearchArea';
import TableHeader from 'components/data-table/TableHeader';
import TablePagination from 'components/data-table/TablePagination';
import Scrollbar from 'components/Scrollbar';
import { H3 } from 'components/Typography';
import useMuiTable from 'hooks/useMuiTable';
import useMuiTableSearch from 'hooks/useMuiTableSearch';
import useModal from '@/hooks/useModal';
import StudentRow from '@/page-setions/admin/student/StudentRow';
import StudentModal from '@/page-setions/admin/student/StudentModal';

import { useReadStudentsQuery } from '@/store/services/student.services';

// TABLE HEADING DATA LIST
const tableHeading = [
  { id: 'id', label: 'ID', align: 'center' },
  { id: 'name', label: 'Name', align: 'center' },
  { id: 'studentNo', label: 'Student Number', align: 'center' },
  { id: 'session', label: 'Session', align: 'center' },
  { id: 'semester', label: 'Semester', align: 'center' },
  { id: 'year', label: 'Year', align: 'center' },
  { id: 'admissionDate', label: 'Admission Date', align: 'center' },
  { id: 'departmentsId', label: 'Department', align: 'center' },
  { id: 'degreesId', label: 'Degree', align: 'center' },
  { id: 'action', label: 'Action', align: 'center' },
];

const Student = () => {
  const { data: students } = useReadStudentsQuery();

  const { modal, setModal, mode, setMode, data, setData } = useModal();

  const { rows, setInitialData, handleSearchQuery } = useMuiTableSearch([
    'name',
    'studentNo',
    'session',
    'semester',
    'year',
    'admissionDate',
    'hallsId',
    'departmentsId',
    'degreesId',
  ]);

  const {
    order,
    orderBy,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({
    listData: rows,
  });

  useEffect(() => {
    const newStudents = students?.map((student, index) => ({
      ...student,
      sl: index + 1,
    }));
    setInitialData(newStudents);
  }, [students]);

  const handleOnCreate = () => {
    setMode('CREATE');
    setModal(true);
  };

  return (
    <>
      <Box width="100%">
        <H3 mb={2}>Students</H3>

        <SearchArea
          handleSearch={handleSearchQuery}
          buttonText="Add Student"
          searchPlaceholder="Search Student..."
          handleBtnClick={handleOnCreate}
        />

        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 700 }}>
              <Table>
                <TableHeader
                  order={order}
                  hideSelectBtn
                  orderBy={orderBy}
                  heading={tableHeading}
                  rowCount={students?.length}
                  onRequestSort={handleRequestSort}
                />

                <TableBody>
                  {filteredList.map((student) => (
                    <StudentRow
                      student={student}
                      key={student.id}
                      setModal={setModal}
                      setMode={setMode}
                      setData={setData}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <Stack alignItems="center" my={4}>
            <TablePagination
              onChange={handleChangePage}
              count={Math.ceil(students?.length / rowsPerPage) || 0}
            />
          </Stack>
        </Card>
      </Box>

      <StudentModal
        mode={mode}
        open={modal}
        close={() => setModal(false)}
        student={data}
      />
    </>
  );
};

export default Student;
