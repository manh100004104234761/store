import React, { useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField, Typography } from "@material-ui/core";
import CardItem from "../../common/CardItem/CardItem";
import Button from "@material-ui/core/Button";
import Title from "../../common/Title/Title";

const binhluan = [
  "Hay qua",
  "hay ghe",
  "dien thoai xinasdasddasdasdaadsdsssssssssssssssssssssss lam nhe",
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      marginLeft: 40,
    },
  })
);

export default function ItemDetail() {
  const classes = useStyles();
  return (
    <div>
      <Title title="Chi tiết sản phẩm" subTitle="Chi tiết sản phẩm" />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <CardItem
            item={{ image: "", name: "Iphone12", description: "Hello" }}
          />
        </Grid>
        <Grid item xs={8}>
          <div>Heloooooooooooooooooooooooooooo</div>
          <div>
            {binhluan.map((item) => {
              return <h3>{item}</h3>;
            })}
          </div>
          <div>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Binh luan"
            />
            <Button variant="contained">Bình luận</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
