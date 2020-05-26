import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import trainee from './data/trainee';


import AddDialog from './components';
// import { TableComponent } from '../../components';


class TraineeList extends React.Component {
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
        <br />
        <Button variant="outlined" color="primary" onClick={this.onOpen}>
          ADD TRAINEELIST
        </Button>
        <AddDialog
          onClose={this.onClose}
          open={open}
          onSubmit={(name, password, email) => this.onSubmit(name, password, email)}
        />
        {/* <TableComponent /> */}
        <ul>
          {
            trainee && trainee.length && trainee.map((element) => (
              <li>
                <Link to={`/Trainee/${element.id}`}>{element.name}</Link>
              </li>
            ))
          }
        </ul>

      </>
    );
  }
}


export default TraineeList;
