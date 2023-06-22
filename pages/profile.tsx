import React from "react";
import styles from "@/styles/Profile.module.scss";
import Navbar from "@/components/Navbar";

interface Reviews {
  [key: string]: any;
}
interface Skills {
  [key: string]: any;
}
const Profile = () => {
  const reviews: Reviews[] = [ 
    {
      src: "/kalu.png",
      alt: "Training",
      name: "Caleb Martins",
      occupation: "Surveyor",
      //rating: "/Training",
      heading: "Training",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ipsam repellendus recusandae quod, consequatur expedita exercitationem modi atque tempore laudantium corrupti beatae, veritatis id at! Ea quis laudantium veniam aliquid.",
      //likes: "Training",
      id: 1,
    },
    {
      src: "/akachi.png",
      alt: "Training",
      name: "Alia N.",
      occupation: "Farmer",
      //rating: "/Training",
      heading: "Training",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ipsam repellendus recusandae quod, consequatur expedita exercitationem modi atque tempore laudantium corrupti beatae, veritatis id at! Ea quis laudantium veniam aliquid.",
      //likes: "Training",
      id: 2,
    },
    
  ];
  const skills: Skills[] = [ 
    {
      type: "GPS Mapping",
      id: 1,
    },
    {
      type: "Driving",
      id: 2,
    },
    
  ];

  return (

    <div>
        <Navbar/>
    <h1 className={styles.my}>My Profile</h1>
    <div className={styles.section}>
        

        <div className={styles.details}>
         

          {/* ================== profile ========================= */}
          <div className={styles.profile}>
            <img src="/Ellipse 103.png" alt="profile_pic" />
            <div>
                <h2>Musa Yara</h2>
                <h4>Verified</h4>
                <p>joined 2 months ago</p>
            </div>
            <div className={styles.numbers}>
                <h3>24 Ratings</h3>
                <h1>4.5</h1>

            </div>
          </div>
          <hr />
          <h4>ID: 14324</h4>

          <div className={styles.about}>
                <h3>About Me</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quidem voluptatem 
                  laudantium quasi possimus vero aut mollitia quisquam
                   deleniti repellendus vel quaerat quos? Dolorem, dolor harum expedita totam tenetur iste
                   audantium quasi possimus vero aut mollitia quisquam
                   deleniti repellendus vel quaerat quos? Dolorem, dolor harum expedita totam tenetur iste!
                   audantium quasi possimus vero aut mollitia quisquam
                </p>
      
          </div>
          <div className={styles.distance}>
            <div>
                <h2>1.45km</h2>
                <p>away from you</p>
            </div>
            <div>
                <h2>3 years</h2>
                <p>Experience</p>
            </div>
          </div>
          
          {/* ======== jobs ======= */}

          <div className={styles.jobs}>
            <div>
                <h2>30</h2>
                <p>Jobs Completed</p>   
            </div>
            <div>
                <h2>22</h2>
                <p>Successful</p>
            </div>
            <div>
                <h2>3</h2>
                <p>Unsuccessful</p>
            </div>
          </div>
        
         {/* ======= More ======= */}

            <div className={styles.more}> 
              <div className={styles.skills}>
                <h3>Skills</h3>
                {skills.map((skill) => {
                    return(
                        <p key={skill.id}>{skill.type}</p>
                    )
                })}
              </div>
              <div className={styles.misc} >
                <h3>Price Rate</h3>
                <p>average cost per contract</p>
                <h3>20k-80k</h3>
                <br />
                <br />
                <h3>Response Time</h3>
                <h3>3hrs-4hrs</h3>
              </div>
            </div>
            <div>
              <h3>Badges</h3>
              <p>Acquired from our scrutiny process</p>
            </div>
       
      </div>
       
       {/* ---------------Reviews------------------------ */}

      <div className={styles.ratings}>
           {/* ======== ratings ======= */}

          <div className={styles.stars}>
            <h3 className={styles.banner}>Reviews</h3>
            <h2>Reviews</h2>
            <hr />
          </div>
        
           {/* ======= reviews ======= */}

            <div >
                {reviews.map((review) => {
                    return(
                        <div key={review.id} className={styles.reviews}>
                            <div className={styles.picture}>
                              <img src={review.src} alt={review.alt} className={styles.imgs}/>
                              <div>
                                 <h3>{review.name}</h3>
                                 <h3>{review.occupation}</h3>
                              </div>
                            </div>
                            <h3 className={styles.heading}>{review.heading}</h3>
                            <p className={styles.body}>{review.body}</p>
                            <hr />
                        </div>
                    )
                })}
            </div>

       </div>
    </div>
    </div>
  );
};

export default Profile;
