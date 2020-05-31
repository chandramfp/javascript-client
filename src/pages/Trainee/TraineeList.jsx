import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddDialog from './components/AddDialog/AddDialog';
import trainee from './data/trainee';
// import { TableComponent } from '../../components/index';
import { TableContainer } from '../../components/index';
import getDateFormatted from './helper';
import EditDialog from '../../components/EditDialog/EditDialog';
import RemoveDialog from '../../components/RemoveDialog/RemoveDialog';


const useStyles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: theme.spacing(2, 0, 2),
  },
});

class Trainee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selected: '',
      orderBy: '',
      order: 'asc',
      EditOpen: false,
      RemoveOpen: false,
      page: 0,
      rowsPerPage: 5,
      edata: {},
      deleteData: {},
    };
  }

  openDialog = (status) => {
    this.setState({ open: status });
  };


  onSubmit = (data) => {
    this.setState({ open: false }, () => { console.log(data); });
  };

  handleSelect = (event, data) => {
    this.setState({ selected: event.target.value }, () => console.log(data));
  };

  handleSort = (field) => (event) => {
    const { order } = this.state;
    this.setState({
      orderBy: field,
      order: order === 'asc' ? 'desc' : 'asc',
      page: '',
    });
  }


  // handleEditDialogOpen = (data) => {
  //   this.setState({ EditOpen: true, edata: data }, () => console.log(data));
  // }

  handleEditDialogOpen = (data) => {
    this.setState({ EditOpen: true, edata: data });
  }

  handleDeleteDialogOpen = (data) => {
    // console.log("dddddddddddddddd", data);
    this.setState({ RemoveOpen: true, deleteData: data });
  }

  handleClick = (data) => {
    this.setState({ EditOpen: false }, () => console.log('Edited data', data));
  };

  handleDeleteClick = (data) => {
    this.setState({ RemoveOpen: false }, () => console.log('Deleted data', data));
  };

  handleChangePage = (event, newPage) => {
    this.setState({
      page: newPage,
    });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: event.target.value,
      page: 0,

    });
  };

  render() {
    const {
      open, order, orderBy, EditOpen, RemoveOpen, page, rowsPerPage, edata, deleteData,
    } = this.state;
    const { classes } = this.props;

    return (
      <>
        <div className={classes.root}>
          <Button variant="outlined" color="primary" onClick={() => this.openDialog(true)}>
            ADD TRAINEE
          </Button>
        </div>
        <EditDialog
          data={edata}
          onClose={this.handleClick}
          onSubmit={this.handleClick}
          open={EditOpen}
        />
        <RemoveDialog
          data={deleteData}
          onClose={this.handleDeleteClick}
          onSubmit={this.handleDeleteClick}
          open={RemoveOpen}
        />
        {/* <TableComponent */}
        <TableContainer
          id="id"
          data={trainee}
          columns={
            [
              {
                field: 'name',
                label: 'Name',
                align: 'center',
              },
              {
                field: 'email',
                label: 'Email Address',
                align: 'center',
                format: (value) => value && value.toUpperCase(),
              },
              {
                field: 'createdAt',
                label: 'Date',
                align: 'right',
                format: getDateFormatted,
              },
            ]
          }
          actions={
            [
              {
                icon: <EditIcon />,
                handler: this.handleEditDialogOpen,
              },
              {
                icon: <DeleteIcon />,
                handler: this.handleDeleteDialogOpen,
              },
            ]
          }
          orderBy={orderBy}
          order={order}
          onSort={this.handleSort}
          onSelect={this.handleSelect}
          count={100}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
          onChangePage={this.handleChangePage}
        />
        <AddDialog
          onClose={() => this.openDialog(false)}
          onSubmit={() => this.onSubmit}
          open={open}
        />
        <ul>
          {
            trainee && trainee.length && trainee.map((element) => (
              <Fragment key={element.id}>
                <li key={element.id}>
                  <Link to={`/Trainee/${element.id}`}>{element.name}</Link>
                </li>
              </Fragment>
            ))
          }
        </ul>
      </>
    );
  }
}

Trainee.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(useStyles)(Trainee);
