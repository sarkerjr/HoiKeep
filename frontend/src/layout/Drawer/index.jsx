import {
  Toolbar,
  Drawer as MuiDrawer,
  useTheme,
  useMediaQuery,
} from '@mui/material/';

// project imports
import { drawerWidth } from '@/utils/constants';
import MenuList from './MenuList';
import { useSelector, useDispatch } from '@/store';
import { setDrawerState } from '@/store/slices/layoutSlice';

const Drawer = () => {
  const { openDrawer } = useSelector((state) => state.layout);

  const dispatch = useDispatch();

  const theme = useTheme();
  const screenMd = useMediaQuery(theme.breakpoints.up('md'));

  const handleCloseDrawer = () => {
    dispatch(setDrawerState(false));
  };

  return (
    <MuiDrawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      open={openDrawer}
      onClose={handleCloseDrawer}
      variant={screenMd ? 'permanent' : 'temporary'}
      anchor="left"
    >
      <Toolbar />
      <MenuList />
    </MuiDrawer>
  );
};

export default Drawer;
