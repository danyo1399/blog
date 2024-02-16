import Giscus from "./Giscus";
import "./styles.css";
export default function Layout(props: any) {
  return (
    <>
      <div className="leading-8">{props.children}</div>
      <Giscus/>
    </>
  );
}
