import styles from "./Table.module.css";
import TableRow from "./TableRow";

const Table = (props) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <TableRow data={props.data} />
      </tbody>
    </table>
  );
};

export default Table;
