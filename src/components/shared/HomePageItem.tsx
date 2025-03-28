import { Models } from "appwrite";

import PostCard from "./PostCard";

type HomePostList = {
  posts: Models.Document[];
};

const HomePageItem = ({
  posts,
}: HomePostList) => {

  return (
    <div className="flex flex-col flex-1 gap-9 w-full ">
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};

export default HomePageItem;
