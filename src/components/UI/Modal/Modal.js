import { DialogContent, IconButton, styled } from '@mui/material';
import { Dialog, DialogTitle } from '@mui/material';
import { Close } from '@mui/icons-material';

const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        width: '500px',
        minHeight: '250px'
    }
}));

const Modal = (props) => {
    return (
        <StyledDialog
            sx={{}}
            aria-labelledby="contact-dialog-title"
            open={props.open}
            onClose={props.onClose}
        >
            <DialogTitle id="contact-dialog-title">
                {props.title}
                {props.onClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={props.onClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500]
                        }}
                    >
                        <Close />{' '}
                    </IconButton>
                ) : null}
            </DialogTitle>
            <DialogContent dividers>{props.children}</DialogContent>
        </StyledDialog>
    );
};

export default Modal;
