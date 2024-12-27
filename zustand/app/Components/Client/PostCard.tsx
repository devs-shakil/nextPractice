'use client';

import { ReactNode } from 'react';

interface PostCardProps {
  children: ReactNode;
  postId: number;
}

export const PostCard = ({ children, postId }: PostCardProps) => {
  return (
    <div className="w-6/12  border  p-4">
      {children}
      <button className='border bg-green-700 px-6 py-2 my-3' onClick={() => console.log('You like post ID: ' + postId)}>
        Like
      </button>
    </div>
  );
};
