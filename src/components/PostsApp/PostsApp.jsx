import { useEffect, useState } from "react";
import { getAllPosts, getPostsByQuery } from "./api";
import { PostsList } from "./PostsList";
import { useInView } from "react-intersection-observer";

export const PostsApp = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(5);
  const [skip, setSkip] = useState(0);
  const [searchValue, setSearchVaalue] = useState("");
    const [total, setTotal] = useState(0);
    const [infinity, setInfinity] = useState(false)

  const { ref, inView } = useInView({
    threshold: 1,
    // rootMargin: "0px 100px 0px 0px",
  });
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        console.log(skip, limit);

        const { posts, total } = searchValue
          ? await getPostsByQuery({ skip, q: searchValue, limit })
          : await getAllPosts({ skip: skip, limit });

        setPosts((prev) => [...prev, ...posts]);
        setTotal(total);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [limit, searchValue, skip]);

  useEffect(() => {
      infinity && setSkip((prev) => prev + limit);
      console.log(infinity);
  }, [inView, infinity, limit]);
    
  const handleSkip = () => {
    setSkip((prev) => prev + limit);
  };

  return (
    <div>
      {loading && <p>Loading ...</p>}

          {posts.length ? <PostsList posts={posts} /> : null}
          <button onClick={()=>setInfinity(prev=>!prev)}>Infinity</button>
      <div ref={ref}>
        <button onClick={handleSkip}>Load more ...</button>
      </div>
    </div>
  );
};
