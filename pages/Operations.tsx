import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Tables from "@/styles/Operations.module.scss";

interface Ops {
  [key: string]: any;
}



type PropObj = {
  key: string;
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
  col7src: string;
};

type Props = {
  column1: string;
  column2: string;
  column3: string;
  column4: string;
  column5: string;
  column6: string;
  column7: string;
};

 const TableHeaders: React.FC<Props> = (props) => {
  return (
    <div className={Tables.headerOps}>
      <p>{props.column1}</p>
      <p>{props.column2}</p>
      <p>{props.column3}</p>
      <p>{props.column4}</p>
      <p>{props.column5}</p>
      <p>{props.column6}</p>
      <p>{props.column7}</p>
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
  col6,
  col7src,
}) => {
  return (
    <>
      {" "}
      <div className={Tables.rowOps}>
        <div>
          <p key={key}>{col1}</p>
          <p>{col2}</p>
          <p>{col3}</p>
          <p>{col4}</p>
          <p>{col5}</p>
          <p>{col6}</p>
          <p>
            <img src={col7src} alt="tick" />
          </p>
        </div>
        
      </div>
    </>
  );
};


const Operations = () => {
  const ops: Ops[] = [
    {
      invoice: "12009",
      date: "20/04/23",
      client: "jk",
      duedate: "20/05/23",
      status: "paid",
      amount: "$123.45",
      reminder: "",
      id: 1,
    },
    {
      invoice: "12009",
      date: "20/04/23",
      client: "jk",
      duedate: "20/05/23",
      status: "paid",
      amount: "$123.45",
      reminder: "",
      id: 2,
    },
    {
      invoice: "12009",
      date: "20/04/23",
      client: "jk",
      duedate: "20/05/23",
      status: "paid",
      amount: "$123.45",
      reminder: "",
      id: 3,
    },
    {
      invoice: "12009",
      date: "20/04/23",
      client: "jk",
      duedate: "20/05/23",
      status: "paid",
      amount: "$123.45",
      reminder: "",
      id: 4,
    },
    
  ];

  return (
    <div className= {Tables.body}> 
      <Navbar />
      <div className= {Tables.mainbody}>
      <div>
        <div className= {Tables.topmost}>
         <h3>Operations &gt; Reminders</h3>
         <div className= {Tables.topbox}> 
          <img src="/green.png" alt="green" />
          <p>Paid</p>
          <img src="/yellow.png" alt="yellow" />
          <p>Activated</p>
          <img src="/red.png" alt="red" />
          <p>unpaid</p>
         </div>
        </div>
        
        <div>
          <TableHeaders
            column1="Invoice"
            column2="Date"
            column3="Client"
            column4="Due Date"
            column5="Status"
            column6="Amount"
            column7="Reminder"
          />

          <>
            {ops.map((rend) => {
              return (
                <>
                  <Table
                    key={rend.id}
                    col1={rend.invoice}
                    col2={rend.date}
                    col3={rend.client}
                    col4={rend.duedate}
                    col5={rend.status}
                    col6={rend.amount}
                    col7src={rend.reminder}
                  />
                </>
              );
            })}
          </>
        </div>

      </div>
      <button type="submit" className= {Tables.button}><span className= {Tables.span}>Set Reminder</span></button>
      </div>
      <Footer />
    </div>
  );
};
export default Operations;
