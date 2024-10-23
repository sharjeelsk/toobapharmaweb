import React from 'react'
import "./Rdcrams.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import research from './research.png'


function Rdcrams() {
  return (
    <div>
        <Header />
            
            <div className="rdcrams">
            <img src={'/services.png'} alt="research" />
            <h1>Services</h1>
            <p>
            TPPL can perform discovery and process chemistry through services that range from synthetic route identification and optimization to synthesis of niche building blocks, scaffolds and intermediate compounds for generating analogs.
            <br /><br />Another area of focus for TPPL is the custom synthesis of pre-clinical and clinical compounds on a multi-gram to multi-kilo scale.
            <br /><br />This service offering is related to developing commercially viable and competitive alternate routes to manufacture niche intermediates or APIs that involve multi-step manufacturing processes. The objectives of process optimization services are to significantly reduce the costs and the complexity in manufacturing process while avoiding unwanted bye-products in order to minimize waste and related environmental impact.
            <br /><br />TPPL can also perform contract or toll manufacturing of specific intermediates or APIs for in-market products and for NCEs from early phase development to commercialization stage.
            </p>
            </div>
            
        <Footer />
    </div>
  )
}

export default Rdcrams