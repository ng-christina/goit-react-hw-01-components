import PropTypes from 'prop-types';
import style from './transaction.module.css'
import transactions from 'info/transactions.json'

export const TransactionHistory = () =>{
    return(
        <table className={style.transactionHistory}>
  <thead>
    <tr>
      <th className={style.title}>Type</th>
      <th className={style.title}>Amount</th>
      <th className={style.title}>Currency</th>
    </tr>
  </thead>
  <tbody>
    {transactions.map((transaction)=>(
    <tr key={transaction.id} className={style.transactionRow}>
      <td className={style.type}>{transaction.type}</td>
      <td className={style.amount}>{transaction.amount}</td>
      <td className={style.currency}>{transaction.currency}</td>
    </tr>
    ))}
  </tbody>
</table>
    )
    
}


TransactionHistory.propTypes={
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string
}

