import React, { FC } from 'react';
import { Card, Button } from 'flowbite-react';

import { PostsProps, Root } from '../types/interfaces';

import { Link, useParams } from 'react-router-dom';

const PostsCard: FC<PostsProps> = ({ title, userId, body, id }: PostsProps) => {
  return (
    <Card className='testCount'>
      <h5 className='text-2xl  line-clamp-1 font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h5>
      <p className='font-normal line-clamp-3 text-gray-700 dark:text-gray-400'>{body}</p>
      <Link className='testClick' to={`/content/${id}`}>
        <Button>
          Read more
          <svg
            className='ml-2 -mr-1 h-4 w-4'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </Button>
      </Link>
    </Card>
  );
};

export default PostsCard;
