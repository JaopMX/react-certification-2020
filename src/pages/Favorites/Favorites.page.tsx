import React from 'react';
import { Grid } from '@material-ui/core';
import CustomCard from '../../components/Card';
import { getFavoritesArray } from '../../services/favoriteService';

const FavoritesPage = () => {
  const favorites = getFavoritesArray();

  return (
    <Grid container>
      {favorites &&
        favorites.map((favorite: any) => {
          return (
            <CustomCard
              key={favorite.id}
              idVideo={favorite.id}
              title={favorite.title}
              thumbnailSrc={favorite.thumbnail}
            />
          );
        })}
    </Grid>
  );
};

export default FavoritesPage;
