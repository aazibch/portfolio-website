import { Container, Link, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';

const socialLinks = [
    {
        site: 'GitHub',
        link: 'https://github.com/aazibch/'
    },
    {
        site: 'Twitter',
        link: 'https://twitter.com/AazibCh'
    },
    {
        site: 'Goodreads',
        link: 'https://www.goodreads.com/user/show/155259652-aazib-chaudhry'
    }
];

const Footer = () => {
    return (
        <Container>
            <Stack
                sx={{ pt: 20, pb: 10 }}
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent="space-between"
                alignItems={{ xs: 'center', sm: 'end' }}
                textAlign={{ xs: 'center', sm: 'initial' }}
            >
                <Box color="text.primary" mb={{ xs: 2, sm: 0 }}>
                    <Typography variant="h4" mb={1}>
                        AazibCh
                    </Typography>
                    <Typography>Copyright © 2023</Typography>
                </Box>
                <Box>
                    {socialLinks.map((socialLink) => (
                        <Link
                            key={socialLink.site}
                            mx={1}
                            href={socialLink.link}
                            target="_blank"
                        >
                            {socialLink.site}
                        </Link>
                    ))}
                </Box>
            </Stack>
        </Container>
    );
};

export default Footer;
