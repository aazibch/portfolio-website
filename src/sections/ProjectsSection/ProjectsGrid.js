import { Grid } from '@mui/material';
import Project from './Project';
import ReadsTrackerScreen from './screenshots/readstracker.png';
import SimonScreen from './screenshots/simon.png';
import YumYumScreen from './screenshots/yumyum.png';
import VirtuaVisageScreen from './screenshots/virtuavisage.png';
import CummingsBreitenbergScreen from './screenshots/cummingsbreitenberg.png';
import WebsoftScreen from './screenshots/websoft.png';
import ExpenseTrackerScreen from './screenshots/expensetracker.png';
import ZephyrMessengerScreen from './screenshots/zephyrmessenger.png';
import GreenEatsScreen from './screenshots/greeneats.png';

const projects = [
  {
    title: 'GreenEats',
    tech: ['Next', 'SQLite', 'AWS S3'],
    image: GreenEatsScreen,
    links: {
      demo: 'https://greeneats-demo.netlify.app/',
      repo: 'https://github.com/aazibch/greeneats/'
    }
  },
  {
    title: 'ZephyrMessenger',
    tech: ['React', 'React Router 6', 'Express', 'MongoDB'],
    image: ZephyrMessengerScreen,
    links: {
      demo: 'https://zephyr-messenger.onrender.com/',
      repo: 'https://github.com/aazibch/zephyr-messenger/'
    }
  },
  {
    title: 'VirtuaVisage',
    tech: ['React', 'Express', 'MongoDB'],
    image: VirtuaVisageScreen,
    links: {
      demo: 'https://virtuavisage.onrender.com/',
      repo: 'https://github.com/aazibch/virtuavisage/'
    }
  },
  {
    title: 'Cummings-Breitenberg LLC',
    tech: ['Next'],
    image: CummingsBreitenbergScreen,
    links: {
      demo: 'https://cbllc.netlify.app/'
    }
  },
  {
    title: 'ReadsTracker',
    tech: ['Pug', 'Express', 'MongoDB'],
    image: ReadsTrackerScreen,
    links: {
      demo: 'https://readstracker.onrender.com/',
      repo: 'https://github.com/aazibch/readstracker/'
    }
  },
  {
    title: 'Expense Tracker',
    tech: ['React'],
    image: ExpenseTrackerScreen,
    links: {
      demo: 'https://expense-tracker-production.netlify.app/',
      repo: 'https://github.com/aazibch/expense-tracker/'
    }
  },
  {
    title: 'YumYum',
    tech: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    image: YumYumScreen,
    links: {
      demo: 'https://yumyum-production.netlify.app/',
      repo: 'https://github.com/aazibch/yumyum/'
    }
  },
  {
    title: 'Simon Game',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: SimonScreen,
    links: {
      demo: 'https://simon-production.netlify.app/',
      repo: 'https://github.com/aazibch/simon/'
    }
  },
  {
    title: 'Websoft',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    image: WebsoftScreen,
    links: {
      demo: 'https://websoft.onrender.com/',
      repo: 'https://github.com/aazibch/websoft/'
    }
  }
];

const ProjectsGrid = () => {
  return (
    <Grid container spacing={2}>
      {projects.map((project) => {
        return (
          <Grid key={project.title} item xs={12} sm={6} md={4}>
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
