import { Box, Container, Grid } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InfoCard from '@components/Cards/InfoCard';
import { School as SchoolIcon } from '@mui/icons-material';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

import { startLoadingAlert, stopLoadingAlert } from '@utils/SweetAlert';

// project imports
import { useReadDashboardDataQuery } from '@/store/services/dashboard.services';

const dashboard = () => {
  const {
    data: dashboardData,
    isLoading,
    isError,
  } = useReadDashboardDataQuery();

  // if (isLoading) {
  //   startLoadingAlert();
  // } else if (!isLoading && isError) {
  //   stopLoadingAlert();
  // }

  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container>
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <InfoCard
              title="Total Students"
              description={dashboardData?.students}
              icon={<PeopleAltIcon />}
              path="/student"
              btnText="View More"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4} xl={3}>
            <InfoCard
              title="Total Departments"
              description={dashboardData?.departments}
              icon={<SchoolIcon />}
              path="/department"
              btnText="View More"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4} xl={3}>
            <InfoCard
              title="Total Rooms"
              description={dashboardData?.rooms}
              icon={<MeetingRoomIcon />}
              path="/room"
              btnText="View More"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4} xl={3}>
            <InfoCard
              title="Total Seats"
              description={dashboardData?.seats}
              icon={<BedroomParentIcon />}
              path="/seat"
              btnText="View More"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4} xl={3}>
            <InfoCard
              title="Total Operators"
              description={dashboardData?.operators}
              icon={<PersonAddAlt1Icon />}
              path="/operator"
              btnText="View More"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4} xl={3}>
            <InfoCard
              title="Total Staffs"
              description={dashboardData?.staffs}
              icon={<GroupsIcon />}
              path="/staff"
              btnText="View More"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4} xl={3}>
            <InfoCard
              title="Total Authorities"
              description={dashboardData?.authorities}
              icon={<PersonIcon />}
              path="/authority"
              btnText="View More"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default dashboard;
