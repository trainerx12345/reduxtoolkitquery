import React, { useTransition } from 'react';
import { useSelector } from "react-redux";
import { useFetchAllPostsQuery,selectPostIds,selectAllPosts,selectPostById,selectAllData,selectAllTotal } from '../features/post/postApi';
import PostCard from '../components/PostCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
const HomePage = () => {
  // get the data from the redux toolkit query object

  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useFetchAllPostsQuery() || {};

  const orderedPostIds = useSelector(selectPostIds)
  const allPosts = useSelector(selectAllPosts)
  const entities = useSelector(selectAllData)
  const total = useSelector(selectAllTotal)

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    const errorContext = {
      title: 'Error',
      message: error.message,
    };
    return <Error error={errorContext} />;
  }
  const Refresh = () => {
    refetch();
  };

  console.log(orderedPostIds)
  console.log(allPosts)
  console.log(entities)
  console.log(total)
  return (
    <>
      <button type="button" onClick={Refresh}>
        Refresh
      </button>
      <Link to="/addPost" className='m-3'>Add Post</Link>
      <Link to="/comment" className='m-3'>Comment</Link>
      <div className="max-w[1440px] mx-auto bg-white">
        {/* <Header /> */}
        {/* <div className="container mx-auto text-cemter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center px-3 py-4 dark:bg-white">
          {posts?.length > 0 &&
            posts?.map((post) => {
              return <PostCard key={post?.id} post={post} />;
            })}
        </div> */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default HomePage;
