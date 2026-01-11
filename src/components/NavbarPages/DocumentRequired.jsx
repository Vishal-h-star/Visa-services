import React from 'react'

import PagesLeftSideSupporAndLinkFormet from './PagesLeftSideSupporAndLinkFormet';
import { useTranslation } from 'react-i18next';


const DocumentRequired = () => {
    return (
        <section className="main_Content">
            <div className="container">
                <div className="row">
                    <PagesLeftSideSupporAndLinkFormet/>

                    <div className="pageRightSide col-lg-9 col-md-8 col-sm-12 col-12 ">
                        <div className="containt">
                            <h4>
                                <b>{t("title")}</b>
                            </h4>
                            <p>{t("docRequired.note")}</p>

                            <div className="documentContent">
                                <h5>{t("docRequired.title")}</h5>

                                <h6>{t("docRequired.eTouristVisa.title")}
                                </h6>
                                <p>
                                    <b>1.</b> {t("docRequired.eTouristVisa.documents.doc1")}
                                </p>

                                <h6>{t("docRequired.eMedicalVisa.title")}
                                </h6>
                                <p>
                                    <b>1.</b> {t("docRequired.eMedicalVisa.documents.doc1")}
                                    <br />
                                    <b>2.</b> {t("docRequired.eMedicalVisa.documents.doc2")}
                                </p>

                                <h6>{t("docRequired.eBusinessVisa.title")}
                                </h6>
                                <p>
                                    <b>1.</b> {t("docRequired.eBusinessVisa.documents.doc1")}
                                    <br />
                                    <b>2.</b> {t("docRequired.eBusinessVisa.documents.doc2")}
                                </p>

                                <h6>{t("docRequired.eBusinessVisaGIAN.title")}</h6>

                                <p><b>1.</b> {t("docRequired.eBusinessVisaGIAN.documents.doc1")}
                                    <br />
                                    <b>2.</b> {t("docRequired.eBusinessVisaGIAN.documents.doc2")}
                                    <br />
                                    <b>3.</b> {t("docRequired.eBusinessVisaGIAN.documents.doc3")}
                                    <br />
                                    <b>4.</b> {t("docRequired.eBusinessVisaGIAN.documents.doc4")}
                                </p>

                                <h6>{t("docRequired.photoRequire.title")}</h6>

                                <p>
                                    <b>1.</b> {t("docRequired.photoRequire.format")}.
                                    <br />
                                    <b>2.</b> {t("docRequired.photoRequire.size.title")}
                                    <ul>
                                        <li>{t("docRequired.photoRequire.size.min")}</li>
                                        <li>{t("docRequired.photoRequire.size.max")}</li>
                                    </ul>
                                    <b>3.</b>{t("docRequired.photoRequire.dimensions")}
                                    <br />
                                    <b>4.</b>{t("docRequired.photoRequire.composition")}
                                    <br />
                                    <b> 5.</b> {t("docRequired.photoRequire.framing")}
                                    <br />
                                    <b>6.</b>{t("docRequired.photoRequire.background")}
                                    <br />
                                    <b>7.</b> {t("docRequired.photoRequire.lighting")}
                                    <br />
                                    <b>8.</b> {t("docRequired.photoRequire.borders")}
                                    <br />
                                    <b>9.</b> {t("docRequired.liveSupport.title")}
                                    <ul>
                                        <li>{t("docRequired.liveSupport.description")}</li>
                                    </ul>
                                    <b>10.</b> {t("docRequired.paymentOptions.title")}
                                    <ul>
                                        <li>
                                            {t("docRequired.paymentOptions.description")}
                                        </li>
                                    </ul>


                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DocumentRequired