import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import HeroImg from './hero.svg';

import SectionStack from '../../components/SectionStack/SectionStack';
import SectionItem from '../../components/SectionItem/SectionItem';

const HeroSection = () => {
    return (
        <SectionStack>
            <SectionItem>
                <Box>
                    <Typography
                        color="text.primary"
                        component="h1"
                        mb={1}
                        fontSize="2rem"
                    >
                        Hello world!
                    </Typography>
                    <Typography
                        color="text.secondary"
                        component="p"
                        fontSize="1.5rem"
                    >
                        I'm Aazib Chaudhry, a full-stack developer working to
                        make the web a more intuitive, accessible, and
                        beneficial place for all.
                    </Typography>
                </Box>
            </SectionItem>
            <SectionItem>
                <img className="sectionMainImage" src={HeroImg} alt="" />
            </SectionItem>
        </SectionStack>
    );
};

export default HeroSection;
