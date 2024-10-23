import React from 'react'
import "./Contact.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
function Contact() {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (
    <div>
        <Header />
            <div className="overview">

            <h1>Contact</h1>
            <div className="address">
                <p><b>Address</b> : Plot No: A-117, A-118 & A-119,
       Paithan Industrial Area,
       Dist. Aurangabad. Maharashtra, India</p>

       {/* <p><b>Tel</b> : +91 9975827056, +91 7798005007</p> */}

       <p><b>Registered Office</b> : Plot No. 4/8/65,
    Nawabpura, Aurangabad 431001, India</p>

    <p><b>For Sales Department & Business Related Inquiries:</b> </p>
       <p><b>Email</b> :sales@toobapharma.in</p>
       <p><b>Mobile</b> : +91 7798005007</p>

       <p><b>For Purchase Department & Other Inquiries::</b> </p>
       <p><b>Email</b> :info@toobapharma.in</p>
       <p><b>Mobile</b> : +91 9011986111</p>
    {/* <p><b>Email</b> :info@toobapharma.in</p> */}
            </div>
            <div onClick={()=>{
              window.location.href="https://www.google.com/maps/place/Tooba+Pharmaceuticals+Private+Limited/@19.6075622,75.3493388,10.67z/data=!4m5!3m4!1s0x3bdb988affffffff:0xea8f3451fa731741!8m2!3d19.537686!4d75.3880832"
              }}>
              <img className="mapimg" src="/map.png" alt="map" />
            </div>
            {/* <div style={{ height: '40vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDa3zC3zgOqGZq-yIVdixTmOuB27nNfqgs" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
                />
            </GoogleMapReact>
            </div> */}



            </div>

        <Footer />
    </div>
  )
}

export default Contact