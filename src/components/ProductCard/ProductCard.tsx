import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { ProductCardProps } from './ProductCard.types';
import { useStyles } from './styles';

const ProductCard = ({ product }: ProductCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.productCard}>
      <CardActionArea>
        <CardMedia className={classes.image} image={product.image} title={product.name} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {product.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
