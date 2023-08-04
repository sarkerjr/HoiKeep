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
import DueRow from '@/page-setions/admin/due/DueRow';

import { useReadDuesQuery } from '@/store/services/fee.services';

// TABLE HEADING DATA LIST
const tableHeading = [
  { id: 'sl', label: 'SL', align: 'center' },
  { id: 'student', label: 'Student', align: 'center' },
  { id: 'room', label: 'Room & Seat', align: 'center' },
  { id: 'isActive', label: 'Is Active?', align: 'center' },
  { id: 'due', label: 'Due Months', align: 'center' },
];

const Due = () => {
  const { data: dues } = useReadDuesQuery();

  const { rows, setInitialData, handleSearchQuery } = useMuiTableSearch([
    'name',
    'seatQuantity',
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
    const newDues = dues?.map((due, index) => ({
      ...due,
      sl: index + 1,
    }));
    setInitialData(newDues);
  }, [dues]);

  return (
    <Box width="100%">
      <H3 mb={2}>Dues</H3>

      <SearchArea
        handleSearch={handleSearchQuery}
        buttonText="Add Due"
        searchPlaceholder="Search Due..."
        handleBtnClick={() => {}}
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
                rowCount={dues?.length}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {filteredList.map((due) => (
                  <DueRow due={due} key={due.id} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination
            onChange={handleChangePage}
            count={Math.ceil(dues?.length / rowsPerPage) || 0}
          />
        </Stack>
      </Card>
    </Box>
  );
};

export default Due;
