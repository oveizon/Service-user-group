import React from "react";
import Tables from "@/styles/Table.module.scss";

type PropObj = {
  key: string;
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  src: string;
};

type Props = {
  column1: string;
  column2: string;
  column3: string;
  column4: string;
  column5: string;
};

export const TableHeaders: React.FC<Props> = (props) => {
  return (
    <div className={Tables.headers}>
      <p>{props.column1}</p>
      <p>{props.column2}</p>
      <p>{props.column3}</p>
      <p>{props.column4}</p>
      <p>{props.column5}</p>
    </div>
  );
};

const Table: React.FC<PropObj> = ({
  key,
  col1,
  col2,
  col3,
  col4,
  col5,
  src,
}) => {
  return (
    <>
      {" "}
      <div className={Tables.rows}>
        <div>
          <p key={key}>{col1}</p>
          <p>{col2}</p>
          <p>{col3}</p>
          <p>{col4}</p>
          <p>
            {col5} {src == "" ? "" : <img src={src} alt="down arrow" />}
          </p>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Table;
