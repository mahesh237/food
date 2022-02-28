import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  const { products, onAdd } = props;
 
  return (
    <main className="block col-2">
    <div className="column">
      {products.map((product) => (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained'>+</Button>
        <Button variant='contained' color='error'>-</Button>
      </CardActions>
    </Card>
    ))}
    </div>
    </main>
  );
}
