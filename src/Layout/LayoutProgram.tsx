import { Fragment } from "react";
import { Header } from "../components/layout";
function LayoutProgram(props: any) {
  const children = props.children;

  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}
export default LayoutProgram;
