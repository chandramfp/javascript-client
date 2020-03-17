import React from 'react';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import {
  TextField,
  InputAdornment,
  Button,
  CssBaseline,
  Typography,
  Box,
  Container,
  Avatar,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';


const schema = yup.object().shape({
  email: yup.string().email()
  // .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/)
    .required()
    .label('Email Address'),
  password: yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'must contain 8 character, atleast one upper letter,one lowercase letter and one number')
    .required('password is required'),
});

const useStyles = (theme) => ({

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  box: {
    marginTop: theme.spacing(16),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passwors: '',
      signin: '',
      errors: {},
      touched: {
        email: false,
        password: false,
        signin: false,
      },
    };
  }


  handlerOnChangeEmailField = (e) => {
    this.setState({ email: e.target.value });
  }

  handlerOnChangePasswordField = (e) => {
    this.setState({ password: e.target.value });
  }

  hasErrors = () => {
    try {
      schema.validateSync(this.state);
    } catch (err) {
      return true;
    }
    return false;
  }

  isTouched = (field) => {
    const { touched } = this.state;
    this.setState({ touched: { ...touched, [field]: true } });
  }


  getError = (field) => {
    const { touched } = this.state;
    if (touched[field] && this.hasErrors()) {
      try {
        schema.validateSyncAt(field, this.state);
      } catch (err) {
        return err.message;
      }
    }
    return null;
  };

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box mx="auto" p={2} className={classes.box} boxShadow={3}>
          <div className={classes.container}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h4">
              Log in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                fullWidth
                margin="normal"
                helperText={this.getError('email')}
                onChange={this.handlerOnChangeEmailField}
                error={this.getError('email')}
                onBlur={() => this.isTouched('email')}
                id="outlined-required"
                label="Email Address"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                helperText={this.getError('password')}
                onChange={this.handlerOnChangePasswordField}
                error={this.getError('password')}
                onBlur={() => this.isTouched('password')}
                id="outlined-required"
                type="password"
                label="password"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VisibilityOffIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={this.hasErrors()}
              >
                Sign In
              </Button>
            </form>
          </div>
        </Box>
      </Container>

    );
  }
}


Login.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(useStyles)(Login);
