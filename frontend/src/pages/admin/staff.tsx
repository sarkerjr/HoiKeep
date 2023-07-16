import { useEffect } from "react";
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
import StaffRow from "@/page-setions/admin/staff/StaffRow";

// TABLE HEADING DATA LIST
const tableHeading = [
  { id: "id", label: "ID", align: "center" },
  { id: "name", label: "Name", align: "center" },
  { id: "email", label: "Email", align: "center" },
  { id: "joinedAt", label: "Joined At", align: "center" },
  { id: "leftAt", label: "Left At", align: "center" },
  { id: "position", label: "Position", align: "center" },
  { id: "hall", label: "Hall", align: "center" },
  { id: "action", label: "Action", align: "center" },
];

const Staff = () => {
  const staffs = [
    {
      id: "1",
      name: "Department 1",
      email: "TEST",
      joinedAt: "",
      leftAt: "",
      position: "",
      hall: "",
    },
    {
      id: "2",
      name: "Department 2",
      email: "TEST",
      joinedAt: "",
      leftAt: "",
      position: "",
      hall: "",
    },
    {
      id: "3",
      name: "Department 3",
      email: "TEST",
      joinedAt: "",
      leftAt: "",
      position: "",
      hall: "",
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
    setInitialData(staffs);
  }, []);

  return (
    <>
      <Box width="100%">
        <H3 mb={2}>Staffs</H3>

        <SearchArea
          handleSearch={handleSearchQuery}
          buttonText="Add Staff"
          searchPlaceholder="Search Staff..."
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
                  rowCount={staffs?.length}
                  onRequestSort={handleRequestSort}
                />

                <TableBody>
                  {filteredList.map((staff) => (
                    <StaffRow staff={staff} key={staff.id} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <Stack alignItems="center" my={4}>
            <TablePagination
              onChange={handleChangePage}
              count={Math.ceil(staffs?.length / rowsPerPage) || 0}
            />
          </Stack>
        </Card>
      </Box>
    </>
  );
};

export default Staff;
