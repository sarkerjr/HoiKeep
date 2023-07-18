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
import SeatRow from "@/page-setions/admin/seat/SeatRow";
import SeatModal from "@/page-setions/admin/seat/SeatModal";

// TABLE HEADING DATA LIST
const tableHeading = [
  { id: "id", label: "ID", align: "center" },
  { id: "no", label: "Seat Number", align: "center" },
  { id: "roomsId", label: "Rooms Id", align: "center" },
  { id: "action", label: "Action", align: "center" },
];

const Seat = () => {
  const [openModal, setOpenModal] = useState(false);
  const seats = [
    {
      id: "1",
      no: "TEST",
      roomsId: "TEST",
    },
    {
      id: "2",
      no: "TEST",
      roomsId: "TEST",
    },
    {
      id: "3",
      no: "TEST",
      roomsId: "TEST",
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
    setInitialData(seats);
  }, []);

  return (
    <>
      <Box width="100%">
        <H3 mb={2}>Seats</H3>

        <SearchArea
          handleSearch={handleSearchQuery}
          buttonText="Add Seat"
          searchPlaceholder="Search Seat..."
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
                  rowCount={seats?.length}
                  onRequestSort={handleRequestSort}
                />

                <TableBody>
                  {filteredList.map((seat) => (
                    <SeatRow seat={seat} key={seat.id} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <Stack alignItems="center" my={4}>
            <TablePagination
              onChange={handleChangePage}
              count={Math.ceil(seats?.length / rowsPerPage) || 0}
            />
          </Stack>
        </Card>
      </Box>
      <SeatModal
        mode="CREATE"
        open={openModal}
        close={() => setOpenModal(false)}
        seat={null}
      />
    </>
  );
};

export default Seat;
