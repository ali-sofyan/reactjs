const Page = (props) => {
    return <div>Contoh static path: {props && props.url ? props.url.staticpath : 'none'}</div>;
  };
  export async function getStaticPaths() {
    return {
      paths: [
        { params: { staticpath: "1" } },
        { params: { staticpath: "2" } },
        { params: { staticpath: "3" } },
        { params: { staticpath: "4" } }
      ],
      fallback: false,
    };
  }
  export async function getStaticProps({ params }) {
    return {
      props: {
        url: params,
      },
    };
  }
  export default Page;