import React from 'react'
import "./AboutUs.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import mainbuilding from '../../web data/FINAL PHOTOS/building LATEST/Main Building.JPG'

function Overview() {
  return (
    <div>
        <Header />
            <div className="overview">
            <h1>About Us</h1>
            <div className="row m-auto row-cont align-items-center">

              <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
              <img src={mainbuilding} alt="mainbuilding" />
              </div>

              <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 info-col shadow-sm">
                <h3>Welcome to <span className="color-span">Tooba Pharmaceuticals</span></h3>
                <p>
                Tooba Pharmaceuticals Private Limited (TPPL) is a GMP Certified manufacturer of API Bulk Drugs and Intermediates, with state-of-the-art manufacturing facility.
<br />
TPPL retains its strong roots in R&D to explore and develop generics using newer technologies in an environment friendly manner.
<br />
TPPL, headquartered in Aurangabad, Maharashtra is a major urban center and an industrial hub, home to several pharmaceutical industries. Well connected with major metropolitan areas within the state and beyond, there's a ready access to markets and raw materials.
<br />
The manufacturing plant is situated in the Paithan Industrial area, erected as per the GMP norms laid down by FDA.
                </p>
                <h3>Strength</h3>
                <p>
                <b>TPPL has developed patentable technologies. Recently we have filed patent for  Glycopyrronium Bromide (Application No. 202021022784).</b>
                <br />
                TPPL has gathered around technocrats with cumulative research experience for almost 90 years and have acclaimed more than 200 patents to their credit. So it is fully poised to meet challenges in developing non- infringing routes for various molecules. As far as regulatory experience is concerned this technical team in past was responsible for filing dozens of DMFs for regulated markets meeting stringent quality requirements.
                Excellent QA/QC facilities with all required instruments.
                <br />
                <b>TPPL believes in developing the product from own methods by using mostly Indian Raw Materials.</b>
                <br />
                <b>TPPL endorses the Government of India's vision and mission of developing the products with indigenous sources-'Be vocal about local'.</b>
                </p>

              </div>
            
            </div>
            </div>
        <Footer />
    </div>
  )
}

export default Overview