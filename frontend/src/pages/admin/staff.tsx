import { useState, useEffect } from 'react';
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
import StaffRow from '@/page-setions/admin/staff/StaffRow';
import StaffModal from '@/page-setions/admin/staff/StaffModal';
import { useReadStaffsQuery } from '@/store/services/staff.services';

// TABLE HEADING DATA LIST
const tableHeading = [
  { id: 'id', label: 'ID', align: 'center' },
  { id: 'name', label: 'Name', align: 'center' },
  { id: 'email', label: 'Email', align: 'center' },
  { id: 'joinedAt', label: 'Joined At', align: 'center' },
  { id: 'leftAt', label: 'Left At', align: 'center' },
  { id: 'position', label: 'Position', align: 'center' },
  { id: 'action', label: 'Action', align: 'center' },
];

const Staff = () => {
  const { data: staffs } = useReadStaffsQuery();

  const { modal, setModal, mode, setMode, data, setData } = useModal();

  const { rows, setInitialData, handleSearchQuery } = useMuiTableSearch([
    'name',
    'email',
    'joinedAt',
    'leftAt',
    'position',
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
    const newStaffs = staffs?.map((staff, index) => ({
      ...staff,
      sl: index + 1,
    }));
    setInitialData(newStaffs);
  }, [staffs]);
  const handleOnCreate = () => {
    setMode('CREATE');
    setModal(true);
  };

  return (
    <>
      <Box width="100%">
        <H3 mb={2}>Staffs</H3>

        <SearchArea
          handleSearch={handleSearchQuery}
          buttonText="Add Staff"
          searchPlaceholder="Search Staff..."
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
                  rowCount={staffs?.length}
                  onRequestSort={handleRequestSort}
                />

                <TableBody>
                  {filteredList.map((staff) => (
                    <StaffRow
                      staff={staff}
                      key={staff.id}
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
              count={Math.ceil(staffs?.length / rowsPerPage) || 0}
            />
          </Stack>
        </Card>
      </Box>
      <StaffModal
        mode={mode}
        open={modal}
        close={() => setModal(false)}
        staff={data}
      />
    </>
  );
};

export default Staff;
