import React from 'react'
import "./AboutUs.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import mainbuilding from '../../web data/FINAL PHOTOS/chairman.png'

function Infrastructure() {
  return (
    <div>
        <Header />
            <div className="overview">
            <div className="infa">
            <h1>Infrastructure</h1>
            <p style={{textAlign:"center"}}><b>We have set up a state of the Art API manufacturing facility at Paithan Industrial Area, Aurangabad (MH) erected as per the GMP norms laid down by FDA.</b></p>
            <table className="ui celled table">
            <thead>
              <tr><th>Sr. No.</th>
              <th>Facility</th>
              <th>Equipment</th>
            </tr></thead>
            <tbody>
              <tr>
                <td data-label="Name">1</td>
                <td data-label="Age">R&D</td>
                <td data-label="Job">Autoclave/Hydrogenator, Photochemical Reactors, Glass Assemblies etc.</td>
              </tr>
              <tr>
                <td data-label="Name">2</td>
                <td data-label="Age">QA/QC</td>
                <td data-label="Job">HPLC, HS-GC with auto injector, Polarimeter, FTIR, UV, Karl Fischer, Micro lab etc.</td>
              </tr>
              <tr>
                <td data-label="Name">3</td>
                <td data-label="Age">Intermediate Block</td>
                <td data-label="Job">
                Stainless steel Reactors
                <br />
                Glass lined reactors
                <br />
                Glass Assemblies
                <br />
                SS Centrifuge, Tray dryer, Multi Mill, Sifter etc.
                </td>
              </tr>
              <tr>
                <td data-label="Name">4</td>
                <td data-label="Age">Finish Block</td>
                <td data-label="Job">
                Glass lined reactors
                <br />Glass Assemblies
                <br />Vacuum Tray Dryer, Nutsche Filter, SS Centrifuge, Multi Mill, Sifter,
                <br />Water purification Plant, Positive pressure AHUs. Etc.
                </td>
              </tr>
              <tr>
                <td data-label="Name">5</td>
                <td data-label="Age">Engg. & Maint. (Utility)</td>
                <td data-label="Job">Boiler, Cooling Tower, Chiller, Vacuum Pumps, Air compressor, Etc.</td>
              </tr>
              <tr>
                <td data-label="Name">6</td>
                <td data-label="Age">Solvent Yard</td>
                <td></td>
              </tr>
              <tr>
                <td data-label="Name">7</td>
                <td data-label="Age">Packaging store</td>
                <td></td>
              </tr>
              <tr>
                <td data-label="Name">8</td>
                <td data-label="Age">Stores</td>
                <td></td>
              </tr>
              <tr>
                <td data-label="Name">9</td>
                <td data-label="Age">Administration Block	</td>
                <td></td>
              </tr>
              <tr>
                <td data-label="Name">10</td>
                <td data-label="Age">Common Area	</td>
                <td></td>
              </tr>
              <tr>
                <td data-label="Name">11</td>
                <td data-label="Age">Effluent Treatment Plant	</td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <div className="mt-5 row mx-auto">

          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 my-2 point-list">
          <h3>Facilities</h3>
          <ol className="ui list">
          <li value="*">Multi Storeyed Finish Block</li>
          <li value="*">Stainless Steel Reactors and Glass Lined Reactors</li>
          <li value="*">Glass Assemblies</li>
          <li value="*">Centrifuges</li>
          <li value="*">Sparkler Filters</li>
          <li value="*">Vacuum Tray Dryers</li>
          <li value="*">Multi Mills and Vibro Sifters</li>
          <li value="*">Wet Lab Facility</li>
          <li value="*">Micro Lab Facility</li>
          <li value="*">Stability Chambers</li>
          <li value="*">Control sample room</li>
          <li value="*">Instrumentation Lab</li>
        </ol>
        </div>

        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 my-2 point-list">
          <h3>Reaction Capabilities</h3>
          <ol className="ui list">
          <li value="*">Hydrogenation</li>
          <li value="*">Grignard reaction</li>
          <li value="*">Steam Distillations</li>
          <li value="*">Photochemical Reaction</li>
          <li value="*">Condensation</li>
          <li value="*">Acylation</li>
          <li value="*">Alkylation</li>
        </ol>
        </div>

        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 my-2 point-list">
          <h3>Approvals & Certifications</h3>
          <ol className="ui list">
          <li value="*">WHO GMP Audited & Compliances have been completed</li>
          <li value="*">Environmental Clearance</li>
          <li value="*">Consent to establish</li>
          <li value="*">Consent to operate</li>
          <li value="*">GMP Certified</li>
          <li value="*">UK DMF/EDQM/US DMF (In Progress)</li>
          <li value="*">ISO 9001: 2008</li>
          <li value="*">OHSAS 18001: 2007</li>
          <li value="*">ISO 14001: 2004</li>
        </ol>
        </div>


        </div>
            </div>
            </div>
        <Footer />
    </div>
  )
}

export default Infrastructure