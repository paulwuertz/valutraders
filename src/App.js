import logo from './logo.svg';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css';
import Grid from '@mui/material/Grid';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
  return <h1>Home</h1>;
};

const Blogs = () => {
  return <h1>Blog Articles</h1>;
};

const Contact = () => {
  return <h1>Contact Me</h1>;
};


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <a color="inherit" href="https://mui.com/">
        Your Website
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function CitySelector(){
  return(
<Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Valuta Raider
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Always get the best bargain on your currency exchanges.'}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Sourced by the community :)'}
        </Typography>

        <Grid container spacing={2}>
        <Grid item xs={6} key={0}>
        <Card sx={{ maxWidth: 450 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="https://get.pxhere.com/photo/water-bridge-chateau-river-cityscape-reflection-landmark-prague-tourism-waterway-place-of-worship-old-town-historically-czech-republic-moldova-stone-bridge-charles-bridge-tours-570166.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Best exchange rates in Prague
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
        <Grid item xs={6} key={1}>
        <Card sx={{ maxWidth: 450 }}>
          <CardActionArea>
            <Link href="/budapest" color="inherit">
            <CardMedia
              component="img"
              height="250"
              image="https://cdn.pixabay.com/photo/2017/07/13/13/29/budapest-2500385_1280.jpg"
              alt="green iguana"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Best exchange rates in Budapest
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            </Link>
          </CardActionArea>
        </Card>
        </Grid>
        </Grid>
      </Container>
  )
}

function MainPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', }} >
      <CssBaseline />
    <Router>
      <Routes>
        <Route exact path="/" element={<CitySelector />}></Route>
        <Route path="/budapest" element={<Blogs />}></Route>
        <Route path="/prague" element={<Contact />}></Route>
      </Routes>
    </Router>
      <Box component="footer"
        sx={{
          py: 3, px: 2, mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Get in contact with us to become a contributer!
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}

export default function App() {
  return (
      <MainPage></MainPage>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));


