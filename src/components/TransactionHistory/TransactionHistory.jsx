import PropTypes from 'prop-types';
import {
  TransactionsHistoryTable,
  TransactionsHistoryThead,
  TransactionsHistoryTbody,
} from './TransactionTable.styled';
import { capitalizeFirstLowercaseRest } from 'utils/capitalizeFirstLowercaseRest';

export const TransactionsTable = ({ items }) => {
  return (
    <TransactionsHistoryTable>
      <TransactionsHistoryThead>
        <>
          <tr>
            <th>{'Type'.toUpperCase()}</th>
            <th>{'Amount'.toUpperCase()}</th>
            <th>{'Currency'.toUpperCase()}</th>
          </tr>
        </>
      </TransactionsHistoryThead>

      {items.map(item => {
        return (
          <TransactionsHistoryTbody key={item.id}>
            <tr>
              <td>{capitalizeFirstLowercaseRest(item.type)}</td>
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
