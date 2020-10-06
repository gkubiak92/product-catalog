import React from 'react';
import { useStyles } from './styles';
import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@material-ui/core';
import { Product } from 'api/api.types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { toggleProductPreview } from 'redux/ui/ui.slice';
import CloseIcon from '@material-ui/icons/Close';

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
      <DialogTitle disableTypography className={classes.titleContainer}>
        <img className={classes.image} src={product.image} alt='' />
        <IconButton aria-label='close' className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography className={classes.productTitle} gutterBottom variant='body1' component='h2'>
          {product.name}
        </Typography>
        <Typography
          className={classes.productDesc}
          variant='body2'
          color='textSecondary'
          component='p'
        >
          {product.description}
        </Typography>
      </DialogContent>
    </Dialog>
  ) : null;
};

export default ProductPreview;
