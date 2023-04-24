import React from "react";
import style from "@/styles/Certificate.module.scss";

const Views = () => {
  return (
    <div>
      <div>
        <h1 className={style.tic}>CERTIFICATE OF COMPLETION</h1>
        <img src="/logo.png" alt="logo"></img>
      </div>
      <section>
        <div>
          <h3 className={style.tic}>OWNER INFORMATION</h3>
          <h4 className={style.tics}>Justina Ifeoma</h4>
          <p>1901 Cape Coast, Ghana</p>
          <p>Phone Number: +2348123456789</p>
          <p>Email: justina@gmail.com</p>
        </div>
        <div>
          <h3 className={style.tic}>CONTRACTOR INFORMATION</h3>
          <h4 className={style.tics}>Farmer Tochi</h4>
          <p>1901 Cape Coast, Ghana</p>
          <p>Phone Number: +2348123456789</p>
          <p>Email: justina@gmail.com</p>
        </div>
      </section>
      <section>
        <div>
          <h3 className={style.tic}>PROJECT NAME</h3>
          <h4 className={style.tics}>Plowing</h4>
          <p>Phone Number: +2348123456789</p>
          <p>Email: justina@gmail.com</p>
        </div>
        <div>
          <h3 className={style.tic}>PROJECT DESCRIPTION</h3>
          <p>Turning over of the soil</p>
        </div>
      </section>
      <section>
        <h2 className={style.tic}>CERTIFICATION</h2>
        <p>
          I hearby affirm, to the best of my knowledge and belief, based on
          inspections, observation,<br></br>
          testing of the plowin and upon reporrts submitted by others, that this
          [Project Nmae] is<br></br>
          substantially complete and operable. The [Project Name] was completed
          in accordance with the<br></br>
          department's issued [Detail] permits.
        </p>
        <div>
          <p>Signed by</p>
          <hr />
          <p>Date</p>
          <hr />
        </div>
        <div>
          <p>Project Acceptance</p>
          <hr />
          <p>Date</p>
          <hr />
        </div>
      </section>
    </div>
  );
};
export default Views;
