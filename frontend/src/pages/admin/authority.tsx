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
import AuthorityRow from "@/page-setions/admin/auhority/AuthorityRow";
import AuthorityModal from "@/page-setions/admin/auhority/AuthorityModal";

// TABLE HEADING DATA LIST
const tableHeading = [
  { id: "id", label: "ID", align: "center" },
  { id: "name", label: "Name", align: "center" },
  { id: "email", label: "Email", align: "center" },
  { id: "designation", label: "Designation", align: "center" },
  { id: "joinedAt", label: "Joined At", align: "center" },
  { id: "leftAt", label: "Left At", align: "center" },
  { id: "position", label: "Position", align: "center" },
  { id: "hall", label: "Hall", align: "center" },
  { id: "department", label: "Department", align: "center" },
  { id: "action", label: "Action", align: "center" },
];

const Authority = () => {
  const [openModal, setOpenModal] = useState(false);
  const authorities = [
    {
      id: "1",
      name: "Department 1",
      email: "TEST",
      designation: "TEST",
      joinedAt: "",
      leftAt: "",
      position: "",
      hall: "",
      department: "",
    },
    {
      id: "2",
      name: "Department 2",
      email: "TEST",
      designation: "TEST",
      joinedAt: "",
      leftAt: "",
      position: "",
      hall: "",
      department: "",
    },
    {
      id: "3",
      name: "Department 3",
      email: "TEST",
      designation: "TEST",
      joinedAt: "",
      leftAt: "",
      position: "",
      hall: "",
      department: "",
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
    setInitialData(authorities);
  }, []);

  return (
    <>
      <Box width="100%">
        <H3 mb={2}>Authorities</H3>

        <SearchArea
          handleSearch={handleSearchQuery}
          buttonText="Add Authority"
          searchPlaceholder="Search Authority..."
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
                  rowCount={authorities?.length}
                  onRequestSort={handleRequestSort}
                />

                <TableBody>
                  {filteredList.map((authority) => (
                    <AuthorityRow authority={authority} key={authority.id} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <Stack alignItems="center" my={4}>
            <TablePagination
              onChange={handleChangePage}
              count={Math.ceil(authorities?.length / rowsPerPage) || 0}
            />
          </Stack>
        </Card>
      </Box>
      <AuthorityModal
        mode="CREATE"
        open={openModal}
        close={() => setOpenModal(false)}
        authority={null}
      />
    </>
  );
};

export default Authority;
