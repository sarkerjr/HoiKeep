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
import OperatorRow from "@/page-setions/admin/operator/OperatorRow";
import OperatorModal from "@/page-setions/admin/operator/OperatorModal";

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

const Operator = () => {
  const [openModal, setOpenModal] = useState(false);
  const operators = [
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
    setInitialData(operators);
  }, []);

  return (
    <>
      <Box width="100%">
        <H3 mb={2}>Operators</H3>

        <SearchArea
          handleSearch={handleSearchQuery}
          buttonText="Add Operator"
          searchPlaceholder="Search Operator..."
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
                  rowCount={operators?.length}
                  onRequestSort={handleRequestSort}
                />

                <TableBody>
                  {filteredList.map((operator) => (
                    <OperatorRow operator={operator} key={operator.id} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <Stack alignItems="center" my={4}>
            <TablePagination
              onChange={handleChangePage}
              count={Math.ceil(operators?.length / rowsPerPage) || 0}
            />
          </Stack>
        </Card>
      </Box>
      <OperatorModal
        mode="CREATE"
        open={openModal}
        close={() => setOpenModal(false)}
        operator={null}
      />
    </>
  );
};

export default Operator;