import React from 'react'
import { Link } from 'react-router-dom'

export const ImportantButtons = () => {
  return (
      <section className="important-buttons">
        <h2 className="heading">Important Navigations</h2>

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 text-center my-2">
               <Link to='/Apply'><button className='imp_buttons'>Apply For E-Visa</button></Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12  text-center my-2">
              <Link to='/partial-Filled'><button className='imp_buttons'>Complete Partial Filled Form</button></Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12  text-center my-2">
               <Link to='/visa-fee'><button className='imp_buttons'>Payment For Complete Form</button></Link>
            </div>
          </div>
        </div>
      </section>
  )
}
