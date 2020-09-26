import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useQuery, gql } from "@apollo/client";
import Layout from "../components/layout";
import Link from "next/link";
import { withApollo } from "../lib/apollo";
const CATEGORY_LIST = gql`
  {
    categoryList(filters: {}) {
      id
      name
      url_key
      url_path
      display_mode
      children {
        id
        name
        url_key
        url_path
        display_mode
      }
    }
  }
`;
const Category = () => {
  const response = useQuery(CATEGORY_LIST);
  console.log(response);
  const { loading, error, data } = response;
  console.log(loading);
  console.log(data);
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error...</div>;
  }
  const category = data.categoryList;
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <h1>List Category</h1>
          <ul>
            {category.map((val, idx) => {
              return (
                <li key={idx}>
                  <Link href="/product/[id]" as={`/product/${val.id}`}>
                    <a>{val.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};
export default withApollo({ ssr: true })(Category);