import React, { Component } from 'react';
import { UPLOADS_URL } from './util/urls';

const ProductImage = props => {
  let imgPath = `${UPLOADS_URL}${props.fileName}`;

  return (
    <img className={props.className} src={imgPath} />
  )

};

ProductImage.propTypes = {
  fileName: React.PropTypes.string
};


export default ProductImage;