import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';

const Project = (props) => (
  <Card sx={{ width: '100%' }} elevation={2}>
    <CardMedia
      component="img"
      height="200"
      image={props.image}
      alt="Project screen"
      sx={{
        borderBottomStyle: 'solid',
        borderColor: 'divider',
        borderWidth: '1px'
      }}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {props.title}
      </Typography>
      <Typography color="text.secondary">{props.tech.join(' · ')}</Typography>
    </CardContent>
    <CardActions>
      <Button
        component="a"
        href={props.links.demo}
        target="_blank"
        size="small"
      >
        Demo
      </Button>
      {props.links.repo && (
        <Button
          component="a"
          href={props.links.repo}
          target="_blank"
          size="small"
        >
          Repository
        </Button>
      )}
    </CardActions>
  </Card>
);

export default Project;
