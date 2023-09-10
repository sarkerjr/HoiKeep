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
import RoomRow from '@/page-setions/admin/room/RoomRow';
import RoomModal from '@/page-setions/admin/room/RoomModal';
import { useReadRoomsQuery } from '@/store/services/room.services';

// TABLE HEADING DATA LIST
const tableHeading = [
  { id: 'id', label: 'ID', align: 'center' },
  { id: 'no', label: 'Room No', align: 'center' },
  { id: 'seatQuantity', label: 'Seat Quantity', align: 'center' },
  { id: 'action', label: 'Action', align: 'center' },
];

const Room = () => {
  const { data: rooms } = useReadRoomsQuery();
  const { modal, setModal, mode, setMode, data, setData } = useModal();

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
    const newRooms = rooms?.map((room, index) => ({
      ...room,
      sl: index + 1,
    }));
    setInitialData(newRooms);
  }, [rooms]);

  const handleOnCreate = () => {
    setMode('CREATE');
    setModal(true);
  };

  return (
    <>
      <Box width="100%">
        <H3 mb={2}>Rooms</H3>

        <SearchArea
          handleSearch={handleSearchQuery}
          buttonText="Add Room"
          searchPlaceholder="Search Room..."
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
                rowCount={rooms?.length}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {filteredList.map((room) => (
                  <RoomRow
                    room={room}
                    key={room.id}
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
              count={Math.ceil(rooms?.length / rowsPerPage) || 0}
            />
          </Stack>
        </Card>
      </Box>
      <RoomModal
        mode={mode}
        open={modal}
        close={() => setModal(false)}
        room={data}
      />
    </>
  );
};

export default Room;
