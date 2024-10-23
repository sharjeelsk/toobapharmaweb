import React from 'react'
import "./AboutUs.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import mainbuilding from '../../web data/FINAL PHOTOS/chairman.png'

function Chairman() {
  return (
    <div>
        <Header />
            <div className="overview">
            <h1>Chairman's Message</h1>
            <div className="row m-auto row-cont">

              <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
              <img src={mainbuilding} alt="mainbuilding" />
              </div>

              <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 info-col shadow-sm">
                <h3>Chairman <span className="color-span">Dr. Jaweed Mukarram Siddiqui</span></h3>
                <p>
                Dr. Jaweed Mukarram Siddiqui obtained his PhD from the National Chemical Laboratories, Pune and completed his post doctoral studies in USA from University of California, Santa Barbara and Utah State University Logan, Utah. Upon his return from the US he joined a major Indian pharmaceutical company to work in the field of chemical research. He resigned as the company’s Senior Associate Director in 2008, after twenty gainful years, to float TPPL. He has 150 patents and publications to his credit.
                </p>
                <p>
                Dr. Jaweed Mukarram Siddiqui
Chairman
With the founding of Tooba Pharmaceuticals Pvt Ltd, I too embarked on a journey. A journey in which I endeavor to convert intellectual capital into products that enhance the quality of life and human well-being. As a scientist in the exciting world of pharmaceuticals, my journey and endeavors have been most fulfilling.
<br />
My long association with this industry, the experience I owe to my mentors, colleagues and well wishers, drive the spirit of innovation, entrepreneurship and ethics that we at Tooba have committed ourselves to.
<br />
While Tooba manufactures API bulk drugs & intermediates, our research orientation will continue with newer technologies like biocatalyses and metal catalyses, etc. for the development of generics, without losing sight of environment friendliness. Additionally we will pursue drug discovery with new chemical entities (NCEs) and projects will be worked out optimistically to cut short the duration of development period as well as commercially tailored expenditures. We will also provide our technological expertise and resources for third party custom research initiatives.
<br />
At Tooba, we shall continue to shape and evolve our business practices to best motivate our employees, customers, suppliers and all stakeholders. This I hold to be key in our effort to deliver excellence, as excellence, I believe should be the norm, rather than an exception, in the pharma industry.
                </p>

              </div>
            
            </div>
            </div>
        <Footer />
    </div>
  )
}

export default Chairman