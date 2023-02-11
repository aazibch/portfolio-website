import { Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import Modal from '../../../components/UI/Modal/Modal';

const StyledTextField = styled(TextField)(({ theme }) => ({
    width: '100%',
    marginBottom: theme.spacing(2)
}));

const ContactForm = () => {
    const [modelOpen, setModelOpen] = useState(false);

    const handleModelOpen = () => {
        setModelOpen(true);
    };

    const handleModelClose = () => {
        setModelOpen(false);
    };

    return (
        <>
            <form>
                <StyledTextField
                    id="outlined-basic"
                    label="Full name"
                    variant="outlined"
                    type="text"
                />
                <StyledTextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    type="email"
                />
                <StyledTextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={10}
                />
                <Button variant="contained">Send</Button>
                <Button onClick={handleModelOpen} variant="text" sx={{ ml: 1 }}>
                    Contact directly
                </Button>
            </form>

            <Modal
                title="Contact Directly"
                open={modelOpen}
                onClose={handleModelClose}
            >
                <Typography>Email: aazibch47@gmail.com</Typography>
            </Modal>
        </>
    );
};

export default ContactForm;
