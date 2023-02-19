import { useState, useEffect } from 'react';
import getRequest from '../api/getRequest';
import PostsCard from '../components/PostsCard';
import { Root, PostsProps } from '../types/interfaces';

function HomePage() {
  const [data, setData] = useState<PostsProps[]>([]);

  useEffect(() => {
    const getData = getRequest('https://jsonplaceholder.typicode.com/posts');
    getData.then((data) => setData(data)).catch((err) => console.log(err));
  }, []);

  return (
    <div className='h-full p-5   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-evenly gap-2  lg:gap-x-6 lg:gap-y-10 lg:px-20    px-6 md:px-10'>
      {data.length > 0
        ? data.map((items, key) => (
            <>
              <PostsCard key={items.id} title={items.title} body={items.body} id={items.id} />
            </>
          ))
        : null}
    </div>
  );
}

export default HomePage;
