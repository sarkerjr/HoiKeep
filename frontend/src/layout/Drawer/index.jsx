import { Drawer as MuiDrawer } from '@mui/material/';

// project imports
import MenuList from './MenuList';
import { useDispatch, useSelector } from '@/store';
import { setDrawerState } from '@/store/slices/layoutSlice';

const Drawer = () => {
  const { openDrawer } = useSelector((state) => state.layout);

  const dispatch = useDispatch();

  const handleCloseDrawer = () => {
    dispatch(setDrawerState(false));
  };

  return (
    <div>
      <MuiDrawer anchor={'left'} open={openDrawer} onClose={handleCloseDrawer}>
        <MenuList />
      </MuiDrawer>
    </div>
  );
};

export default Drawer;
