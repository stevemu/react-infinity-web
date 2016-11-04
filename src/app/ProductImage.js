import React, { Component } from 'react';
import { UPLOADS_URL } from './util/urls';
import { Image } from 'react-bootstrap';

const ProductImage = props => {
  let imgPath = `${UPLOADS_URL}${props.fileName}`;

  return (
    <Image className={props.className} src={imgPath} responsive rounded/>
  )

};

ProductImage.propTypes = {
  fileName: React.PropTypes.string
};


export default ProductImage;