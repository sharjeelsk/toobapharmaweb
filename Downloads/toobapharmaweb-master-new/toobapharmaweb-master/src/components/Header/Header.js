import React from 'react'
import "./Header.scss"
import {Link} from 'react-router-dom'
import iconImage from '../../assets/toobapharamsub.png'
import {connect} from 'react-redux'
import Button from '@mui/material/Button'
import "./Header.scss"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DownloadIcon from '@mui/icons-material/Download';
import toobalogo from '../../web data/tooba new logo 2019.png'

const Header = (props) => {
	React.useEffect(()=>{

	},[props.user])
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
	  setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
	  setAnchorEl(null);
	};

	const [anchorEl2, setAnchorEl2] = React.useState(null);
	const open2 = Boolean(anchorEl2);
	const handleClick2 = (event) => {
	  setAnchorEl2(event.currentTarget);
	};
	const handleClose2 = () => {
	  setAnchorEl2(null);
	};
console.log(props);
	return (
        <div className="p-4 rounded" style={{margin:"auto 5%"}}>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark   navbarclass " >
	<div className="container-fluid">
        <Link to="/"><img src={toobalogo} className="logoimg" alt="eventfavicon" /></Link>
		{/* <Link className="navbar-brand"  style={{color:"black"}} to="/"><img style={{height:"6vh"}} src={Logo} /></Link> */}
	<button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
		<span className="navbar-toggler-icon" ></span>
	</button>
	<div className="collapse navbar-collapse" id="navbarResponsive">
		<ul className="navbar-nav ml-auto" id="nav">
			<li className="nav-item">
			<div>
			<Button
			className="hover-button"
				id="basic-button"
				aria-controls={open2 ? 'basic-menu' : undefined}
				popup="true"
				aria-expanded={open2 ? 'true' : undefined}
				onClick={handleClick2}
				color="secondary"
				sx={{fontSize:16}}
				endIcon={<ArrowDropDownIcon />}
			>
				About us
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl2}
				open={open2}
				onClose={handleClose2}
				MenuListProps={{
				'aria-labelledby': 'basic-button',
				}}
			>
				<Link className="color-black" to="/overview"><MenuItem onClick={handleClose2}>Overview</MenuItem></Link>
				<Link className="color-black" to="/chairman"><MenuItem onClick={handleClose2}>Chairman's Message</MenuItem></Link>
				<Link className="color-black" to="/vision"><MenuItem onClick={handleClose2}>Vision, Mission, Values</MenuItem></Link>
				<Link className="color-black" to="/infrastructure"><MenuItem onClick={handleClose2}>Infrastructure</MenuItem></Link>
			</Menu>
			</div>
			</li>
			<li className="nav-item">
			<Link to="products">
			<Button
			className="hover-button"
			color="secondary"
			sx={{fontSize:16}}
			>Products</Button>
			</Link>
			</li>
			<li className="nav-item">
			<Link to="rdcrams">
			<Button
			className="hover-button"
			color="secondary"
			sx={{fontSize:16}}
			>Services</Button>
			</Link>
			</li>
			{/* <li className="nav-item">
			{props.userToken?
			<Link  className="nav-link active" to="/dashboard">
				<Button
				className="hover-button" sx={{fontSize:"1.1rem"}} variant="contained" size="large" className="btn-purple">dashboard</Button>
				</Link>:
			<Link  className="nav-link"  to="/signup">
				<Button
				className="hover-button" sx={{fontSize:"1.1rem"}} variant="contained" size="large"  className="btn-purple">SignUp</Button>
				</Link>}
			</li> */}
		<li class="nav-item">
		<div>
      <Button
	  className="hover-button"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        popup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
		color="secondary"
		sx={{fontSize:16}}
		endIcon={<ArrowDropDownIcon />}
      >
        Media
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link className="color-black" to="/multimedia"><MenuItem onClick={handleClose}>Multimedia</MenuItem></Link>
        <MenuItem onClick={handleClose}>News</MenuItem>
        <MenuItem onClick={handleClose}>Press Releases</MenuItem>
      </Menu>
    </div>
        </li>

		<li className="nav-item">
			<Link to ="/careers">
			<Button
			className="hover-button"
			color="secondary"
			sx={{fontSize:16}}
			>Careers</Button>
			</Link>
			</li>
			<li className="nav-item">
			<Link className="color-black" to="/contact">
			<Button
			className="hover-button"
			color="secondary"
			sx={{fontSize:16}}
			>Contact</Button>
			</Link>
			</li>

		

			<li className="nav-item">
			<a className="anchor" href="/BROCHURE.pdf" download="TPPL BROCHURE">
   			<Button endIcon={<DownloadIcon />} variant="contained">Download Brochure
   			</Button>
   			</a>
			</li>	
		
		</ul>
	</div>
</div>
</nav>
</div>
    );

}
const mapStateToProps =({EventUser})=>{
	return {
		userToken:EventUser.user
	}
	}
export default connect(mapStateToProps)(Header);