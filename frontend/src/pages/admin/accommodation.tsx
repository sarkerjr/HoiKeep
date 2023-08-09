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
import AccommodationRow from '@/page-setions/admin/accommodation/AccommodationRow';
import AccommodationModal from '@/page-setions/admin/accommodation/AccommodationModal';
import { useReadAccommodationsQuery } from '@/store/services/accommodation.services';

// TABLE HEADING DATA LIST
const tableHeading = [
  { id: 'id', label: 'ID', align: 'center' },
  { id: 'room', label: 'Room', align: 'center' },
  { id: 'student', label: 'Student', align: 'center' },
  { id: 'active', label: 'Active', align: 'center' },
  { id: 'status', label: 'Status', align: 'center' },
  { id: 'joining', label: 'Joining', align: 'center' },
  { id: 'leaving', label: 'Leaving', align: 'center' },
  { id: 'action', label: 'Action', align: 'center' },
];

const Accommodation = () => {
  const { data: accommodations } = useReadAccommodationsQuery();
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
    const newAccommodations = accommodations?.map((accommodation, index) => ({
      ...accommodation,
      sl: index + 1,
    }));
    setInitialData(newAccommodations);
  }, [accommodations]);

  const handleOnCreate = () => {
    setMode('CREATE');
    setModal(true);
  };

  return (
    <>
      <Box width="100%">
        <H3 mb={2}>Accommodations</H3>

        <SearchArea
          handleSearch={handleSearchQuery}
          buttonText="Add Accommodation"
          searchPlaceholder="Search Accommodation..."
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
                rowCount={accommodations?.length}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {filteredList.map((accommodation) => (
                  <AccommodationRow
                    accommodation={accommodation}
                    key={accommodation.id}
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
              count={Math.ceil(accommodations?.length / rowsPerPage) || 0}
            />
          </Stack>
        </Card>
      </Box>

      <AccommodationModal
        mode={mode}
        open={modal}
        close={() => setModal(false)}
        accommodation={data}
      />
    </>
  );
};

export default Accommodation;
