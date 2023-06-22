import React from "react";
import styles from "@/styles/Home.module.scss";
import variables from "@/styles/Home.module.scss"
import Navbar from "@/components/Navbar";

/*interface Activities {
  [key: string]: any;
}*/
const Overview = () => {
  /*const activities: Activities[] = [ 
    {
      src: "/agriculture.png",
      alt: "Training",
      activity: "New service request from Farm X for Plowing service",
      name: "Training",
      id: 1,
    },
    {
      src: "/research.png",
      alt: "Research",
      activity: "New service request from Farm X for Plowing service",
      name: "Research Institute",
      id: 2,
    },
    {
      src: "/design_services.png",
      alt: "Equipments",
      activity: "New service request from Farm X for Plowing service",
      name: "Equipment Rentals",
      id: 3,
    },
    {
      src: "/avatar.png",
      alt: "Consultation",
      activity: "New service request from Farm X for Plowing service",
      name: "Consultation",
      id: 4,
    },
    {
      src: "/vet.png",
      alt: "Doctor",
      activity: "New service request from Farm X for Plowing service",
      name: "Vet Doctor",
      id: 5,
    },

    {
      src: "/agriculture.png",
      alt: "Logistics",
      activity: "New service request from Farm X for Plowing service",
      name: "Logistics",
      id: 6,
    }, 
  ];*/

  return (
    <div className={styles.mainbody}>
      <Navbar/>
      <div className={styles.body}>
         

        {/* ================== Services ========================= */}
        <div className={styles.services}>
            <div className={styles.servicetype}>
              <div className={styles.image}>
                <img src="/agriculture.png" alt="Training"/>
              </div>
              <div className={styles.intype}>
                <h4>Training</h4>
                <p>New service request from Farm X for Plowing service</p>
                <p>#2,000</p>
              </div>
              <input type="radio" name="" id="green" />
            </div>
            <div className={styles.servicetype}>
              <div className={styles.image}>
              <img src="/research.png" alt="research"/>
              </div>
              <div className={styles.intype}>
                <h4>Research Institute</h4>
                <p>New service request from Farm X for Plowing service</p>
                <p>#2,000</p>
              </div>
              <input type="radio" name="" id="" />
            </div>
            <div className={styles.servicetype}>
              <div className={styles.image}>
              <img src="/design_services.png" alt="Equipment"/>
              </div>
              <div className={styles.intype}>
                <h4>Equipment Rentals</h4>
                <p>New service request from Farm X for Plowing service</p>
                <p>#2,000</p>
              </div>
              <input type="radio" name="" id="" />
            </div>
            <div className={styles.servicetype}>
              <div className={styles.image}>
              <img src="/consult.png" alt="Consultation"/>
              </div>
              <div className={styles.intype}>
                <h4>Consultation</h4>
                <p>New service request from Farm X for Plowing service</p>
                <p>#2,000</p>
              </div>
              <input type="radio" name="" id="" />
            </div>
            <div className={styles.servicetype}>
              <div className={styles.image}>
              <img src="/vet.png" alt="Vet"/>
              </div>
              
              <div className={styles.intype}>
                <h4>Vet Doctor</h4>
                <p>New service request from Farm X for Plowing service</p>
                <p>#2,000</p>
              </div>
              <input type="radio" name="" id="" />
            </div>
            <div className={styles.servicetype}>
              <div className={styles.image}>
               <img src="/agriculture.png" alt="Logistics"/>
              </div>
              <div className={styles.intype}>
                <h4>Logistics</h4>
                <p>New service request from Farm X for Plowing service</p>
                <p>#2,000</p>
              </div>
              <input type="radio" name="" id=""/>
            </div>
        </div>
          
          {/* ======== Observation boards ======= */}

        <div className={styles.boards}>
            <div className={styles.board}>
              <h3>
                  Number of Requests
              </h3>
              <h1> 100</h1>
            </div>
            <div className={styles.board}>
              <h3>
                  Currently working
              </h3>
              <h1> 100</h1>
            </div>
            <div className={styles.board}>
              <h3>
                  Scheduled
              </h3>
              <h1> 100</h1>
            </div>
            <div className={styles.board}>
              <h3>
                  Cancelled
              </h3>
              <h1> 100</h1>
            </div>
        </div>
        
         {/* ======= Metrics ======= */}

         <div className={styles.metric}>
           <div className={styles.perfom}>
             <h2>Here are your Performance Metrics!</h2>
           </div>
           <div className={styles.statistics}>
             <h3>Service statistic</h3>
           </div>
         </div>

         {/* ======== More Data ======= */}
         <h3 className={styles.earn}>Earnings</h3>
         <div className={styles.data} >

            {/* Earnings */}
            <div className={styles.earnings}>
              <div>
                
                <h5>
                   Available for withdrawal
                </h5>
                <h5 className={styles.figure}>
                   #43,000.00
                </h5>
                <br />
                <h5>
                   Month income
                </h5>
                <h5 className={styles.figure}>
                   #143,000.00
                </h5>
                <br />
                <h5>
                    Incoming payment
                </h5>
                <h5 className={styles.figure}>
                   #43,000.00
                </h5>
                <br />
              </div>
              
              <div>
                <h5>
                  Last payment date
                </h5>
                <h5 className={styles.fig}>
                    2nd April 2023
                </h5>
                <br />
                <h5>
                     Last payment amount
                </h5>
                <h5 className={styles.figure}>
                    #43,000.00
                </h5>
                <br />
                <h5>
                    Canceled orders
                </h5>
                <h5>
                    3 ( -#23,000.00 )
                </h5>
                <br />
              </div>
            </div>

            {/* Visibility/Messages */}
            <div className={styles.vibmes}>
               <h3>Visibility</h3>
               <div className={styles.visibility}>
                  
                  <div>
                    <h5>
                      Statistics
                    </h5>
                    <h5>
                      Appeared in searches
                    </h5>
                    <h5>
                      Contacts
                    </h5>
                  </div>
                  <div>
                    <h5>
                       Last 7 days
                    </h5>
                    <h5 className={styles.fig}>
                      -12
                    </h5>
                    <h5 className={styles.fig}>
                    12
                    </h5>
                  </div>
               </div>
               <h3>Messages</h3>
               <div className={styles.messages}>
              
                 <div>
                   <h5>2 Unread Messages</h5>
                   <h5>Mrs. Fredish Onuowu</h5>
                   <h5>Mrs. Fredish Onuowu</h5>
                 </div>
                 <div>
                   <h5>Last Updated 7mins ago</h5>
                   <h5>Please check the...</h5>
                   <h5>Have you been able...</h5>
                 </div>
               </div>
            </div>
         </div>
       
        {/* --------------------------------------- */}
      </div>
    </div>
  );
};

export default Overview;
