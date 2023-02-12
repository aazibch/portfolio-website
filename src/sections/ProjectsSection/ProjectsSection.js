import { GitHub } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import ProjectsGrid from './ProjectsGrid';

const ProjectsSection = () => {
    return (
        <SectionContainer id="projects">
            <Typography color="text.primary" component="h2" variant="h4" mb={3}>
                Projects
            </Typography>
            <ProjectsGrid />
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                <Button
                    component="a"
                    href="https://github.com/aazibch?tab=repositories"
                    target="_blank"
                    startIcon={<GitHub />}
                    variant="text"
                    size="large"
                >
                    View more on GitHub
                </Button>
            </Box>
        </SectionContainer>
    );
};

export default ProjectsSection;
