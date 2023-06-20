import { Grid } from "@mui/material";
import style from "./DataRow.module.css";

interface FinanceData {
  symbol: string
  price: string
  marketCap: string
  change: string
}

export const DataRow = (props: FinanceData) => {

  const change = props.change;
  const changeint: number = parseInt(change, 10);

  return (
    <div className={style.row}>
      <Grid container rowSpacing={3} justifyContent="space-evenly">
        <Grid item xs={3} justifyContent="center">
          <h3 className={style.symbol}>{props.symbol}</h3>
        </Grid>
        <Grid item xs={3} justifyContent="center" alignItems="center">
          <h3 className={style.price}>{props.price}</h3>
        </Grid>
        <Grid item xs={3} justifyContent="center" alignItems="center">
          <h3 className={style.price}>{props.marketCap}</h3>
        </Grid>
        <Grid item xs={3} justifyContent="center" alignItems="center">
          <h3
            className={style.price}
            style={{
              color: changeint >= 0 ? 'green' : 'red',
            }}
          >
            {props.change}
          </h3>
        </Grid>
      </Grid>
    </div>
  );
};
