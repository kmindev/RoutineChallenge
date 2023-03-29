import React from "react";
import GalleryItem from './GalleryItem';
import './GalleryList.css';


const GalleryList = ({datas, currItem, onView}) => {
  const {image, title} = currItem;

  return (
    <div className="view">
      <img className="viewImg" src={process.env.PUBLIC_URL + image} alt={title}/>
      <div class="selectBox">
        <select name="image">
          {
            datas.map(item => 
            <GalleryItem key={item.id} item={item} onView={onView}/>)
          }
        </select>
        <span class="icoArrow"><img src={process.env.PUBLIC_URL + "/image/creteChallenge/arrow.png"} alt="icon" /></span>
      </div>
    </div>
  );
};

export default GalleryList;