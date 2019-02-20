import React from 'react';
import _ from 'lodash';

const ImageList = (props) => {

    const images = _.map(props.images,(image) => {

        return <img src = {image.urls.regular} alt="car"/>

    });

    console.log(props.images);
    return <div> {images} </div>;
};

export default ImageList;