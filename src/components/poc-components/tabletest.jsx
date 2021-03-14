import React from "react";
import TableBody from "./tablebody";
import TableHeader from "./tableheader";

const Table = props => {
  const { headers, rows } = props;
  return (
    <div>
      <table className="table table-bordered table-hover">
        <TableHeader headers={headers} />
        <TableBody headers={headers} rows={rows} />
      </table>
    </div>
  );
};

export default Table;