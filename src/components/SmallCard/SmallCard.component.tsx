import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

interface CardProps {
  thumbnailSrc: string;
  title: string;
  subtitle: string;
  idVideo: string;
}

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

const SmallCard = (props: CardProps) => {
  const { thumbnailSrc, title, subtitle, idVideo } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/watch/${idVideo}`}>
          <div className={classes.details}>
            <CardMedia
              component="img"
              alt="thumbnail"
              className={classes.cover}
              src={thumbnailSrc}
              title={title}
            />
            <CardContent className={classes.content}>
              <Typography variant="subtitle2" component="span">
                {title}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {subtitle}
              </Typography>
            </CardContent>
          </div>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default SmallCard;
