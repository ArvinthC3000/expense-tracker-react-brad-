import PropTypes from 'prop-types';

const Transaction = ({ transaction }) => {
  return (
    <li className='minus'>
      {transaction.text} <span>{transaction.amount}</span>
      <button className='delete-btn'>x</button>
    </li>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.object.isRequired,
};

export default Transaction;
