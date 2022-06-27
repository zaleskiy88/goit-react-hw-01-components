import PropTypes from 'prop-types';
import {
  TransactionsHistoryTable,
  TransactionsHistoryThead,
  TransactionsHistoryTbody,
} from './TransactionTable.styled';

export const TransactionsTable = ({ items }) => {
  return (
    <TransactionsHistoryTable>
      <TransactionsHistoryThead>
        <>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </>
      </TransactionsHistoryThead>

      {items.map(item => {
        // const { id, type, amount, currency } = item;
        return (
          <TransactionsHistoryTbody key={item.id}>
            <tr>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          </TransactionsHistoryTbody>
        );
      })}
    </TransactionsHistoryTable>
  );
};

TransactionsTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
