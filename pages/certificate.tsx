import React from "react";
import style from "@/styles/Certificate.module.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";


interface Certificate{
    [key : string]: any;
}


const JobCert = () => {

    const certificate : Certificate[] = [
        {
            farm : 'Farm A',
            service : 'Service Type',
            id : 'Certificate ID',
            date : 'Date',
            tmpId : 1
        },

        {
            farm : 'Farm A',
            service : 'Service Type',
            id : 'Certificate ID',
            date : 'Date',
            tmpId : 2
        },

        {
            farm : 'Farm A',
            service : 'Service Type',
            id : 'Certificate ID',
            date : 'Date',
            tmpId : 3
        }
    ]


    return(
        <>
           <Navbar />
          {certificate.map(cert => { 
            return (
                < div className = {style.box}>
                 <div className = {style.flex}>
                    <div key = {cert.tmpId}>
                       <p>{cert.farm}</p>
                       <p>{cert.service}</p>
                       <p>{cert.id}</p>
                       <p>{cert.date}</p>
                    </div>
                    <h3 className="click"><Link href={'/certificate/' + cert.tmpId}>View</Link></h3>
                 </div>
                </div>
        )})}
        <Footer />
        </>  
    );
}
export default JobCert;