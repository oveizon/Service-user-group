import React from 'react'
import style from "@/styles/Addserv.module.scss"

const add_service = () => {
  return (
    <div className={style.border}>
      <h1>Create Invoice</h1>
      <form action="" className={style.form}>
        <p>Recepient Name</p>
        <input type="text" name='recepient name' placeholder='Name' className={style.boxA} />
        <label htmlFor="Name"></label>
        <p>Service Type</p>
        <input type="text" name='Service Type' placeholder='Service' className={style.boxA} />
        <label htmlFor="Service"></label>
        <p>Quantity</p>
        <input type="text" name='Quantity' placeholder='Quantity' className={style.boxA}/>
        <label htmlFor="Quantity"></label>
        <p>Price</p>
        <input type="text" name='Price<' placeholder='Price' className={style.boxA} />
        <label htmlFor="Price<"></label>
        <p>Address</p>
        <input type="text" name='Address' placeholder='Address' className={style.boxA}/>
        <label htmlFor="Address"></label>
        
        <div className={style.but}>
          <input type="reset" value="Cancel" className={style.cancel} />
          <label htmlFor="Cancel"></label>
          <input type="submit" value="Publish Invoice" className={style.pub} />
          <label htmlFor="Publish Invoice"></label>
        </div>
        
      </form>
      <h3 className={style.pdf}>Download PDF</h3>
    </div>
  )
}

export default add_service
