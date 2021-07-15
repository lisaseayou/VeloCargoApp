import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "80px",
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function SortBy() {
  const classes = useStyles();
  const [sort, setSort] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChangeSort = (event) => {
    if (value === 20) {
      axios.get("http://localhost:3030/ads")
    }
    setSort(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };



  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          TRIER PAR
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={sort}
          onChange={handleChangeSort}
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value={10}>Plus récents</MenuItem>
          <MenuItem value={20}>Plus anciens</MenuItem>
          <MenuItem value={30}>Prix croissant</MenuItem>
          <MenuItem value={40}>Prix décroissant</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
