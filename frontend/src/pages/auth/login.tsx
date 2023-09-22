import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { useTheme } from '@mui/material/styles';
import {
  Box,
  Paper,
  Card,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// project imports
import useAuth from '@/hooks/useAuth';
import useScriptRef from '@/hooks/useScriptRef';

//style
const boxStyle = {
  backgroundColor: '#026576',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const cardStyle = {
  backgroundColor: '#026576',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const paperStyle = {
  width: '350px',
  height: '350px',
  margin: '5%',
  padding: '25px',
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const scriptedRef = useScriptRef();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Formik
      initialValues={{
        email: import.meta.env.VITE_VISITOR_EMAIL ?? '',
        password: import.meta.env.VITE_VISITOR_PASSWORD ?? '',
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().required('Email/Username is required'),
        password: Yup.string().max(255).required('Password is required'),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          await login({ email: values.email, password: values.password });
          if (scriptedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);
          }
        } catch (error: any) {
          if (scriptedRef.current) {
            setStatus({ success: false });
            setErrors({ submit: error.response.data.message });
            setSubmitting(false);
          }
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <Box sx={boxStyle}>
          <Card sx={cardStyle}>
            <Paper elevation={3} sx={paperStyle}>
              <h2 style={{ textAlign: 'center' }}>Login Form</h2>
              <form noValidate onSubmit={handleSubmit}>
                <FormControl
                  fullWidth
                  error={Boolean(touched.email && errors.email)}
                  // sx={{ ...theme.typography.customInput }}
                >
                  <InputLabel htmlFor="outlined-adornment-email-login">
                    username
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-email-login"
                    label="username"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    inputProps={{}}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-email-login"
                    >
                      {String(errors.email)}
                    </FormHelperText>
                  )}
                </FormControl>
                <br />
                <br />

                <FormControl
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                  // sx={{ ...theme.typography.customInput }}
                >
                  <InputLabel htmlFor="outlined-adornment-password-login">
                    password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password-login"
                    label="password"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    inputProps={{}}
                  />
                  {touched.password && errors.password && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {String(errors.password)}
                    </FormHelperText>
                  )}
                </FormControl>

                {errors.submit && (
                  <Box sx={{ mt: 3 }}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
                <Box sx={{ mt: 2 }}>
                  <Button
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    login
                  </Button>
                </Box>
              </form>
            </Paper>
          </Card>
        </Box>
      )}
    </Formik>
  );
};

export default Login;
