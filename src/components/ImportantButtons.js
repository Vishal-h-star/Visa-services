import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const ImportantButtons = () => {
    const { t } = useTranslation("common")
  return (
      <section className="important-buttons">
        <h2 className="heading"> {t("mainheading")}</h2>

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 text-center my-2">
               <Link to='/Apply'><button className='imp_buttons orange'>{t("buttons.applyEvisa")}</button></Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12  text-center my-2">
              <Link to='/partial-Filled'><button className='imp_buttons green'>{t("buttons.partialFill")}</button></Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12  text-center my-2">
               <Link to='/visa-fee'><button className='imp_buttons blue'> {t("buttons.makePayment")}</button></Link>
            </div>
          </div>
        </div>
      </section>
  )
}
