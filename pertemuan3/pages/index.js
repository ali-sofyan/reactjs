import Layout from "../components/layout";
import { useQuery, gql } from "@apollo/client";
import { withApollo } from "../lib/apollo";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(8),
  }
}));


const CATEGORY_LIST = gql`
  {
    categoryList(filters: { ids: { eq: "2" } }) {
      children {
        id
        name
        url_key
        children {
          id
          name
          url_key
          children {
            id
            name
            url_key
          }
        }
      }
    }
  }
`;
function Home() {
  const classes = useStyles();
  const response = useQuery(CATEGORY_LIST);
  const { loading, error, data } = response;
  if (loading) {
    return <Layout>Loading ...</Layout>;
  }
  if (error) {
    return <Layout>Error...</Layout>;
  }

  const category = data.categoryList;

  return (
    <>
      <Layout>
        <Banner />
        <h2 className="title-home">Our collection</h2>

        <List component="nav" className={classes.root}>
          {category[0].children.map((val, key) => {
            return (
              <div key={key} style={{marginBottom:20, borderBottom:'1px solid #ccc'}}>
                <ListItem  button>
                  <Link href="/category/[id]" as={`/category/${val.url_key}`}>
                    <ListItemText primary={val.name} />
                  </Link>
                </ListItem>
                {val.children.length > 0 && (
                  <List component="div" disablePadding>
                    {val.children.map((valchild) => {
                      return (
                        <ListItem
                          key={valchild.id}
                          button
                          className={classes.nested}
                        >
                          <Link
                            href="/category/[id]"
                            as={`/category/${valchild.url_key}`}
                          >
                            <ListItemText primary={valchild.name} />
                          </Link>
                        </ListItem>
                      );
                    })}
                  </List>
                )}
              </div>
            );
          })}
        </List>
      </Layout>
    </>
  );
}

const Banner = () => {
  return (
    <div>
      <span>
        <img src="/banner.jpg" alt="icon" className="banner"/>
      </span>
    </div>
  )
};

export default withApollo({ ssr: true })(Home);
