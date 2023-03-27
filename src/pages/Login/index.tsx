import React from "react";
import useForm from "../../_common/_hooks/useForm";
import Button from "../../_components/Form/Button/Button";
import Input from "../../_components/Form/Input";
import * as yup from 'yup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';



export type LoginStateType = {

  email: string;
  password: string;
};
export const LoginStateDefaultValue: LoginStateType = {

  email: "",
  password: "",
};


export default function Login() {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
   console.log(event.target)
  };


  const { control, errors,handleSubmit } = useForm({
    defaultValues: LoginStateDefaultValue,
    validationSchema: {
      email: yup.string().typeError('Enter E-Mail').required('Enter E-Mail'),
      password: yup.string().typeError('Enter Password').required('Enter Password'),
    },
  });
  return (
   
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
        
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 4 }}>
            <div className="mb-2">
              <Input
                id="email"
                name="email"
                label="Email"
                type="text"
                control={control}
                errors={errors}
              />
              </div>
           <Input
                id="password"
                name="password"
                label="Password"
                type="text"
                control={control}
                errors={errors}
              />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              className="custom-button"
              fullWidth
              loading={false}
              text="Login"
              iconRight={<i className="fa-solid fa-right-to-bracket"></i>}
            />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
              <NavLink to="/register">{"Don't have an account? Sign Up"}</NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

  )
}