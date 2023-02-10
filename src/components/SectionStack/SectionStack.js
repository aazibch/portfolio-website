import { Stack } from '@mui/system';

const SectionStack = (props) => {
    return (
        <Stack direction={{ xs: 'column', md: 'row' }} spacing="50px">
            {props.children}
        </Stack>
    );
};

export default SectionStack;
