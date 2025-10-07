import React from 'react';

const Topbar = () => {
  return (
      <>
        <section className='topbar'>
            <div className='topbar-container'>
                <div className='topbar-area'>
                    <div className='topbar-email'>
                    <i className="fa fa-envelope-o" aria-hidden="true"></i><span> sales@womsolutions.in</span>
                    </div>
                    <div className='topbar-number'>
                    <i className="fa fa-phone" aria-hidden="true"></i><span>+91-9891210081</span>
                    </div>
                </div>
            </div>
        </section>
      </>
  );
};

export default Topbar;
