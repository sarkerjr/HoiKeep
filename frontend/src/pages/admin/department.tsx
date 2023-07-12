import { useEffect } from 'react';
import {
  Box,
  Paper,
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
import DepartmentRow from '@/page-setions/admin/department/DepartmentRow';

// TABLE HEADING DATA LIST
const tableHeading = [
  { id: 'id', label: 'ID', align: 'center' },
  { id: 'name', label: 'Name', align: 'center' },
  { id: 'nameTag', label: 'Tag', align: 'center' },
  { id: 'action', label: 'Action', align: 'center' },
];

const Department = () => {
  const departments = [
    {
      id: '1',
      name: 'Department 1',
      nameTag: 'TEST',
    },
    {
      id: '2',
      name: 'Department 2',
      nameTag: 'TEST',
    },
    {
      id: '3',
      name: 'Department 3',
      nameTag: 'TEST',
    },
  ];

  const { rows, setInitialData, handleSearchQuery } = useMuiTableSearch([
    'name',
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
    setInitialData(departments);
  }, []);

  return (
    <>
      <Box width="100%">
        <H3 mb={2}>Departments</H3>

        <SearchArea
          handleSearch={handleSearchQuery}
          buttonText="Add Department"
          searchPlaceholder="Search Department..."
          handleBtnClick={() => null}
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
    </>
  );
};

export default Department;
