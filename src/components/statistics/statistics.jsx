import PropTypes from 'prop-types';
import style from './statistics.module.css';

export const  Statistics = ({title, stats}) =>{
    return(
        <section className={style.statistics}>
  {title && <h2 className={style.title}>{title}</h2>}

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


// якщо масив не буде змінюватись, та точно знаю структуру обєктів у масиві
  // stats: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     followers: PropTypes.number.isRequired,
  //     views: PropTypes.number.isRequired,
  //     likes: PropTypes.number.isRequired,
  //   })
  // ),
