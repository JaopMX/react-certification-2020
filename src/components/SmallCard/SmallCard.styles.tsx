import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginBottom: '0.5rem',
  },
  details: {
    display: 'flex',
    color: 'black',
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 8,
  },
  cover: {
    width: 140,
  },
});

export default useStyles;
