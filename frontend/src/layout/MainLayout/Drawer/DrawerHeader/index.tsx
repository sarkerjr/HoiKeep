// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Chip, Typography } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="subtitle1" component="div">
          LOGO
        </Typography>
        {/* <Chip
          label={process.env.REACT_APP_VERSION}
          size="small"
          sx={{
            height: 16,
            '& .MuiChip-label': { fontSize: '0.625rem', py: 0.25 },
          }}
          component="a"
          target="_blank"
          clickable
        /> */}
      </Stack>
    </DrawerHeaderStyled>
  );
};

export default DrawerHeader;
