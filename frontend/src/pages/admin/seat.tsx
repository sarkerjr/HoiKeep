import { useState, useEffect } from 'react';
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
import SeatRow from '@/page-setions/admin/seat/SeatRow';
import SeatModal from '@/page-setions/admin/seat/SeatModal';
import { useReadSeatsQuery } from '@/store/services/seat.services';

// TABLE HEADING DATA LIST
const tableHeading = [
  { id: 'id', label: 'ID', align: 'center' },
  { id: 'no', label: 'Seat Number', align: 'center' },
  { id: 'isAvailable', label: 'Seat Available?', align: 'center' },
  { id: 'roomsId', label: 'Room No', align: 'center' },
  { id: 'action', label: 'Action', align: 'center' },
];

const Seat = () => {
  const { data: seats } = useReadSeatsQuery();
  const { modal, setModal, mode, setMode, data, setData } = useModal();

  const { rows, setInitialData, handleSearchQuery } = useMuiTableSearch([
    'no',
    'roomsId',
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
    const newSeats = seats?.map((seat, index) => ({
      ...seat,
      sl: index + 1,
    }));
    setInitialData(newSeats);
  }, [seats]);
  const handleOnCreate = () => {
    setMode('CREATE');
    setModal(true);
  };

  return (
    <>
      <Box width="100%">
        <H3 mb={2}>Seats</H3>

        <SearchArea
          handleSearch={handleSearchQuery}
          buttonText="Add Seat"
          searchPlaceholder="Search Seat..."
          handleBtnClick={handleOnCreate}
        />

        <Card>
          {/* <Scrollbar> */}
          <TableContainer sx={{ minWidth: 700 }}>
            <Table>
              <TableHeader
                order={order}
                hideSelectBtn
                orderBy={orderBy}
                heading={tableHeading}
                rowCount={seats?.length}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {filteredList.map((seat) => (
                  <SeatRow
                    seat={seat}
                    key={seat.id}
                    setModal={setModal}
                    setMode={setMode}
                    setData={setData}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* </Scrollbar> */}

          <Stack alignItems="center" my={4}>
            <TablePagination
              onChange={handleChangePage}
              count={Math.ceil(seats?.length / rowsPerPage) || 0}
            />
          </Stack>
        </Card>
      </Box>
      <SeatModal
        mode={mode}
        open={modal}
        close={() => setModal(false)}
        seat={data}
      />
    </>
  );
};

export default Seat;
