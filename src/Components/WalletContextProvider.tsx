// import React from 'react';
// import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
// import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
// import { clusterApiUrl } from '@solana/web3.js';
// import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
// require('@solana/wallet-adapter-react-ui/styles.css');

// const WalletContextProvider = ({ children }) => {
//   const endpoint = clusterApiUrl('devnet');
//   const wallets = [new PhantomWalletAdapter()];

//   return (
//     // <ConnectionProvider endpoint={endpoint}>
//       <WalletProvider wallets={wallets}>
//         <WalletModalProvider>
//           {children}
//         </WalletModalProvider>
//       </WalletProvider>
//     </ConnectionProvider>
//   );
// };

// export default WalletContextProvider;
