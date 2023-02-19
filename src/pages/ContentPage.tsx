import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import getRequest from '../api/getRequest';
import { PostsProps, Root } from '../types/interfaces';
import SinglePostData from '../types/types';
import { Button } from 'flowbite-react';

const ContentPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<SinglePostData>({
    body: '',
    title: '',
    id: '',
    userId: '',
  });

  useEffect(() => {
    const getData = getRequest(`https://jsonplaceholder.typicode.com/posts/${id}`);
    getData.then((data) => setData(data)).catch((err) => console.log(err));
  }, []);

  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex  justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Link className='testClick ' to={`/`}>
            <Button className='mb-5 '>
              <svg
                className='ml-2 mr-1 h-4 w-4 rotate-180'
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
              Back
            </Button>
          </Link>
          <header className='mb-4 lg:mb-6 not-format'>
            <h1 className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'>
              {data.title}
            </h1>
          </header>
          <p className='lead'>{data.body}</p>
        </article>
      </div>
    </main>
  );
};

export default ContentPage;
