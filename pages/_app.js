/* eslint-disable react/prop-types, react/jsx-props-no-spreading */

import "../styles/globals.css";
import { usePanelbear } from "@panelbear/panelbear-nextjs";
import Page from "../components/page";

export default function CustomApp({ Component, pageProps }) {
  usePanelbear(process.env.NEXT_PUBLIC_PANELBEAR_SITE_ID);

  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
