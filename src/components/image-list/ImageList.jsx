import React from 'react';

import _ from 'lodash';

import ImageCard from '../image-card/ImageCard';
import './ImageList.css';


const ImageList = (props) => {

    const images = _.map(props.images,(image) => {

        return <ImageCard key={image.id} image={image}/>;

    });

    return <div className="image-list"> {images} </div>;
};

export default ImageList;