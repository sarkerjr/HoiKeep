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
import AuthorityRow from '@/page-setions/admin/authority/AuthorityRow';
import AuthorityModal from '@/page-setions/admin/authority/AuthorityModal';
import { useReadAuthoritiesQuery } from '@/store/services/authority.services';

// TABLE HEADING DATA LIST
const tableHeading = [
  { id: 'id', label: 'ID', align: 'center' },
  { id: 'name', label: 'Name', align: 'center' },
  { id: 'email', label: 'Email', align: 'center' },
  { id: 'designation', label: 'Designation', align: 'center' },
  { id: 'joinedAt', label: 'Joined At', align: 'center' },
  { id: 'leftAt', label: 'Left At', align: 'center' },
  { id: 'position', label: 'Position', align: 'center' },
  { id: 'department', label: 'Department', align: 'center' },
  { id: 'action', label: 'Action', align: 'center' },
];

const Authority = () => {
  const { data: authorities } = useReadAuthoritiesQuery();

  const { modal, setModal, mode, setMode, data, setData } = useModal();
  const { rows, setInitialData, handleSearchQuery } = useMuiTableSearch([
    'name',
    'email',
    'designation',
    'joinedAt',
    'leftAt',
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
    const newAuthorities = authorities?.map((authority, index) => ({
      ...authority,
      sl: index + 1,
    }));
    setInitialData(newAuthorities);
  }, [authorities]);

  const handleOnCreate = () => {
    setMode('CREATE');
    setModal(true);
  };

  return (
    <>
      <Box width="100%">
        <H3 mb={2}>Authorities</H3>

        <SearchArea
          handleSearch={handleSearchQuery}
          buttonText="Add Authority"
          searchPlaceholder="Search Authority..."
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
                  rowCount={authorities?.length}
                  onRequestSort={handleRequestSort}
                />

                <TableBody>
                  {filteredList.map((authority) => (
                    <AuthorityRow
                      authority={authority}
                      key={authority.id}
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
              count={Math.ceil(authorities?.length / rowsPerPage) || 0}
            />
          </Stack>
        </Card>
      </Box>
      <AuthorityModal
        mode={mode}
        open={modal}
        close={() => setModal(false)}
        authority={data}
      />
    </>
  );
};

export default Authority;
