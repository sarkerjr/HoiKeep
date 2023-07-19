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
import DepartmentRow from '@/page-setions/admin/department/DepartmentRow';
import DepartmentModal from '@/page-setions/admin/department/DepartmentModal';

import { useReadDepartmentsQuery } from '@/store/services/department.services';

// TABLE HEADING DATA LIST
const tableHeading = [
  { id: 'id', label: 'ID', align: 'center' },
  { id: 'name', label: 'Name', align: 'center' },
  { id: 'nameTag', label: 'Tag', align: 'center' },
  { id: 'action', label: 'Action', align: 'center' },
];

const Department = () => {
  const { data: departments } = useReadDepartmentsQuery();

  const { modal, setModal, mode, setMode, data, setData } = useModal();

  const { rows, setInitialData, handleSearchQuery } = useMuiTableSearch([
    'name',
    'nameTag',
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
    const newDepartments = departments?.map((department, index) => ({
      ...department,
      sl: index + 1,
    }));
    setInitialData(newDepartments);
  }, [departments]);

  const handleOnCreate = () => {
    setMode('CREATE');
    setModal(true);
  };

  return (
    <>
      <Box width="100%">
        <H3 mb={2}>Departments</H3>

        <SearchArea
          handleSearch={handleSearchQuery}
          buttonText="Add Department"
          searchPlaceholder="Search Department..."
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
                  rowCount={departments?.length}
                  onRequestSort={handleRequestSort}
                />

                <TableBody>
                  {filteredList.map((department) => (
                    <DepartmentRow
                      department={department}
                      key={department.id}
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
              count={Math.ceil(departments?.length / rowsPerPage) || 0}
            />
          </Stack>
        </Card>
      </Box>

      <DepartmentModal
        mode={mode}
        open={modal}
        close={() => setModal(false)}
        department={data}
      />
    </>
  );
};

export default Department;
