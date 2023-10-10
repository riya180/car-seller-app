import * as React from "react";
import { Box, Grid } from "@mui/material";
import ProductCard from "./Product_Card";


export default function ProductList() {
  const cards = [
    { tittle: "Tata Nexon", year: "2021", Image:"imageUrl", engine:"Hybride", speed:"6.1km/1-litre", price:"$440/month"},
    { tittle: "Baleno", year: "2022", Image:"imageUrl", engine:"Gasoline", speed:"6km/1-litre", price:"$350/month"},
    { tittle: "BMW", year: "2024", Image:"imageUrl", engine:"Gasoline", speed:"6.5km/1-litre", price:"$400/month"},
    { tittle: "Audi", year: "2025",  Image:"imageUrl", engine:"Gasoline", speed:"6.2km/1-litre", price:"$620/month"},
    { tittle: "Tata Nano", year: "2026",  Image:"imageUrl", engine:"Gasoline", speed:"5.5km/1-litre", price:"$530/month"},
    { tittle: "Honda city", year: "2020", Image:"imageUrl", engine:"Gasoline", speed:"5.9km/1-litre", price:"$490/month"},
  ];
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ProductCard
            imageUrl={"assets/car2.jpg "}
            tittle={cards[0].tittle}
            year={cards[0].year}
            engine={cards[0].engine}
            speed={cards[0].speed}
            price={cards[0].price}
          />
        </Grid>

        <Grid item xs={4}>
          <ProductCard
            imageUrl={"assets/car7.jpg "}
            tittle={cards[1].tittle}
            year={cards[1].year}
            engine={cards[1].engine}
            speed={cards[1].speed}
            price={cards[1].price}
          />
        </Grid>

        <Grid item xs={4}>
          <ProductCard
            imageUrl={"assets/car3.jpg "}
            tittle={cards[2].tittle}
            year={cards[2].year}
            engine={cards[2].engine}
            speed={cards[2].speed}
            price={cards[2].price}
          />
        </Grid>
        <Grid item xs={4}>
          <ProductCard
            imageUrl={"assets/car4.jpg "}
            tittle={cards[3].tittle}
            year={cards[3].year}
            engine={cards[3].engine}
            speed={cards[3].speed}
            price={cards[3].price}
          />
        </Grid>
        <Grid item xs={4}>
          <ProductCard
            imageUrl={"assets/car5.jpg "}
            tittle={cards[4].tittle}
            year={cards[4].year}
            engine={cards[4].engine}
            speed={cards[4].speed}
            price={cards[4].price}
          />
        </Grid>
        <Grid item xs={4}>
          <ProductCard
            imageUrl={"assets/car6.jpg "}
            tittle={cards[5].tittle}
            year={cards[5].year}
            engine={cards[5].engine}
            speed={cards[5].speed}
            price={cards[5].price}
          />
        </Grid>
      </Grid>
    </Box>
   
  );
}
