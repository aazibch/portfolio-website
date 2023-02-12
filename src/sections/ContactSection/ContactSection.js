import { useState } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import SectionContainer from '../../components/SectionContainer/SectionContainer';
import SectionItem from '../../components/SectionItem/SectionItem';
import SectionStack from '../../components/SectionStack/SectionStack';

import ContactImg from './contact.svg';
import ContactForm from './ContactForm/ContactForm';
import Modal from '../../components/UI/Modal/Modal';

const ContactSection = () => {
    const [modelOpen, setModelOpen] = useState(false);

    const handleModelOpen = () => {
        setModelOpen(true);
    };

    const handleModelClose = () => {
        setModelOpen(false);
    };

    return (
        <SectionContainer id="contact">
            <SectionStack direction={{ xs: 'column-reverse', md: 'row' }}>
                <SectionItem>
                    <Box flexGrow="1">
                        <Typography
                            color="text.primary"
                            component="h2"
                            variant="h4"
                            mb={3}
                        >
                            Contact
                        </Typography>
                        <ContactForm handleModelOpen={handleModelOpen} />
                        <Modal
                            title="Contact Directly"
                            open={modelOpen}
                            onClose={handleModelClose}
                        >
                            <Typography>Email: aazibch47@gmail.com</Typography>
                        </Modal>
                    </Box>
                </SectionItem>
                <SectionItem>
                    <img className="sectionMainImage" src={ContactImg} alt="" />
                </SectionItem>
            </SectionStack>
        </SectionContainer>
    );
};

export default ContactSection;
