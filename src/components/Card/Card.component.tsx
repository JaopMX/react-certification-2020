import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './Card.styles';

interface CardProps {
  thumbnailSrc: string;
  title: string;
  content: string;
  idVideo: string;
}

const CustomCard = (props: CardProps) => {
  const { thumbnailSrc, title, content, idVideo } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/watch/${idVideo}`}>
          <CardMedia
            component="img"
            alt="thumbnail"
            height="140"
            src={thumbnailSrc}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className={classes.cardTitle}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {content}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
