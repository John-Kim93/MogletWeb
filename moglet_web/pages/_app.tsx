import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
// import { ReactQueryDevtools } from "react-query/devtools";
import '../styles/globals.css'
import React from "react"

export default function App({ Component, pageProps} :AppProps ) {
  // Create a react query client
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 30 * 60 * 1000,
        cacheTime: 2 * 60 * 60 * 1000,
      },
    }
  }))
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          {/* <ReactQueryDevtools initialIsOpen={true} /> */}
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}