import PropTypes from 'prop-types';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const { amount, text, id } = transaction;
  const sign = amount > 0 ? '+' : '-';

  return (
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {text}{' '}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button className='delete-btn' onClick={() => deleteTransaction(id)}>
        x
      </button>
    </li>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.object.isRequired,
};

export default Transaction;
