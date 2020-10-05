import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { Product } from 'api/api.types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setProductPreview, toggleProductPreview } from 'redux/ui/ui.slice';
import PromoBadge from './components/PromoBadge/PromoBadge';
import { ProductCardProps } from './ProductCard.types';
import { useStyles } from './styles';

const ProductCard = ({ product }: ProductCardProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleCardClick = (p: Product) => {
    dispatch(setProductPreview(p));
    dispatch(toggleProductPreview(true));
  };

  return (
    <Card className={classes.productCard}>
      {product.promo ? <PromoBadge /> : null}
      <CardActionArea onClick={() => handleCardClick(product)}>
        <CardMedia className={classes.image} image={product.image} title={product.name} />
        <CardContent className={classes.productCardContent}>
          <Typography gutterBottom variant='body1' component='h2'>
            {product.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {product.description}
          </Typography>
          <Rating className={classes.rating} value={product.rating} readOnly size='small' />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          color='primary'
          variant='contained'
          onClick={() => handleCardClick(product)}
          fullWidth
          disabled={!product.active}
        >
          {product.active ? 'Show details' : 'Unavailable'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
