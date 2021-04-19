import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//internal modules
import { actionCloseDialog } from 'state/ducks/common/actions/dialog';
import { typeOfDialog } from 'state/ducks/common/actions/dialog';
//internal component
import RatingDialog from 'common/dialog/RatingDialog';
import UpdateTopicDialog from 'common/dialog/UpdateTopicDialog';
import NewPostDialog from 'common/dialog/NewPostDialog';
//material-ui components
import Dialog from '@material-ui/core/Dialog';

function FrameDialog() {
  //STATE
  const { kindOfDialog, isOpen } = useSelector((state) => state.dialog);
  const dispatch = useDispatch();

  //METHOD
  const handleClose = () => {
    dispatch(actionCloseDialog());
  };
  const showBodyDialog = () => {
    switch (kindOfDialog) {
      case typeOfDialog.RATING_DIALOG_TYPE:
        return <RatingDialog />;
      case typeOfDialog.UPDATE_TOPIC_DIALOG:
        return <UpdateTopicDialog />;
      case typeOfDialog.NEW_POST_DIALOG:
        return <NewPostDialog />;
      //   case typeDialog.EDIT_TASK_DIALOG:
      //     return <DialogEditTask />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
        fullWidth
        maxWidth="md"
      >
        {showBodyDialog()}
      </Dialog>
    </div>
  );
}
export default FrameDialog;
