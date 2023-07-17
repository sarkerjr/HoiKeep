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
import DegreeRow from "@/page-setions/admin/degree/DegreeRow";
import DegreeModal from "@/page-setions/admin/degree/DegreeModal";

// TABLE HEADING DATA LIST
const tableHeading = [
  { id: "id", label: "ID", align: "center" },
  { id: "name", label: "Name", align: "center" },
  { id: "action", label: "Action", align: "center" },
];

const Degree = () => {
  const [openModal, setOpenModal] = useState(false);
  const degrees = [
    {
      id: "1",
      name: "TEST",
    },
    {
      id: "2",
      name: "TEST",
    },
    {
      id: "3",
      name: "TEST",
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
    setInitialData(degrees);
  }, []);

  return (
    <>
      <Box width="100%">
        <H3 mb={2}>Degrees</H3>

        <SearchArea
          handleSearch={handleSearchQuery}
          buttonText="Add Degree"
          searchPlaceholder="Search Degree..."
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
                  rowCount={degrees?.length}
                  onRequestSort={handleRequestSort}
                />

                <TableBody>
                  {filteredList.map((degree) => (
                    <DegreeRow degree={degree} key={degree.id} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <Stack alignItems="center" my={4}>
            <TablePagination
              onChange={handleChangePage}
              count={Math.ceil(degrees?.length / rowsPerPage) || 0}
            />
          </Stack>
        </Card>
      </Box>
      <DegreeModal
        mode="CREATE"
        open={openModal}
        close={() => setOpenModal(false)}
        degree={null}
      />
    </>
  );
};

export default Degree;
