import React from 'react';
import Button from '@material-ui/core/Button';

import AddDialog from './components';


class Trainee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: '',
      email: '',
      password: '',
    };
  }

  onOpen = () => {
    let { open } = this.state;
    open = true;
    this.setState({ open });
  }

  onClose = () => {
    let { open } = this.state;
    open = false;
    this.setState({ open });
  }

  onSubmit = (name, password, email) => {
    this.setState({
      name,
      password,
      email,
    });
  }

  render() {
    console.log(this.state);
    const { open } = this.state;
    return (
      <>
        <Button variant="outlined" color="primary" onClick={this.onOpen}>
          ADD TRAINEE
        </Button>
        <AddDialog
          onClose={this.onClose}
          open={open}
          onSubmit={(name, password, email) => this.onSubmit(name, password, email)}
        />
      </>
    );
  }
}


export default Trainee;
