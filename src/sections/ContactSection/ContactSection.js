import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import SectionContainer from '../../components/SectionContainer/SectionContainer';
import SectionItem from '../../components/SectionItem/SectionItem';
import SectionStack from '../../components/SectionStack/SectionStack';

import ContactImg from './contact.svg';
import ContactForm from './ContactForm/ContactForm';

const ContactSection = () => {
    return (
        <SectionContainer id="contact">
            <SectionStack>
                <SectionItem>
                    <Box flexGrow="1">
                        <Typography
                            color="text.primary"
                            component="h3"
                            variant="h4"
                            mb={3}
                        >
                            Contact
                        </Typography>
                        <ContactForm />
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
