import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    username: {
      marginLeft: theme.spacing(1),
    },
    inputRoot: {
      color: 'inherit',
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    menuLink: {
      color: 'black',
      fontWeight: 'normal',
    },
  })
);

export default useStyles;
