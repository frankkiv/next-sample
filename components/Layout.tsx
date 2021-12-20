import { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import Modal from "./Modal";

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = "This is the default title" }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      <Modal />
      <footer>
        <hr />
        <span> {`I'm here to stay (Footer)`}</span>
      </footer>
    </div>
  );
}

export default Layout;
