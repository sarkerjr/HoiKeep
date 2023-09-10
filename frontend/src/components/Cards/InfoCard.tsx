import { FC, ReactElement } from 'react';
import {
  SvgIconProps,
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Icon,
} from '@mui/material/';
import { useNavigate } from 'react-router-dom';

type IconCardProps = {
  title: string;
  description: string;
  icon: ReactElement<SvgIconProps>;
  path: string;
  btnText: string;
};

const InfoCard: FC<IconCardProps> = ({
  title,
  description,
  icon,
  path,
  btnText,
}) => {
  const navigate = useNavigate();

  const card = {
    width: 250,
    padding: '8px',
    m: '50px 0',
    backgroundColor: '#026576',
    height: 215,
    border: '1px solid #000000',
  };

  const iconStyle = {
    color: '#ffffff',
    width: '2.5em',
    height: '3em',
    marginRight: '15px',
    marginTop: '15px',
    '& .MuiSvgIcon-root': {
      width: '2.5em',
      height: '3em',
    },
  };

  const iconBox = { textAlign: 'center' };

  const titleStyle = {
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: '100',
    textAlign: 'left',
    marginBottom: '8px',
  };

  const descriptionStyle = {
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'left',
  };

  const btn = {
    backgroundColor: '#ffffff',
    color: '#000000',
    margin: '0px -16px -105px -16px',
    width: '250px',
    ':hover': {
      backgroundColor: '#d1d1d1',
    },
  };

  return (
    <Card sx={card}>
      <CardContent>
        <Grid container>
          <Grid item lg md xs={5}>
            <Typography sx={iconBox}>
              <Icon sx={iconStyle}>{icon}</Icon>
            </Typography>
          </Grid>

          <Grid item lg md xs={6}>
            <Typography sx={titleStyle}>{title}</Typography>
            <Typography sx={descriptionStyle}>{description}</Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <Button onClick={() => navigate(path)} sx={btn}>
          {btnText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default InfoCard;
