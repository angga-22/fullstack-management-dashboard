import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Button } from '@mui/material';
import { useAuth } from "../../usecases/useAuth"


export interface SimpleDialogProps {
  open: boolean;
  selectedValue?: string;
  onClose: (value: string) => void;
}

const UIDialog = (props: SimpleDialogProps) => {
  const { logout } = useAuth()

  const { onClose, open } = props;



  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Are you sure you want to log out ? </DialogTitle>
      <Button onClick={logout}>
        Yes, Confirm
      </Button>
      <Button>
        Nah
      </Button>
    </Dialog>
  );
}


export default UIDialog;

