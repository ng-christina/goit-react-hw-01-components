import PropTypes from 'prop-types';
import style from './statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={style.item}
            key={id}
            style={{ background: getRandomVioletColor() }}
          >
            <span className={style.label}>.{label}</span>
            <span className={style.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  )
};

function getRandomVioletColor() {
  const shades = ['#853690', '#9a00af', '#db69eb', '#be66f1', '#9819e1'];
  const randomIndex = Math.floor(Math.random() * shades.length);
  const color = shades[randomIndex];
  return color;
}

// якщо масив не буде змінюватись, та точно знаю структуру обєктів у масиві

