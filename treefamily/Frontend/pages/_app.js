import "../styles/globals.css";
import { SessionProvider } from "next-auth/react"
import { SWRConfig } from 'swr'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <SWRConfig
        value={{
          refreshInterval: 60,
          fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </SessionProvider>
  );
}

export default MyApp;
