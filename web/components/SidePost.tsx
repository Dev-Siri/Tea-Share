import React, { FC } from 'react';
import Image from 'next/image';

import type { PostProps } from "../types";

const SidePost: FC<PostProps> = ({ post }) => {
  const { title, image } = post;
  
  return (
    <div className="side-post">
      <div>
        <Image
          src={image}
          alt={title}
          height={250}
          width={250}
          style={{ borderRadius: '10px' }}
        />
      </div>
      <div className='side-post__title-container'>
        <h3 className="side-post__title-container_text">{title}</h3>
      </div>
    </div>
  );
}

export default SidePost;