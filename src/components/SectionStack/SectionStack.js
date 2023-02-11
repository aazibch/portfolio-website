import { Stack } from '@mui/system';

const SectionStack = (props) => {
    return (
        <Stack
            direction={props.direction || { xs: 'column', md: 'row' }}
            spacing="40px"
        >
            {props.children}
        </Stack>
    );
};

export default SectionStack;
