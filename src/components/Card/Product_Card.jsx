
import { Card,CardMedia,Paper,Typography, Button, Box} from '@mui/material';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Divider from '@mui/material/Divider';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Card.css';

export default function ProductCard(props) {
  return (
   
    <Card>
      <Paper>
        <CardMedia
          component="img"
          height="140"
          image={props.imageUrl}
          alt="Tata Nexon"
          />
        </Paper>
        <Typography className='button_year '>
        <Typography gutterBottom variant="h5" component="div">
            {props.tittle}
          
        <Button  className='button' variant="outlined">{props.year}</Button>
        </Typography>
        </Typography>
        <Typography> 
        <GroupOutlinedIcon fontSize="large" color='primary'/> 4 people 
        <LocalGasStationIcon fontSize="large" color='primary'/>{props.engine}
        </Typography>
<Typography>
        <SpeedOutlinedIcon fontSize="large" color='primary'/>{props.speed}
        <CatchingPokemonIcon fontSize="large" color='primary'/>Automatic</Typography>   
      
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}></Box>
      <Typography>{props.price} 
      
      <FavoriteBorderIcon fontSize="large" color='primary' Button = ""/>
      <Button  className='rent_button' variant="outlined">Rent now</Button>
    
      
      </Typography>
    
    </Card>
    
  );
}

