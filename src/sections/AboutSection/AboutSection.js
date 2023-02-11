import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import SectionStack from '../../components/SectionStack/SectionStack';
import SectionItem from '../../components/SectionItem/SectionItem';
import AboutImg from './about.svg';
import Skills from './Skills';
import SectionContainer from '../../components/SectionContainer/SectionContainer';

const AboutSection = () => {
    return (
        <SectionContainer id="about">
            <SectionStack>
                <SectionItem>
                    <img className="sectionMainImage" src={AboutImg} alt="" />
                </SectionItem>
                <SectionItem>
                    <Box>
                        <Typography
                            color="text.primary"
                            component="h3"
                            variant="h4"
                            mb={2}
                        >
                            About
                        </Typography>
                        <Typography
                            color="text.secondary"
                            component="p"
                            fontSize="1.25rem"
                            mb={2}
                        >
                            I've been developing web applications for the past
                            two years. Having a passion for knowledge and
                            experimentation, I have acquired a deep level of
                            understanding of the various technologies I use. My
                            strong communication skills and attention to design,
                            combined with my programming expertise, allow me to
                            deliver solutions that not only satisfy my clients
                            but also exceed their expectations.
                        </Typography>

                        <Typography
                            color="text.secondary"
                            component="p"
                            fontSize="1.25rem"
                            mb={4}
                        >
                            I'm also a Linux enthusiast, and I enjoy exploring
                            different distributions, desktop environments, and
                            window managers. In my spare time, I like to read
                            and ponder age-old philosophical conundrums.
                        </Typography>
                        <Skills />
                    </Box>
                </SectionItem>
            </SectionStack>
        </SectionContainer>
    );
};

export default AboutSection;
