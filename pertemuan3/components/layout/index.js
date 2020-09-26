import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const layout = (props) => {
  const styles = useStyles();
  const { children } = props;
  const router = useRouter();


  return (
    <main>
      <ul className={styles.navSytle}>
        <li className={styles.liStytle}>
          <Link href="/">
            <a> 
              <img src="/ICUBE.png" alt="icon" className="icon"/>
            </a>
          </Link>
        </li>
        <li className={styles.cartRight}>
          <Link href="/cart">
            <a><img src="/cart.svg" alt="icon" className="cartIcon"/></a>
          </Link>
        </li>
      </ul>
      <div className="container">{children}</div>
    </main>
  );
};


const footer = () => {
  return (
    <div className="footer-v2">
      <div>
        
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  btnTest: {
    color: "green",
    background: "salmon",
  },
  navSytle: {
    background: "#0e0423f2",
    display: "inline-block",
    listStyleType: "none",
    width: "100%",
    color: "whitesmoke",
    paddingRight: 25,
    paddingLeft: 25,
  },
  liStytle: {
    display: "inline-block",
  },
  cartRight: {
    float: "right",
    height: "100%",
    display: "inline-block",
  },
});
export default layout;