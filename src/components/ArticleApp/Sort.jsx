import s from './ArticleApp.module.css';
export const Sort = ({setSortType}) => {
  const typesOfSort = ['newest', 'oldest', 'a-z', 'z-a']
  return (
    <div>
      <select className={s.input} onChange={e => setSortType(e.target.value)}>
        <option >default sorting</option>
      {typesOfSort.map(type => {
        return <option key={type} value={type}>{type}</option>
      })}</select>
    </div>
  )
}
