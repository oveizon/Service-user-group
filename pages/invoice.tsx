import React from "react";
import invoice from "@/styles/Invoice.module.scss";
import Navbar from "@/components/Navbar";

interface ServiceRend {
  [key: string]: string;
}

const ServiceRend = () => {
  const serviceRend: ServiceRend[] = [
    {
      service: "Plowing",
      description:
        "This added functionality provides the service providerwith easy acces to view",
      quantity: "2",
      unitPrice: "GHS 150",
      total: "GHS 300",
      id: "1",
    },
    {
      service: "Plowing",
      description:
        "This added functionality provides the service providerwith easy acces to view",
      quantity: "2",
      unitPrice: "GHS 150",
      total: "GHS 300",
      id: "2",
    },
    {
      service: "Plowing",
      description:
        "This added functionality provides the service providerwith easy acces to view",
      quantity: "2",
      unitPrice: "GHS 150",
      total: "GHS 300",
      id: "3",
    },
  ];

  return (
    <div className={invoice.invoice}>
      <Navbar />

      <div className={invoice.boderline}>
        <div className={invoice.spreadmain}>
          <div className={invoice.up}>
            <h1>CubeSeed</h1>
            <br></br>
            <br></br>
            <h3>RECEPIENT</h3>
            <p className={invoice.name}>Justina Ifeoma</p>
            <p>1901 Cape Coast, Ghana</p>
          </div>
          <div className={invoice.spreadmini}>
            <div>
              <p className={invoice.highlight}>INVOICE #12345</p>
              <p>Issued</p>
              <p>Due</p>
              <p>PO</p>
              <p className={invoice.highlight}>Total</p>
            </div>
            <div>
              <p className={invoice.highlight}>.</p>
              <p>Not seen yet</p>
              <p>Feb 26, 2023</p>
              <p>1.0M</p>
              <p className={invoice.highlight}>GHS131.25</p>
            </div>
          </div>
        </div>

        <h3>For Service Rendered</h3>
        <div className={invoice.headers}>
          <div>
            <p>SERVICE</p>
            <p>DESCRIPTION</p>
            <p>QTY</p>
            <p>UNIT PRICE</p>
            <p>TOTAL</p>
          </div>

          <div>
            {serviceRend.map((rend) => {
              return (
                <>
                  <div>
                    <p key={rend.id}>{rend.service}</p>
                    <p>{rend.description}</p>
                    <p>{rend.quantity}</p>
                    <p>{rend.unitPrice}</p>
                    <p>{rend.total}</p>
                  </div>
                  <hr />
                </>
              );
            })}
          </div>
        </div>

        <div className={invoice.spreadmain}>
          <div>
            <p>
              Cubeseed provides a secure platform for transactions<br></br>
              which helps to build a more stable and sustainab<br></br>
              business.
            </p>
          </div>
          <div className={invoice.spread}>
            <div>
              <p>Subtotal</p>
              <hr />
              <p>GST(5.0%)</p>
              <hr />
              <p>Total</p>
              <hr />
              <p>Account Balance</p>
              <hr />
            </div>
            <div>
              <p>GHS131.25</p>
              <hr />
              <p>GHS0.25</p>
              <hr />
              <p>GHS631.25</p>
              <hr />
              <p>GHS131.25</p>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className={invoice.link}>
        <a href="#">
          See All <img src="/forward.png" alt="see all" />{" "}
        </a>
      </div>
    </div>
  );
};
export default ServiceRend;
