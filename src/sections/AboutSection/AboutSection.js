import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import SectionStack from '../../components/SectionStack/SectionStack';
import SectionItem from '../../components/SectionItem/SectionItem';
import AboutImg from './about.svg';
import Skills from './Skills';

const AboutSection = () => {
    return (
        <SectionStack>
            <SectionItem>
                <img className="sectionMainImage" src={AboutImg} alt="" />
            </SectionItem>
            <SectionItem>
                <Box>
                    <Typography
                        color="text.primary"
                        component="h3"
                        mb={2}
                        fontSize="1.5rem"
                    >
                        About
                    </Typography>
                    <Typography
                        color="text.secondary"
                        component="p"
                        fontSize="1.25rem"
                        mb={4}
                    >
                        I've been building scalable, efficient, and
                        user-friendly web applications for the past two years.
                        Having a passion for knowledge and experimentation, I
                        have acquired a deep level of understanding of the
                        various technologies I use. My strong communication
                        skills and attention to design, combined with my
                        programming expertise, allow me to deliver solutions
                        that not only satisfy my clients but also exceed their
                        expectations.
                    </Typography>
                    <Skills />
                </Box>
            </SectionItem>
        </SectionStack>
    );
};

export default AboutSection;
