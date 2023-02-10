import { Box, Container, Stack } from '@mui/system';

const SectionStack = (props) => {
    return (
        <Box
            sx={{
                borderColor: 'divider',
                borderBottomStyle: 'solid',
                borderWidth: '1px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 10
            }}
        >
            <Container>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
                    {props.children}
                </Stack>
            </Container>
        </Box>
    );
};

export default SectionStack;
