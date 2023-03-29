import React from 'react';
import './GalleryItem.css';

const GalleryItem = ({item, onView}) => {
    const {image, title, id, desc} = item
    return (
        <option 
          value={title} 
          data-icon={image}
          alt={title}
          onClick={()=>onView(id)}
        >
          {desc}
        </option>
    );
};

export default GalleryItem;