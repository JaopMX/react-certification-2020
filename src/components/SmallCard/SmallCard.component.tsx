import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './SmallCard.styles';

interface CardProps {
  thumbnailSrc: string;
  title: string;
  subtitle: string;
  idVideo: string;
}

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
