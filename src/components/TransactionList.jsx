const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul id='list' classname='list'>
        <li classname='minus'>
          Cash <span>-$400</span>
          <button classname='delete-btn'>x</button>
        </li>
      </ul>
    </>
  );
};

export default TransactionList;
