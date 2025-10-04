import { useGetPosts, useGetUsers } from "@/lib/react-query/queriesAndMutations";
import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import HomePageItem from "@/components/shared/HomePageItem";

const Home = () => {
  // const {
  //   data: posts,
  //   isLoading: isPostLoading,
  //   isError: isErrorPosts,
  // } = useGetRecentPosts();

  const { data: posts, fetchNextPage, hasNextPage } = useGetPosts();
  const { ref, inView } = useInView()
  const shouldShowPosts = posts?.pages.every((item) => item?.documents.length === 0);

  const {
    data: creators,
    isPending: isUserLoading,
    isError: isErrorCreators,
  } = useGetUsers(10);

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])


  if (isErrorCreators) {
    return (
      <div className="flex flex-1">
        <div className="home-container">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
        <div className="home-creators">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
      </div>
    );
  }
  if (!posts)
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );

  console.log('logging herererer', posts)

  return (

    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {shouldShowPosts ? (<p className="text-light-4 mt-10 text-center w-full">End of posts</p>) :
            (
              posts.pages.map((item) => (
                <HomePageItem posts={item?.documents} />
              ))
            )}
        </div>
      </div>

      <div className="home-creators">
        <h3 className="h3-bold text-light-1">Top Creators</h3>
        {isUserLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="grid 2xl:grid-cols-2 gap-6">
            {creators?.documents.map((creator) => (
              <li key={creator?.$id}>
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>

      {hasNextPage && (
        <div ref={ref} className="mt-10">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Home;
