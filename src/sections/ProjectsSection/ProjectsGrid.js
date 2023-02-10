import { Grid } from '@mui/material';
import Project from './Project';
import MyNotesScreen from './screenshots/mynotes.png';
import JokeSlidesScreen from './screenshots/jokeslides.png';
import ReadsTrackerScreen from './screenshots/readstracker.png';
import PoemPadScreen from './screenshots/poempad.png';
import SimonScreen from './screenshots/simon.png';
import PomodoroScreen from './screenshots/pomodoroclock.png';

const projects = [
    {
        title: 'MyNotes',
        tech: ['React', 'Firebase'],
        image: MyNotesScreen,
        links: {
            demo: 'https://aazibch.github.io/mynotes/',
            repo: 'https://github.com/aazibch/mynotes'
        }
    },
    {
        title: 'JokeSlides',
        tech: ['React', 'Express', 'MongoDB'],
        image: JokeSlidesScreen,
        links: {
            demo: 'https://jokeslides.up.railway.app/',
            repo: 'https://github.com/aazibch/jokeslides'
        }
    },
    {
        title: 'ReadsTracker',
        tech: ['Pug', 'Express', 'MongoDB'],
        image: ReadsTrackerScreen,
        links: {
            demo: 'https://readstracker.up.railway.app/',
            repo: 'https://github.com/aazibch/readstracker'
        }
    },
    {
        title: 'PoemPad',
        tech: ['HTML', 'SCSS', 'JavaScript', 'Webpack'],
        image: PoemPadScreen,
        links: {
            demo: 'https://poempad.netlify.app/',
            repo: 'https://github.com/aazibch/poempad'
        }
    },
    {
        title: 'Simon Game',
        tech: ['HTML', 'CSS', 'JavaScript'],
        image: SimonScreen,
        links: {
            demo: 'https://simon-production.netlify.app/',
            repo: 'https://github.com/aazibch/simon'
        }
    },
    {
        title: 'Pomodoro Clock',
        tech: ['HTML', 'CSS', 'JavaScript'],
        image: PomodoroScreen,
        links: {
            demo: 'https://pomodoro-production.netlify.app/',
            repo: 'https://github.com/aazibch/pomodoro-clock'
        }
    }
];

const ProjectsGrid = () => {
    return (
        <Grid container spacing={2}>
            {projects.map((project) => {
                return (
                    <Grid item xs={12} sm={6} md={4}>
                        <Project
                            title={project.title}
                            tech={project.tech}
                            image={project.image}
                            links={project.links}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default ProjectsGrid;
