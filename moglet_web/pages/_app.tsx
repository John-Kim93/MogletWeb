import { AppProps } from 'next/app'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
// import {

// } from '../pages/api'
import '../styles/globals.css'

 // Create a react query client
 const queryClient = new QueryClient()

export default function App({ Component, pageProps} :AppProps ) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}