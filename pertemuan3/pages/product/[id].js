import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { withApollo } from "../../lib/apollo";
import { Typography, Grid, Button, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";


import { cache } from "../../lib/apollo/client";
import { cartItemsVar } from "../../apollo/resolver";

const PRODUCT_DETAIL = gql`
  query Product($id: String!) {
    products(filter: { url_key: { eq: $id } }) {
      items {
        id
        name
        description {
          html
        }
        image {
          url
        }
        price_range {
          maximum_price {
            final_price {
              value
              currency
            }
          }
          minimum_price {
            final_price {
              value
              currency
            }
          }
        }
      }
    }
  }
`;

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
    name @client
  }
`;


function ProductPage() {
  const [count, setCount] = useState(0);
  const classes = useStyles();
  const router = useRouter();
  const id = router.query.id;

  const response = useQuery(PRODUCT_DETAIL, {
    variables: { id: id },
  });

  const { loading, error, data } = response;

  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return <Layout>Error ...</Layout>;
  }

  const products = data.products.items;

  // local state apollo
  const cartItems = cartItemsVar();
  const item = [
    {
      id: products[0].id,
      name: products[0].name,
      price: products[0].price_range.minimum_price.final_price.value.toFixed(2),
      img: products[0].image.url,
      qty: count,
      isDiscount: false
    }
  ];
  //

  return (  
    <Layout>
      <Grid container spacing={12} justify="center">
        <Grid item xs={6}>
          <img
            className={classes.productimage}
            src={products[0].image.url}
            alt={products[0].name}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.productName} variant="h4" component="h4">
            {products[0].name}
          </Typography>
          <Typography className={classes.price} variant="h6" component="h6">
            {`${
              products[0].price_range.minimum_price.final_price.currency
            } ${products[0].price_range.minimum_price.final_price.value.toFixed(
              2
            )}`}
          </Typography>
          <div className="qty-box">
              <span className="qty-ket"> QTY : </span>
              <button onClick={() => setCount(count - 1)} className={classes.buttonQty}><span>-</span></button>        
              <span className="qty"> {count} </span>
              <button onClick={() => setCount(count + 1)} className={classes.buttonQty}><span>+</span></button>
          </div>

          <button
            onClick={() => {
              if (count < 1){
                alert("QTY tidak boleh kurang dari satu!");
              }else{
                // user
                cache.writeQuery({
                  query: IS_LOGGED_IN,
                  data: {
                    isLoggedIn: true,
                    name: "sofyan",
                  },
                });

                // product
                cartItemsVar([...cartItems, ...item]);
                alert("Product berhasil dimasukan!");
              }
            }}
          className="cta">
          Add to cart
          </button>

          <div className="desc">
            <span className="desc-title">Description</span>
            <div
              className={classes.productdesc}
              dangerouslySetInnerHTML={{ __html: products[0].description.html }}
            />
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
}
const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  formCart: {
    display: "grid",
    gridTemplateColumns: "10% 30%",
    columnGap: "20px",
    marginTop: 20,
  },
  productimage: {
    width: "100%",
  },
  productName: {
    marginTop: 40,
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
  productdesc: {
    fontSize: 14,
  },
  price: {
    fontFamily: "Montserrat",
    fontSize: 25,
  },
  productimage: {
    marginTop: 40,
    width: "100%",
  },
  buttonQty: {
    padding: 10,
    width: 38,
    background: "none",
    borderColor: "grey",
  }
}));


export default withApollo({ ssr: true })(ProductPage);
