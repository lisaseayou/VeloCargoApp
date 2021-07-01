import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardAds from "./CardAds";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    marginLeft: "90%",
    marginBottom: "30px",
    borderRadius: "15px",
    color: "black",
  },
  title: {
    margin: "50px",
    display: "flex",
    justifyContent: "center",
  },
  marketplace: {
    marginTop: "30px",
    display: "grid",
    gridTemplateColumns: "300px 300px 300px",
    gridTemplateRows: "400px 400px",
    gridGap: "60px",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
  },
}));


const adsCard = [
    {
      id: "1",
      photo: "https://source.unsplash.com/random?bike/4",
      title: "Vélo Cargo",
      price: "1230 €",
      city: "Bordeaux",
    },
    {
      id: "2",
      photo: "https://source.unsplash.com/random?bike/5",
      title: "Vélo Cargo",
      price: "1380 €",
      city: "Bordeaux",
    },
    {
      id: "3",
      photo: "https://source.unsplash.com/random?bike/6",
      title: "Vélo Cargo",
      price: "1560 €",
      city: "Bordeaux",
    },
    {
      id: "4",
      photo: "https://source.unsplash.com/random?bike/7",
      title: "Vélo Cargo",
      price: "1800 €",
      city: "Bordeaux",
    },
    {
      id: "5",
      photo: "https://source.unsplash.com/random?bike/8",
      title: "Vélo Cargo",
      price: "2300 €",
      city: "Bordeaux",
    },
    {
      id: "6",
      photo: "https://source.unsplash.com/random?bike/9",
      title: "Vélo Cargo",
      price: "2580 €",
      city: "Bordeaux",
    },
  ];


function ListAdsHomePage(props) {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title} variant="h5">
        ACHETER UN VELO CARGO
      </Typography>

      <div className={classes.marketplace}>
        {adsCard.map((card, index) => (
          <CardAds {...card} key={index} />
        ))}
      </div>

      <Button variant="contained" color="secondary" className={classes.button}>
        Voir Plus
      </Button>
    </div>
  );
}

export default ListAdsHomePage;
