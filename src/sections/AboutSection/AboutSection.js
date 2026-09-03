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
            <Typography color="text.primary" component="h2" variant="h4" mb={2}>
              About
            </Typography>
            <Typography
              color="text.secondary"
              component="p"
              fontSize="1.25rem"
              mb={2}
            >
              With years of experience and a passion for tinkering, I've
              acquired a deep level understanding of various different
              frameworks, tools, and languages. Strong communication skills,
              attention to design, and an emphasis on scalable, efficient code
              allow me to deliver solutions that not only satisfy my clients but
              also exceed their expectations.
            </Typography>

            <Typography
              color="text.secondary"
              component="p"
              fontSize="1.25rem"
              mb={4}
            >
              A long-time Linux user, I'm enthusiastic about open-source,
              community-driven software. In my spare time, I like to compose
              poetry and ponder age-old philosophical conundrums.
            </Typography>
            <Skills />
          </Box>
        </SectionItem>
      </SectionStack>
    </SectionContainer>
  );
};

export default AboutSection;
