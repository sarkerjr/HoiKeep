import { Theme, styled, alpha } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';

// project import
import { DRAWER_WIDTH } from '@/utils/constants';

interface MixinProps {
  theme: Theme;
}

const openedMixin = ({ theme }: MixinProps) => ({
  width: DRAWER_WIDTH,
  borderRight: `1px solid ${theme.palette.divider}`,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden' as const,
  boxShadow: 'none',
});

const closedMixin = ({ theme }: MixinProps) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden' as const,
  width: 0,
  borderRight: 'none',
  boxShadow: `0px 2px 8px ${alpha(theme.palette.grey[900], 0.15)}`,
});

interface MiniDrawerStyledProps {
  open?: boolean;
}

const MiniDrawerStyled = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})<MiniDrawerStyledProps>(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin({ theme }),
    '& .MuiDrawer-paper': openedMixin({ theme }),
  }),
  ...(!open && {
    ...closedMixin({ theme }),
    '& .MuiDrawer-paper': closedMixin({ theme }),
  }),
}));

export default MiniDrawerStyled;
