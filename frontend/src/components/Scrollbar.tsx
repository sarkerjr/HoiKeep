import { FC, ReactNode } from 'react';
import { alpha, styled, SxProps } from '@mui/material';
import SimpleBar, { Props as SimpleBarProps } from 'simplebar-react';

const StyledScrollBar = styled(SimpleBar)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&.simplebar-visible:before': { opacity: 1 },
    '&:before': { backgroundColor: alpha(theme.palette.grey[400], 0.6) },
  },
  '& .simplebar-track.simplebar-vertical': { width: 9 },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': { height: 6 },
  '& .simplebar-mask': { zIndex: 'inherit' },
}));

interface ScrollbarProps extends SimpleBarProps {
  sx?: SxProps;
  children: ReactNode;
}

const Scrollbar: FC<ScrollbarProps> = ({ children, sx, ...props }) => {
  return (
    <StyledScrollBar sx={sx} {...props}>
      {children}
    </StyledScrollBar>
  );
};

export default Scrollbar;
