import React from 'react';
import { useStyles } from './styles';
import { Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import { Product } from 'api/api.types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { toggleProductPreview } from 'redux/ui/ui.slice';

const ProductPreview = () => {
  const classes = useStyles();
  const previewOpen = useSelector<RootState, boolean>((state) => state.ui.productPreviewOpen);
  const product = useSelector<RootState, Product | null>((state) => state.ui.productPreview);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleProductPreview(false));
  };

  return product ? (
    <Dialog open={previewOpen} onClose={handleClose} aria-labelledby='customized-dialog-title'>
      <DialogTitle className={classes.titleContainer}>
        <img className={classes.image} src={product.image} alt='' />
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography gutterBottom variant='body1' component='h2'>
          {product.name}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {product.description}
        </Typography>
      </DialogContent>
    </Dialog>
  ) : null;
};

export default ProductPreview;
