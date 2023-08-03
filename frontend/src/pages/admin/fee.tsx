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
import FeeRow from '@/page-setions/admin/fee/FeeRow';
// import FeeModal from '@/page-setions/admin/fee/FeeModal';
import { useReadFeesQuery } from '@/store/services/fee.services';

// TABLE HEADING DATA LIST
const tableHeading = [
  { id: 'sl', label: 'SL', align: 'center' },
  { id: 'amount', label: 'Amount', align: 'center' },
  { id: 'date', label: 'Date', align: 'center' },
  { id: 'isActive', label: 'Is Active?', align: 'center' },
  { id: 'student', label: 'Student', align: 'center' },
  { id: 'fee', label: 'Room & Seat', align: 'center' },
  { id: 'action', label: 'Action', align: 'center' },
];

const Fee = () => {
  const { data: fees } = useReadFeesQuery();
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
    const newFees = fees?.map((fee, index) => ({
      ...fee,
      sl: index + 1,
    }));
    setInitialData(newFees);
  }, [fees]);

  const handleOnCreate = () => {
    setMode('CREATE');
    setModal(true);
  };

  return (
    <>
      <Box width="100%">
        <H3 mb={2}>Fees</H3>

        <SearchArea
          handleSearch={handleSearchQuery}
          buttonText="Add Fee"
          searchPlaceholder="Search Fee..."
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
                  rowCount={fees?.length}
                  onRequestSort={handleRequestSort}
                />

                <TableBody>
                  {filteredList.map((fee) => (
                    <FeeRow
                      fee={fee}
                      key={fee.id}
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
              count={Math.ceil(fees?.length / rowsPerPage) || 0}
            />
          </Stack>
        </Card>
      </Box>

      {/* <FeeModal
        mode={mode}
        open={modal}
        close={() => setModal(false)}
        fee={data}
      /> */}
    </>
  );
};

export default Fee;
