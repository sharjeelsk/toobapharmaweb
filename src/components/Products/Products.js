import React from 'react'
import "./Products.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Trazodone from './Trazodone.png'
import glycopyrrolate from './glycopyrrolate.png'
import Mexiletine  from './Mexiletine Hydrochloride.png'
import Nitrofurantoin  from './Nitrofurantoin.png'
import Tamsulosin   from './Tamsulosin Hydrochloride.png'


function Products() {
  return (
    <div>
        <Header />
            <div className="products">
            <h1>Products</h1>

            <div className="api">
                <h3>Available APIs</h3>
                <div className="row m-auto api-div">
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 api-cont">
                    <img src={glycopyrrolate} alt="tarazadone" />
                        <h4>Glycopyrronium Bromide</h4>
                        <h4>(CAS No.: 51186-83-5)</h4>
                        <p>Glycopyrronium Bromide Ph.Eur</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 api-cont">
                        <img src={Trazodone} alt="tarazadone" />
                        <h4>Trazodone Hydrochloride</h4>
                        <h4>(CAS No.: 25332-39-2)</h4>
                        <p>Trazodone Hydrochloride USP</p>
                        <p>Trazodone Hydrochloride BP</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 api-cont">
                        <img src={glycopyrrolate} alt="tarazadone" />
                        <h4>Glycopyrrolate</h4>
                        <h4>(CAS No.: 596-51-0)</h4>
                        <p>Glycopyrrolate IP</p>
                        <p>Glycopyrrolate USP</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 api-cont">
                        <img src={Mexiletine} alt="tarazadone" />
                        <h4>Mexiletine Hydrochloride</h4>
                        <h4>(CAS No.: 5370-01-4)</h4>
                        <p>Mexiletine Hydrochloride Ph.Eur</p>
                        <p>Mexiletine Hydrochloride USP</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 api-cont">
                        <img src={Nitrofurantoin} alt="tarazadone" />
                        <h4>Nitrofurantoin</h4>
                        <h4>(CAS No.: 67-20-09)</h4>
                        <p>Nitrofurantoin Ph.Eur</p>
                        <p>Nitrofurantoin USP</p>
                        <p>Nitrofurantoin IP</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 api-cont">
                        <img src={Tamsulosin} alt="tarazadone" />
                        <h4>Tamsulosin Hydrochloride</h4>
                        <h4>(CAS No.: 106463-17-6)</h4>
                        <p>Tamsulosin Hydrochloride Ph.Eur</p>
                        <p>Tamsulosin Hydrochloride USP</p>
                        <p>Tamsulosin Hydrochloride IP</p>
                    </div>
                </div>

            </div>

            <h3>In-Progress APIs</h3>

            <div className="table-div">
            <table class="ui celled table">
            <thead>
                <tr><th>Sr No.</th>
                <th>Name</th>
                <th>CAS No.</th>
            </tr></thead>
            <tbody>
                
                <tr>
                <td data-label="Name">1</td>
                <td data-label="Age">Tolterodine Tartrate </td>
                <td data-label="Job">124937-52-6</td>
                </tr>
                
                <tr>
                <td data-label="Name">2</td>
                <td data-label="Age">Aripiprazole </td>
                <td data-label="Job">129722-12-9</td>
                </tr>
                <tr>
                <td data-label="Name">3</td>
                <td data-label="Age">Modafinil </td>
                <td data-label="Job">68693-11-8</td>
                </tr>
                <tr>
                <td data-label="Name">4</td>
                <td data-label="Age">Cinacalcet Hydrochloride </td>
                <td data-label="Job">364782-34-3</td>
                </tr>
                
                <tr>
                <td data-label="Name">5</td>
                <td data-label="Age">Cyclizine Hydrochloride </td>
                <td data-label="Job">5897-18-7</td>
                </tr>
                
            </tbody>
            </table>
            </div>
            
            </div>
        <Footer />
    </div>
  )
}

export default Products