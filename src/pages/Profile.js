import React from 'react'
import  { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Header from "../Components/Header";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Avatar from '@mui/material/Avatar';

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';
import { Col,Row } from "react-bootstrap";
import { style } from "@mui/system";

const Profile = () => {


  const [fisrtName, setFirstName] = useState("Muhammad");
  const [lastName, setLastName] = useState("Khubaib Khan");
  const [Password, setPassword] = useState("1122");
  const [email, setEmail] = useState("khubaibKhan@gmail.com");
  


  // Styles
  const Input = styled('input')({
    display: 'none',
  });



  return (
    <div>
 <Card  sx={{ maxWidth: 700  }} style={{margin:'50px auto',borderRadius:"15px",boxShadow:"0 0 10px",background:"#154360"}}>

<Row  > 
<Col xs="12" md="12" style={{textAlign:"center",padding:"20px",margin:"0px auto"}} >
<h3 style={{fontFamily:"",color:"white"}}>
    Profile
  </h3>
  <div style={{minHeight:"200px", maxHeigth:"200px",maxWidth:"200px",margin:"0px auto",marginTop:"20px"}} >
  <Avatar  src="img/tech/bg2.jpeg"    sx={{ height: '170px', width: '170px' ,margin:"0px auto" }}/>
   </div>
    <Row sm="12">
      <Col   xs="3">
      </Col>
      <Col  xs="6">
      <TextField id="outlined-basic" color="secondary"  focused value={fisrtName} fullWidth label="First Name" variant="filled" style={{backgroundColor:"white"}} />
      </Col>
      <Col xs="3">
      </Col>
    </Row>
    <br></br>
    <Row sm="12">
      <Col   xs="3">
      </Col>
      <Col  xs="6">
      <TextField id="outlined-basic" color="secondary"  focused value={lastName}  fullWidth label="Last Name" variant="filled" style={{backgroundColor:"white",borderRadius:"5px"}} />
      </Col>
      <Col xs="3">
      </Col>
    </Row>
    <br></br>
    <Row sm="12">
      <Col   xs="3">
      </Col>
      <Col  xs="6">
      <TextField id="outlined-basic"     color="secondary"  focused       value={email}  fullWidth label="Email" variant="filled" style={{backgroundColor:"white"}} />
      </Col>
      <Col xs="3">
      </Col>
    </Row>
    <br></br>
    <Row sm="12">
      <Col   xs="3">
      </Col>
      <Col  xs="6">
      <TextField id="outlined-basic"  type="password"         color="secondary"  focused  value={Password}  fullWidth label="Password" variant="filled" style={{backgroundColor:"white"}}/>
      </Col>
      <Col xs="3">
      </Col>
    </Row>

    <br></br>
    <br></br>
  <label htmlFor="contained-button-file">
        <Input accept="image/" id="contained-button-file" multiple type="file"   />
        <Button variant="contained" component="span" size='large'  style={{background:"#154360"}}>
          Update Profile
        </Button>
      </label>

<br></br>
  
</Col>
{/* <Col  xs="12" md="4" style={{background:"#154360"}}>
    <div className="sip">
    <h1 className="colh " style={{fontSize:"30px",textAlign:"center"}}>About Image Search</h1>
    <h3 className="colh textsg">Image Based search provides you a great ease.You just need to upload the image of  product we and we will suggest you the products most similar to it</h3>
    </div>
</Col> */}
</Row>


</Card>

    </div>
  )
}

export default Profile