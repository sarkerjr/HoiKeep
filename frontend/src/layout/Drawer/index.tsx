import { styled } from '@mui/material/styles';
import {
  Container,
  Box,
  Drawer as MuiDrawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// project imports
import MenuList from './MenuList';
import { DRAWER_WIDTH } from '@/utils/constants';
import { useSelector, useDispatch } from '@/store';
import { setDrawerState } from '@/store/slices/layoutSlice';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${DRAWER_WIDTH}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Drawer(props) {
  const { openDrawer } = useSelector((state: any) => state.layout);

  const dispatch = useDispatch();

  const handleDrawerClose = () => {
    dispatch(setDrawerState(false));
  };

  return (
    <Box
      display="flex"
      width={openDrawer ? `calc(100% - ${DRAWER_WIDTH}px)` : '100%'}
    >
      <MuiDrawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={openDrawer}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <MenuList />
      </MuiDrawer>
      <Container maxWidth="xl">
        <Main open={openDrawer}>
          <DrawerHeader />
          {props.children}
        </Main>
      </Container>
    </Box>
  );
}
