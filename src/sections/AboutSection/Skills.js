import { Box, Grid, styled } from '@mui/material';

const skills = [
    'HTML',
    'CSS',
    'SCSS',
    'JavaScript',
    'React',
    'Node',
    'Express',
    'MongoDB',
    'PHP',
    'SQL',
    'MySQL',
    'Bash'
];

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'light'
            ? 'theme.palette.background.default'
            : '#222222',
    textAlign: 'center',
    padding: '15px 0',
    color: theme.palette.text.secondary,
    borderColor: '#c6c6c6',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: theme.shape.borderRadius
}));

const Skills = () => {
    return (
        <Grid container spacing={2}>
            {skills.map((skill) => (
                <Grid item xs={6} sm={3}>
                    <StyledBox elevation={2}>{skill}</StyledBox>
                </Grid>
            ))}
        </Grid>
    );
};

export default Skills;
