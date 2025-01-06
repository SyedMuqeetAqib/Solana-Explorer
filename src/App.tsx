import React, { useState, useEffect, ReactEventHandler } from "react";
import axios from "axios";
import * as anchor from "@project-serum/anchor";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import TarsIdl from "./../tars-idl.json";
import DojoIdl from "./../dojo-idl.json";
import MessageProgramIdl from "./../message_program.json";

import ReadProgram from "./Components/ReadProgram";
import WriteProgram from "./Components/WriteProgram";
import { extractSeedsFromIdl } from "./utils/extractSeeds";

function App() {
  const [provider, setProvider] = useState<anchor.AnchorProvider | null>(null);
  const [programId, setProgramId] = useState<string>("");
  const [idlFile, setIdlFile] = useState<File | null>(null);
  const [idl, setIdl] = useState<any>(null);
  console.log("idl:", idl);
  const [showRead, setShowRead] = useState(false);
  const [showWrite, setShowWrite] = useState(false);
  const [response, setResponse] = useState("");
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  // Effect to check for Phantom Wallet
  useEffect(() => {
    const checkWallet = async () => {
      if (window.solana) {
        const { publicKey } = window.solana;
        if (publicKey) {
          // If wallet is already connected, create provider
          await createProvider(publicKey);
        }
      } else {
        console.log("Phantom wallet not found. Please install it.");
      }
    };

    checkWallet();
  }, []);

  // Function to create provider
  const createProvider = async (publicKey: anchor.Wallet["publicKey"]) => {
    const connection = new Connection(
      "https://mainnet.helius-rpc.com/?api-key=56aefc81-cea9-4853-be54-d7117f0c4764",
      "confirmed"
    );

    const walletProvider = new anchor.AnchorProvider(
      connection,
      {
        publicKey: publicKey,
        signTransaction: async (transaction) => {
          return await window.solana.signTransaction(transaction);
        },
        signAllTransactions: async (transactions) => {
          return await window.solana.signAllTransactions(transactions);
        },
      },
      {}
    );

    anchor.setProvider(walletProvider);
    setProvider(walletProvider);
    console.log("wallet provider", walletProvider);
    setWalletConnected(true);
    setWalletAddress(publicKey.toString()); // Store the connected wallet address
    console.log("Wallet connected:", publicKey.toString());
  };

  // Handle wallet connection
  const handleConnectWallet = async () => {
    if (window.solana) {
      try {
        const wallet = await window.solana.connect();
        await createProvider(wallet.publicKey);
      } catch (err) {
        console.error("Failed to connect to Phantom wallet:", err);
      }
    } else {
      console.log("Phantom wallet not found. Please install it.");
    }
  };

  // Handle file selection
  const handleIdlFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setIdlFile(event.target.files[0]);
    }
  };

  // Upload IDL and initialize the program
  const handleLoadProgram = async () => {
    try {
      if (!programId) {
        alert("Program ID: " + programId);
        return;
      }

      const formData = new FormData();
      formData.append("programId", programId.toString());
      formData.append("idlFile", idlFile ?? "no IDL");
      // const result = await axios.post(
      //   "http://localhost:5000/api/load-program",
      //   formData,
      //   {
      //     headers: { "Content-Type": "multipart/form-data" },
      //   }
      // );
      // setIdl(result.data.idl);
      // setIdl(TarsIdl);
      // setIdl(MessageProgramIdl);
      setIdl(DojoIdl);
      // setResponse(`Program loaded: ${result.data.message}`);
      setResponse("Program loaded.");
    } catch (error) {
      console.error(error);
      setResponse("Failed to load program.");
    }
  };

  return (
    <div className="App">
      <h2>Solana Program Interaction</h2>

      {/* Connect Wallet Button */}
      <div>
        <button onClick={handleConnectWallet} disabled={walletConnected}>
          {walletConnected ? "Wallet Connected" : "Connect Wallet"}
        </button>
      </div>

      {/* Display Connected Wallet Address */}
      {walletConnected && (
        <div>
          <h4>Connected Wallet Address:</h4>
          <p>{walletAddress}</p>
        </div>
      )}
      <div>
        Test
        {provider && (
          <button
            onClick={async () => {
              const connection = new Connection(
                "https://mainnet.helius-rpc.com/?api-key=56aefc81-cea9-4853-be54-d7117f0c4764",
                "confirmed"
              );

              // // Program ID of the target program
              // const programId = new PublicKey(
              //   "DVLuxrzJipjRsHmRyai9cyoBwqrzr394aokbfqUnLkFB"
              // );

              const programId = new PublicKey(
                "EDLE5Tnw2x4po1ZGRBYPYVnjKAJAJCJzKFi8RiRuN4xs"
              );

              // Fetch all accounts owned by the program
              // const accounts = await connection.getProgramAccounts(programId);
              // console.log("onClick={  accounts:", accounts);

              const idl = await anchor.Program.fetchIdl(programId);
              console.log("onClick={  idl:", idl);
              if (idl) {
                const seeds = await extractSeedsFromIdl(idl);
                console.log("onClick={  seeds:", seeds);
              }
              // let coder;

              // Iterate and log details
              // accounts.forEach(async (account) => {
              //   if (idl) {
              //     coder = new anchor.BorshCoder(idl);
              //     // // Define the account to fetch
              //     // const accountData = await connection.getAccountInfo(
              //     //   new PublicKey(account.pubkey.toBase58())
              //     // );

              //     // Deserialize account data using the coder

              //     const deserializedData = coder.accounts.decode(
              //       "MyAccount",
              //       account.account.data
              //     );
              //     console.log({
              //       AccountAddress: account.pubkey.toBase58(),
              //       idl,
              //       deserializedData,
              //       AccountData: account.account.data, // Raw data
              //       Lamports: account.account.lamports,
              //       Owner: account.account.owner.toBase58(),
              //       IsExecutable: account.account.executable,
              //     });
              //   }
              // });
            }}
          >
            getProgramAccounts
          </button>
        )}
      </div>
      {/* Program Initialization */}
      <div>
        <h3>Load Program</h3>
        <input
          type="text"
          placeholder="Program ID"
          value={programId}
          onChange={(e) => setProgramId(e.target.value)}
        />
        <input type="file" accept=".json" onChange={handleIdlFileChange} />
        <button onClick={handleLoadProgram} disabled={!walletConnected}>
          Load Program
        </button>
      </div>

      {/* Buttons to toggle views */}
      <div>
        <button
          onClick={() => {
            setShowRead(true);
            setShowWrite(false);
          }}
          disabled={!walletConnected}
        >
          Read Functions
        </button>
        <button
          onClick={() => {
            setShowWrite(true);
            setShowRead(false);
            console.log(provider);
          }}
          disabled={!walletConnected}
        >
          Write Functions
        </button>
      </div>

      {/* Show Read or Write Program based on button click */}
      {showRead && idl && new PublicKey(programId) && provider && (
        <ReadProgram
          idl={idl}
          programId={new PublicKey(programId)}
          provider={provider}
        />
      )}
      {showWrite && idl && (
        <WriteProgram idl={idl} programId={programId} provider={provider} />
      )}

      {/* Response */}
      <div>
        <h3>Response</h3>
        <pre>{response}</pre>
      </div>
    </div>
  );
}

export default App;
