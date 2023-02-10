import { Box } from '@mui/system';

const SectionItem = (props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: '1 0 0'
            }}
        >
            {props.children}
        </Box>
    );
};

export default SectionItem;
