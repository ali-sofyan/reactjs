import { gql, useQuery } from "@apollo/client";
import { withApollo } from "../../lib/apollo";
import Layout from "../../components/layout";
import { Typography, Grid, Button, Paper, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
    name @client
  }
`
;

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;


const ReadState = () => {
    const classes = useStyles();
    const { data } = useQuery(IS_LOGGED_IN);

    const { data: cart } = useQuery(GET_CART_ITEMS);
  
//   const { data: discount } = useQuery(GET_PRODUCT_DISCOUNT);

    console.log(data)

    const product = cart.cartItems;
    console.log(product);
    return (
        <Layout>
        <Grid container spacing={12} justify="center">
            <Typography className={classes.pageTitle} variant="h3" component="h3">
                Cart Page
            </Typography>
            <Grid item xs={8}>
            {product.length > 0 ? (
                <TableContainer component={Paper}>
                    <Table className="aku" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Qty</TableCell>
                            <TableCell>Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {product.map((val, idx) => {
                            return (
                            <TableRow key={idx}>
                                <TableCell component="th" scope="row">
                                <img 
                                    className={classes.imgProduct}
                                    src={val.img}
                                    alt={val.name}
                                />
                                </TableCell>
                                <TableCell>{val.name}</TableCell>
                                <TableCell>{val.qty}</TableCell>
                                <TableCell>${val.price}</TableCell>
                            </TableRow>
                            );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
            <p>Anda belum menambahkan product</p>
            )}
            </Grid>

            <Grid item xs={3}>
                <div className="sidebar cart-page">
                    <ul className="avg">
                        <li>
                            <span className="text">Total :</span>
                            <span className="price">Rp. 500.000</span>
                        </li>
                        <li>
                            <span className="text">Pengiriman :</span>
                            <span className="price">Rp. 0</span>
                        </li>
                        <li>
                            <span className="text">Diskon :</span>
                            <span className="price">Rp. 50.000</span>
                        </li>
                    </ul>
                    <ul className="subtotal">
                        <li>
                            <span className="text">Sub Total :</span>
                            <span className="price">Rp. 450.000</span>
                        </li>
                    </ul>
                    <button className="cta">Go to checkout</button>
                </div>
            </Grid>
        </Grid>
       </Layout>
    );
};

const useStyles = makeStyles((theme) => ({
    pageTitle: {
        display: "block",
        width: "100%",
        textAlign: "center",
        marginBottom: 35,
    },
    imgProduct: {
        maxWidth: 150,
    },
  }));

export default withApollo({ ssr: false })(ReadState);