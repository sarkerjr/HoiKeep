import { useState, useEffect } from "react";
import {
  Box,
  Card,
  Stack,
  Table,
  TableBody,
  TableContainer,
} from "@mui/material";

// project imports
import SearchArea from "components/SearchArea";
import TableHeader from "components/data-table/TableHeader";
import TablePagination from "components/data-table/TablePagination";
import Scrollbar from "components/Scrollbar";
import { H3 } from "components/Typography";
import useMuiTable from "hooks/useMuiTable";
import useMuiTableSearch from "hooks/useMuiTableSearch";
import RoomRow from "@/page-setions/admin/room/RoomRow";
import RoomModal from "@/page-setions/admin/room/RoomModal";

// TABLE HEADING DATA LIST
const tableHeading = [
  { id: "id", label: "ID", align: "center" },
  { id: "no", label: "Room Number", align: "center" },
  { id: "seatQuantity", label: "Seat Quantity", align: "center" },
  { id: "hallsId", label: "Halls Id", align: "center" },
  { id: "action", label: "Action", align: "center" },
];

const Room = () => {
  const [openModal, setOpenModal] = useState(false);
  const rooms = [
    {
      id: "1",
      no: "TEST",
      seatQuantity: "TEST",
      hallsId: "TEST",
    },
    {
      id: "2",
      no: "TEST",
      seatQuantity: "TEST",
      hallsId: "TEST",
    },
    {
      id: "3",
      no: "TEST",
      seatQuantity: "TEST",
      hallsId: "TEST",
    },
  ];

  const { rows, setInitialData, handleSearchQuery } = useMuiTableSearch([
    "name",
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
    setInitialData(rooms);
  }, []);

  return (
    <>
      <Box width="100%">
        <H3 mb={2}>Rooms</H3>

        <SearchArea
          handleSearch={handleSearchQuery}
          buttonText="Add Room"
          searchPlaceholder="Search Room..."
          handleBtnClick={() => setOpenModal(true)}
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
                  rowCount={rooms?.length}
                  onRequestSort={handleRequestSort}
                />

                <TableBody>
                  {filteredList.map((room) => (
                    <RoomRow room={room} key={room.id} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <Stack alignItems="center" my={4}>
            <TablePagination
              onChange={handleChangePage}
              count={Math.ceil(rooms?.length / rowsPerPage) || 0}
            />
          </Stack>
        </Card>
      </Box>
      <RoomModal
        mode="CREATE"
        open={openModal}
        close={() => setOpenModal(false)}
        room={null}
      />
    </>
  );
};

export default Room;
