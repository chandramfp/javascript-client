import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,

} from '@material-ui/core';


export default function RemoveDialog(props) {
  const {
    open, onClose, onSubmit, data,
  } = props;
  return (
    <>
      <div>
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Remove Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>
              do you really want to remove trainee?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => onSubmit({
                data,
              })}
              color="primary"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

RemoveDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  data: PropTypes.objectOf(PropTypes.string),
};

RemoveDialog.defaultProps = {
  open: '',
  onClose: '',
  onSubmit: '',
  data: {},
};
