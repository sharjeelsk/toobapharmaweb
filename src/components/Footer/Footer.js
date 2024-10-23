import React, { useState } from 'react';
import "./Footer.scss";
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import toobapharmalogo from '../../web data/tooba new logo 2019.png';
import LinkIcon from '@mui/icons-material/Link';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useForm } from 'react-hook-form';
import Alert from '@mui/material/Alert';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom'; // Corrected import

function Footer() {
  const { handleSubmit, formState: { errors }, register } = useForm();
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate(); // Use `useNavigate` inside the component

  const onSubmit = (data, e) => {
    console.log(data);
    emailjs.sendForm('service_3thpv83', 'template_4e34gy3', e.target, 'dvNOkhu6NNNUpisYu')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(null);
          window.location.reload(false);
        }, 3000);
      }, (error) => {
        console.log(error);
      });
  }

  return (
    <footer>
      <div className="row m-auto justify-content-between">

        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <img src={toobapharmalogo} alt="logo" />
          <h1 className="gradient-color-dark">Tooba Pharmaceuticals Private Limited</h1>
          <p className="quote">In The Business of Human Wellbeing</p>
          <p>
            Tooba Pharmaceuticals Private Limited (TPPL) is a GMP Certified manufacturer of API Bulk Drugs and Intermediates, with a state-of-the-art manufacturing facility.
          </p>
        </div>

        <div className="col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2 footer-bottom-cont">
          <h4>Important Links</h4>
          <Link to="/overview" className="link"><p className="mb-3"><LinkIcon sx={{ fontSize: 15, marginRight: 1 }} /> About Us</p></Link>
          <Link to="/rdcrams" className="link"><p className="mb-3"><LinkIcon sx={{ fontSize: 15, marginRight: 1 }} /> Services</p></Link>
          <Link to="/products" className="link"><p className="mb-3"><LinkIcon sx={{ fontSize: 15, marginRight: 1 }} /> Products</p></Link>
          <Link to="/chairman" className="link"><p className="mb-3"><LinkIcon sx={{ fontSize: 15, marginRight: 1 }} /> Chairman's Message</p></Link>
          <Link to="/vision" className="link"><p className="mb-3"><LinkIcon sx={{ fontSize: 15, marginRight: 1 }} /> Vision</p></Link>
          <Link to="/infrastructure" className="link"><p className="mb-3"><LinkIcon sx={{ fontSize: 15, marginRight: 1 }} /> Infrastructure</p></Link>
          <Link to="/multimedia" className="link"><p className="mb-3"><LinkIcon sx={{ fontSize: 15, marginRight: 1 }} /> Media</p></Link>
          <Link to="/careers" className="link"><p className="mb-3"><LinkIcon sx={{ fontSize: 15, marginRight: 1 }} /> Careers</p></Link>
        </div>

        <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 footer-bottom-cont">
          <h4>Contact Us</h4>
          <p><b>For Sales Department & Business Related Inquiries:</b> </p>
          <p><LocalPhoneIcon /> +91 7798005007</p>
          <p><MailOutlineIcon /> sales@toobapharma.in</p>

          <p><b>For Purchase Department & Other Inquiries:</b> </p>
          <p><LocalPhoneIcon /> +91 9975827056</p>
          <p><MailOutlineIcon /> info@toobapharma.in</p>

          <p><LocationOnIcon /> Plot No: A-117, A-118 & A-119, Paithan Industrial Area, Aurangabad-431148 (M.S)</p>
          <img src="/makeinindiarmb.png" alt="makeinindia" className="makeinindialogo" />
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 footer-bottom-cont">
          <h4><TelegramIcon sx={{ fontSize: 30, marginRight: 1 }} /> Get In Touch!</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register('name', { required: true })} className="my-3" fullWidth id="outlined-basic" variant='outlined' label="Name" />
            <TextField {...register('email', { required: true })} className="my-3" fullWidth id="outlined-basic" variant='outlined' label="Email" />
            <TextField {...register('message', { required: true })} className="my-3" fullWidth
              id="filled-multiline-static"
              label="Message"
              multiline
              rows={2}
              variant="filled"
            />
            {success && <Alert className="my-2" severity="success">Message Sent Successfully</Alert>}
            <Button type="submit" className="my-3" variant="contained" fullWidth>Submit</Button>
          </form>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
