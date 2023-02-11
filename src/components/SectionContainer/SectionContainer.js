import { Box, Container } from '@mui/material';

const SectionContainer = (props) => {
    return (
        <Box
            id={props.id}
            sx={{
                py: 8
            }}
        >
            <Container>{props.children}</Container>
        </Box>
    );
};

export default SectionContainer;
