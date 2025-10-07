import React from 'react'
import pdfs from '../../assets/images/driver-and-vehicle-checklist.pdf'

const pdf = () => {
    return (
        <>
            <a href={pdfs} rel="noopener noreferrer" target="_blank">
            <span>
                      <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                    </span>{" "}
                   Download PDF
            </a></>
    )
}

export default pdf