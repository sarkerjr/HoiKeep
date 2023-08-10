import React from 'react';
import {
  Box,
  Container,
  Grid,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InfoCard from '@components/Cards/InfoCard';
import { School as SchoolIcon } from '@mui/icons-material';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const dashboard = () => {
  return (
    <div style={{ width: '135%' }}>
      <Box>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container>
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <InfoCard
                title="Total Students"
                description="500"
                icon={<PeopleAltIcon />}
                path="/student"
                btnText="View More"
              ></InfoCard>
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
              <InfoCard
                title="Total Departments"
                description="30"
                icon={<SchoolIcon />}
                path="/department"
                btnText="View More"
              ></InfoCard>
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
              <InfoCard
                title="Total Rooms"
                description="100"
                icon={<MeetingRoomIcon />}
                path="/room"
                btnText="View More"
              ></InfoCard>
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
              <InfoCard
                title="Total Seats"
                description="500"
                icon={<BedroomParentIcon />}
                path="/seat"
                btnText="View More"
              ></InfoCard>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <InfoCard
                title="Total Operators"
                description="5"
                icon={<PersonAddAlt1Icon />}
                path="/operator"
                btnText="View More"
              ></InfoCard>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <InfoCard
                title="Total Staffs"
                description="4"
                icon={<GroupsIcon />}
                path="/staff"
                btnText="View More"
              ></InfoCard>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <InfoCard
                title="Total Authorites"
                description="2"
                icon={<PersonIcon />}
                path="/authority"
                btnText="View More"
              ></InfoCard>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default dashboard;
