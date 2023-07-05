import PropTypes from 'prop-types';
import style from './transaction.module.css';

export const TransactionHistory = ({items}) => {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr>
          <th className={style.title}>Type</th>
          <th className={style.title}>Amount</th>
          <th className={style.title}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className={style.transactionRow}>
            <td className={style.type}>{item.type}</td>
            <td className={style.amount}>{item.amount}</td>
            <td className={style.currency}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};


