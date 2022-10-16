import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const ShowDetails = (props) => {

  const [showdata, setShowData] = useState([]);
  useEffect(() => {
    const fetchData = async() => {
      const config = {
        headers: {
          token: localStorage.getItem('token')
        },
      }
      const input = props.input;
      const response =await axios.get(`http://13.127.208.70:8000/api/search?show=${input}`,config)
      const details = await response.json()
      setShowData(details.slice(0,15))
    }
    fetchData()
  },[])

  return (


  //   <Card sx={{ maxWidth: 345 }}>
  //   <CardMedia
  //     component="img"
  //     height="140"
  //     image="/static/images/cards/contemplative-reptile.jpg"
  //   />
  //   <CardContent>
  //     <Typography gutterBottom variant="h5" component="div">
  //       Lizard
  //     </Typography>
  //     <Typography variant="body2" color="text.secondary">
  //       Lizards are a widespread group of squamate reptiles, with over 6,000
  //       species, ranging across all continents except Antarctica
  //     </Typography>
  //   </CardContent>
  //   <CardActions>
  //     <Button size="small">Share</Button>
  //     <Button size="small">Learn More</Button>
  //   </CardActions>
  // </Card>

  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {showdata.map((details, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            {/* <Item>xs=2</Item> */}
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image= {details.show.image.medium}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {details.show.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {details.show.summary}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {details.show.type}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {details.show.language}
                </Typography> */
                <Typography variant="h6" color="text.secondary">
                  {details.show.genres}
                </Typography> */
                <Typography variant="h6" color="text.secondary">
                  {details.show.status}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {details.show.schedule}
                 </Typography>
                </CardContent>
                <CardActions>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
  </Box>

  )
}

export default ShowDetails