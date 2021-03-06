import React from "react";
import "./style.css";

function FriendCard({ name, image, ...props }) {
  console.log(props)
  return (
      // render through each picture
      <img src={image} alt={name} {...props} className="img-thumbnail"></img>
  );
}

export default FriendCard;