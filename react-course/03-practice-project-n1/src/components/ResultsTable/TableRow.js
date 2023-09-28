const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const TableRow = (props) => {
  return (
    <>
      {props.data.map((row) => (
        <tr key={row.year}>
          <td>{row.year}</td>
          <td>{formatter.format(row.savingsEndOfYear)}</td>
          <td>{formatter.format(row.yearlyInterest)}</td>
          <td>
            {formatter.format(
              row.savingsEndOfYear -
                row.initial -
                row.yearlyContribution * row.year
            )}
          </td>
          <td>
            {formatter.format(row.initial + row.yearlyContribution * row.year)}
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableRow;
