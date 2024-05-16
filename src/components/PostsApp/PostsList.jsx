import s from './PostsApp.module.css'
import { Post } from "./Post"

export const PostsList = ({ posts }) => {
    console.log(posts);
  return (
      <ul className={s.list}>
          {posts.map(item => {
              return <Post key={item.id} item={ item} />
          })}
    </ul>
  )
}
