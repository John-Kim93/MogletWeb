import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
// import { ReactQueryDevtools } from "react-query/devtools";
import '../styles/globals.css'

 // Create a react query client
 const queryClient = new QueryClient()

export default function App({ Component, pageProps} :AppProps ) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}