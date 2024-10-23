import React from 'react'
import "./AboutUs.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import mainbuilding from '../../web data/FINAL PHOTOS/chairman.png'
import vision from './vision.png'
import ecoearth from './eco-earth.png'
import values1 from './values1.png'

function Vision() {
  return (
    <div>
        <Header />
            <div className="overview">
            <h1>Vision, Mission and Values</h1>
            <div className="row m-auto vision-row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 vision-col">
                    <img src={vision} alt="vision" />
                    <h3>Vision</h3>
                    <p>Striving for developing innovative processes consistent with highest quality standards in an environment friendly and cost-effective manner.</p>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 vision-col">
                <img src={ecoearth} alt="vision" />
                    <h3>Mission</h3>
                    <p>
                    TPPL will focus tirelessly on developing novel processes applying contemporary know-how, Inculcating culture of innovation in its technical team, focus will be maintain on consistency and integrity of processes through continuous development, validation and documentation.
                    <br />
                    This shall be achieved by inculcating a culture of innovation in its technical teams.
                    <br />
                    Human resource development and honing their competencies through training and inclusiveness.
                    <br />
                    Environment friendliness and safety shall be part of TPPL culture.
                    </p>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 vision-col">
                <img src={values1} alt="vision" />
                    <h3>Values</h3>
                    <p>
                    Rely on Research and Innovation.
                    <br />Adopt Environment Friendly Technologies and Processes.
                    <br />Integrate Quality in everything that we do. Let the best of Ethics be the guiding principle of all our business operations.
                    <br/> Develop a Corporate image that evokes confidence and delight.
                    <br />Provide a Safe Work Environment for our personnel.
                    <br />Seek Business Growth through efficient production distribution and management.
                    <br />Adopt Corporate Social Responsibility that espouses the above, in addition to fulfilment of our social, legal, statutory and environmental responsibilities in word and spirit.
                    </p>
                </div>
            </div>
            </div>
        <Footer />
    </div>
  )
}

export default Vision