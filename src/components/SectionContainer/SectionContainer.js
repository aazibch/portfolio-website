import { Box, Container } from '@mui/material';

const SectionContainer = (props) => {
    return (
        <Box
            id={props.id}
            sx={{
                borderColor: 'divider',
                borderBottomStyle: 'solid',
                borderWidth: '1px',
                py: 10
            }}
        >
            <Container>{props.children}</Container>
        </Box>
    );
};

export default SectionContainer;
