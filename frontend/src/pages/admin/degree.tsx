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
import useModal from "@/hooks/useModal";
import DegreeRow from "@/page-setions/admin/degree/DegreeRow";
import DegreeModal from "@/page-setions/admin/degree/DegreeModal";
import { useReadDegreesQuery } from "@/store/services/degree.services";

// TABLE HEADING DATA LIST
const tableHeading = [
  { id: "id", label: "ID", align: "center" },
  { id: "name", label: "Name", align: "center" },
  { id: "action", label: "Action", align: "center" },
];

const Degree = () => {
  const { data: degrees } = useReadDegreesQuery();
  const { modal, setModal, mode, setMode, data, setData } = useModal();

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
    const newDegrees = degrees?.map((degree, index) => ({
      ...degree,
      sl: index + 1,
    }));
    setInitialData(newDegrees);
  }, [degrees]);

  const handleOnCreate = () => {
    setMode("CREATE");
    setModal(true);
  };

  return (
    <>
      <Box width="100%">
        <H3 mb={2}>Degrees</H3>

        <SearchArea
          handleSearch={handleSearchQuery}
          buttonText="Add Degree"
          searchPlaceholder="Search Degree..."
          handleBtnClick={handleOnCreate}
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
                    <DegreeRow
                      degree={degree}
                      key={degree.id}
                      setModal={setModal}
                      setMode={setMode}
                      setData={setData}
                    />
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
        mode={mode}
        open={modal}
        close={() => setModal(false)}
        degree={data}
      />
    </>
  );
};

export default Degree;
