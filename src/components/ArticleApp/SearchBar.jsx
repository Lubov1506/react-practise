import s from './ArticleApp.module.css';

export const SearchBar = ({setSearchStr}) => {
  return (
      <div className={s.searchBar}>
          <input className={s.input} type="search" placeholder='Enter search value...' onChange={e=>setSearchStr(e.target.value)}/>
    </div>
  )
}
