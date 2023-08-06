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
import PositionRow from '@/page-setions/admin/position/PositionRow';
import PositionModal from '@/page-setions/admin/position/PositionModal';
import { useReadPositionsQuery } from '@/store/services/position.services';

// TABLE HEADING DATA LIST
const tableHeading = [
  { id: 'id', label: 'ID', align: 'center' },
  { id: 'name', label: 'Name', align: 'center' },
  { id: 'category', label: 'Category', align: 'center' },
  { id: 'action', label: 'Action', align: 'center' },
];

const Position = () => {
  const { data: positions } = useReadPositionsQuery();

  const { modal, setModal, mode, setMode, data, setData } = useModal();
  const { rows, setInitialData, handleSearchQuery } = useMuiTableSearch([
    'name',
    'category',
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
    const newPositions = positions?.map((position, index) => ({
      ...position,
      sl: index + 1,
    }));
    setInitialData(newPositions);
  }, [positions]);

  const handleOnCreate = () => {
    setMode('CREATE');
    setModal(true);
  };

  return (
    <>
      <Box width="100%">
        <H3 mb={2}>Positions</H3>

        <SearchArea
          handleSearch={handleSearchQuery}
          buttonText="Add Position"
          searchPlaceholder="Search Position..."
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
                  rowCount={positions?.length}
                  onRequestSort={handleRequestSort}
                />

                <TableBody>
                  {filteredList.map((position) => (
                    <PositionRow
                      position={position}
                      key={position.id}
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
              count={Math.ceil(positions?.length / rowsPerPage) || 0}
            />
          </Stack>
        </Card>
      </Box>
      <PositionModal
        mode={mode}
        open={modal}
        close={() => setModal(false)}
        position={data}
      />
    </>
  );
};

export default Position;
