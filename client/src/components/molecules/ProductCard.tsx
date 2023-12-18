import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ICar {
  name: string;
  brand: string;
  image: string;
}

interface ICardProduct {
  data: ICar;
}

const UICardProduct: React.FC<ICardProduct> = (
  { data }
) => {
  const { name, brand, image } = data;
  return (
    <Card sx={{ maxWidth: 345, marginBottom: '1rem' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {brand}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Order</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
}

export default UICardProduct;