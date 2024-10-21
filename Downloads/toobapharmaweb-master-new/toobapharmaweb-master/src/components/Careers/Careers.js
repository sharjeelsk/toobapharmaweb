import React from 'react'
import "./Careers.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {TextField,Button} from '@mui/material'
import {useForm} from 'react-hook-form'
import emailjs from 'emailjs-com';
import Alert from '@mui/material/Alert';

function Careers(props) {
  const {handleSubmit,formState:{errors},register} = useForm()
  const [success,setSuccess] = React.useState(null)
  const onSubmit = (data,e)=>{
    console.log(data);
    //setLoading(true)
    //console.log()
    emailjs.sendForm('service_3thpv83', 'template_yqfxpve',e.target, 'dvNOkhu6NNNUpisYu')
    .then((result) => {
        console.log(result.text);
        setSuccess(true)
        //setLoading(false)
        setTimeout(() => {
          setSuccess(false)
          props.history.push("/")  
        }, 3000);
        
    }, (error) => {
        console.log(error);
        //setLoading(false)
    });
}
  return (
    <div>
        <Header />
            <div className="careers">
              <h1 className="my-5 py-5">Kindly send your resume on info@toobapharma.in</h1>
                {/* <h1>Careers</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <TextField {...register('name',{required:true})} className="my-3" fullWidth id="outlined-basic" variant='outlined' label="Name" />
                <TextField {...register('email',{required:true})} className="my-3" fullWidth id="outlined-basic" variant='outlined' label="Email" />
                <TextField {...register('description',{required:true})} className="my-3" fullWidth
                id="filled-multiline-static"
                label="Description"
                multiline
                rows={4}
                // defaultValue="Default Value"
                variant="filled"
                />
                {success&&<Alert className="my-2" severity="success">Message Sent Successfully</Alert>}
                <Button type="submit" className="my-3" variant="contained" fullWidth>Submit</Button>
                </form> */}
            </div>

        <Footer />
    </div>
  )
}

export default Careers