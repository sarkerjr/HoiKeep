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
import useModal from '@/hooks/useModal';
import DesignationRow from '@/page-setions/admin/designation/DesignationRow';
import DesignationModal from '@/page-setions/admin/designation/DesignationModal';
import { useReadDesignationsQuery } from '@/store/services/designation.services';

// TABLE HEADING DATA LIST
const tableHeading = [
  { id: 'id', label: 'ID', align: 'center' },
  { id: 'name', label: 'Name', align: 'center' },
  { id: 'action', label: 'Action', align: 'center' },
];

const Designation = () => {
  const { data: designations } = useReadDesignationsQuery();

  const { modal, setModal, mode, setMode, data, setData } = useModal();
  const { rows, setInitialData, handleSearchQuery } = useMuiTableSearch([
    'name',
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
    const newDesignations = designations?.map((designation, index) => ({
      ...designation,
      sl: index + 1,
    }));
    setInitialData(newDesignations);
  }, [designations]);

  const handleOnCreate = () => {
    setMode('CREATE');
    setModal(true);
  };

  return (
    <>
      <Box width="100%">
        <H3 mb={2}>Designations</H3>

        <SearchArea
          handleSearch={handleSearchQuery}
          buttonText="Add Designation"
          searchPlaceholder="Search Designation..."
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
                  rowCount={designations?.length}
                  onRequestSort={handleRequestSort}
                />

                <TableBody>
                  {filteredList.map((designation) => (
                    <DesignationRow
                      designation={designation}
                      key={designation.id}
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
              count={Math.ceil(designations?.length / rowsPerPage) || 0}
            />
          </Stack>
        </Card>
      </Box>
      <DesignationModal
        mode={mode}
        open={modal}
        close={() => setModal(false)}
        designation={data}
      />
    </>
  );
};

export default Designation;
