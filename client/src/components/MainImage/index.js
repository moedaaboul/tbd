import React from 'react';

const MainImage = ({ item, index }) => {
  return (
    <div>
      <img src={item[index]} padding="25px" width="100%" alt="main product"></img>
    </div>
  );
};

export default MainImage;
