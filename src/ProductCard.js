// ProductCard.js

import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './ProductCard.css'; // Import the CSS file

// Create a custom dark theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3', // Teal accent color for buttons
    },
  },
});



const ProductCard = ({ product }) => {
  return (
    <ThemeProvider theme={theme}>
      <Card className="card">
        <CardMedia
          className="cardMedia"
          component="img"
          alt={product.name}
          height="350"
          image={product.image}
        />
        <CardContent className="cardContent">
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions className="cardActions">
          <Button size="small" variant="outlined">
            Add to Cart
          </Button>
          <Button size="small" variant="contained">
            Buy Now
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default ProductCard;
