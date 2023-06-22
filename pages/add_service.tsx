import React from 'react'
import style from "@/styles/Addserv.module.scss"

const add_service = () => {
  return (
    <div className={style.border}>
      <h1>Add Service Details</h1>
      <form action="" className={style.form}>
        <p>Service Name</p>
        <input type="text" name='recepient name' placeholder='Name' className={style.boxB} />
        <label htmlFor="Name"></label>
        <p>Description</p>
        <input type="text" name='Description' placeholder='Description' className={style.boxB} />
        <label htmlFor="Description"></label>
        <p>Category</p>
        <input type="text" name='Category' placeholder='Category' className={style.boxB}/>
        <label htmlFor="Category"></label>
        <p>Price</p>
        <input type="text" name='Price<' placeholder='Price' className={style.boxB} />
        <label htmlFor="Price<"></label>
        
        <div className={style.but}>
          <input type="reset" value="Cancel" className={style.cancel} />
          <label htmlFor="Cancel"></label>
          <input type="submit" value="Publish Invoice" className={style.pub} />
          <label htmlFor="Publish Invoice"></label>
        </div>
        
      </form>
    </div>
  )
}

export default add_service
