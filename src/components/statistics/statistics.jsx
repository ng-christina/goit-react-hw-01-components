import PropTypes from 'prop-types';
import style from './statistics.module.css';

export function Statistics({title, stats}){
    return(
        <section className={style.statistics}>
          {title.length > 0 && (
  <h2 className={style.title}>{title}</h2>)}

  <ul className={style.statlist} >
    {stats.map(({ id, label, percentage})=>(
    <li className={style.item}
    key = {id}
    style={{background: getRandomHexColor()}}>
      <span className={style.label}>.{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>
    ))}
  </ul>
</section>
    )
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired,

}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }