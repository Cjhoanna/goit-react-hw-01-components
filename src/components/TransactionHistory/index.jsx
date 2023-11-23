import {
  TableTitle,
  TransactionsHistory,
  DataTable,
} from './TransactionHistory.styles';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionsHistory class="transaction-history">
      <thead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <tr
            key={item.id}
            style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#ecf1f3' }}
          >
            <DataTable>{item.type}</DataTable>
            <DataTable>{item.amount}</DataTable>
            <DataTable>{item.currency}</DataTable>
          </tr>
        ))}
      </tbody>
    </TransactionsHistory>
  );
};

export default TransactionHistory;
