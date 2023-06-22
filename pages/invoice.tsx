import React from "react";
import invoice from "@/styles/Invoice.module.scss";
import Navbar from "@/components/Navbar";
//import Table, { TableHeaders } from "@/components/Table";
import Footer from "@/components/Footer";



interface ServiceRend {
  [key: string|number]: any;
}

const ServiceRend = () => {
  const serviceRend: ServiceRend[] = [
    {
      service: "Plowing",
      description:"$0.00",
      quantity: "2kg",
      unitPrice: "00.00%",
      total: "$00.00",
      id: 1,
    },
    {
      service: "Plowing",
      description:"$0.00",
      quantity: "2kg",
      unitPrice: "00.00%",
      total: "$00.00",
      id: 2,
    },
    {
      service: "Plowing",
      description:"$0.00",
      quantity: "2kg",
      unitPrice: "00.00%",
      total: "$00.00",
      id: 3,
    },
    
    
  ];

  return (
    <div className={invoice.invoice}>
      <Navbar />

      <div className={invoice.whole}>
        <h2>Invoice #0000001</h2>
        <br></br>
        <h3>05 May 2023</h3>
        <br></br>
        <div className={invoice.top}>
          <div className={invoice.topleft}>
            <p>From</p>
            <h3>Farm Name</h3>
            <p>Address 123</p>
            <p>City 123456</p>
            <p>State</p>
            <p>Country</p>
          </div>
          <div className={invoice.topright}>
            <p>Bill to </p>
            <h3>Name/Company</h3>
            <p>Address 123</p>
            <p>City 123456</p>
            <p>State</p>
            <p>Country</p>
          </div>
        </div>

        <div>
           

            <div className={invoice.headers}>
              <h2>Description</h2>
              <h2>Rate</h2>
              <h2>Qty</h2>
              <h2>Tax</h2>
              <h2>Amount</h2>
            </div>

          <div className={invoice.rowbody}>
          {serviceRend.map((rend) => {
              return (
                <div className={invoice.rows}>
                    <p key={rend.id}>{rend.service}</p>
                    <p>{rend.description}</p> 
                    <p>{rend.quantity}</p>
                    <p>{rend.unitPrice}</p>
                    <p>{rend.total}</p>
                </div>
              )
            })}
          </div>
            
        </div>

        <div className={invoice.due}>
            <h2>
              Balance Due
            </h2>
            <h2>$0.0000</h2>
        </div>
        <div className={invoice.spread}>
            <button className={invoice.cancel}>Cancel</button>
            <button className={invoice.cert}>Job Certificate</button>

          </div>
          <p className={invoice.pdf}>Download PDF</p>
          
      </div>

      <Footer />
    </div>
  );
};
export default ServiceRend;
