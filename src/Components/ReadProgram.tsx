import React, { useState } from "react";
import { Program, AnchorProvider, Idl } from "@project-serum/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";

import { Buffer } from "buffer";
import {
  IdlAccountItem,
  IdlTypeDef,
  isIdlAccounts,
} from "@project-serum/anchor/dist/cjs/idl";
import { retriveIdlReadFunctions } from "../utils/retriveIdlFunctions";
import { useWallet } from "@solana/wallet-adapter-react";
import { BorshTypesCoder } from "@project-serum/anchor/dist/cjs/coder/borsh/types";
import { TarsStakingNftProgram } from "./../../tars-idl-types.ts";
import {
  IdlInstruction,
  IdlInstructionAccountItem,
} from "@coral-xyz/anchor/dist/cjs/idl";

if (!window.Buffer) window.Buffer = Buffer;

interface ReadProgramProps {
  idl: anchor.Idl;
  programId: PublicKey;
  provider: AnchorProvider;
}

interface Accounts {
  [accountName: string]: string;
}

interface FunctionData {
  [argName: string]: string | Accounts | undefined;
  accounts?: Accounts;
}

interface FormData {
  [funcName: string]: FunctionData;
}

// Usage:

const ReadProgram: React.FC<ReadProgramProps> = ({
  idl,
  programId,
  provider,
}) => {
  const [formData, setFormData] = useState<FormData>({});
  // const wallet: any = useWallet();
  console.log("formData:", formData, {
    programId: programId.toString(),
    idl,
    provider,
    types: idl.types,
  });
  const [response, setResponse] = useState<string>("");
  // const idlCoder = new IdlCoder(idl);

  const newConnection = new Connection(
    "https://mainnet.helius-rpc.com/?api-key=56aefc81-cea9-4853-be54-d7117f0c4764",
    "processed"
  );
  // const newProvider = new anchor.AnchorProvider(newConnection, wallet, {
  //   preflightCommitment: "processed",
  // });
  // if (idl) {
  //   const types = new BorshTypesCoder(idl);
  //   console.log("types:", types);
  // }

  let program = new anchor.Program(idl as anchor.Idl, {
    connection: newConnection,
  });
  console.log("program:", program);

  // const program = new Program(idl, programId, provider);
  // console.log("program:", program);
  // console.log("program:", program);

  // Filter functions that do not modify state
  const readFunctions = program.idl.instructions.filter(
    (func: IdlInstruction) =>
      !func.accounts ||
      !func.accounts.some((account: IdlInstructionAccountItem) =>
        retriveIdlReadFunctions(account)
      )
  );

  // const readFunctions: any = [];
  console.log("readFunctions:", readFunctions);

  const handleInputChange = (
    funcName: string,
    argName: string,
    value: string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [funcName]: {
        ...prevData[funcName],
        [argName]: value,
      },
    }));
  };

  const handleAccountChange = (
    funcName: string,
    accountName: string,
    value: string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [funcName]: {
        ...prevData[funcName],
        accounts: {
          ...prevData[funcName]?.accounts,
          [accountName]: value,
        },
      },
    }));
  };

  const handleReadFunction = async (
    funcName: string,
    args: IdlInstruction["args"],
    accounts: IdlInstruction["accounts"]
  ) => {
    try {
      // Process function arguments
      // const params = args.map((arg) => {
      //   const value = formData[funcName]?.[arg.name] || "";
      //   return value; // Basic value handling
      // });

      // Process accounts similarly
      const accountKeys = (accounts || []).reduce(
        (acc: Record<string, PublicKey>, account) => {
          const accountKeyString = formData[funcName]?.accounts?.[account.name];
          if (accountKeyString) {
            try {
              acc[account.name] = new PublicKey(accountKeyString);
            } catch (err) {
              console.error(`Invalid PublicKey for ${account.name}:`, err);
              throw new Error(
                `Invalid PublicKey format for account ${account.name}.`
              );
            }
          } else {
            throw new Error(`Account ${account.name} is missing.`);
          }
          return acc;
        },
        {}
      );
      console.log("accountKeys:", accountKeys);

      // console.log("handleReadFunction program:", program.methods);
      // const result = await program.methods[funcName]()
      //   .accounts(accountKeys)
      //   .view(); // or another appropriate method for reading data
      // console.log("Read Result:", result);
      // setResponse(JSON.stringify(result, null, 2));
    } catch (error: any) {
      console.error("Error occurred during read:", error);
      setResponse(`Failed to call function: ${error.message}`);
    }
  };

  const RenderReadFunctions = (readFunctions: IdlInstruction[]) => {
    return (
      <>
        {readFunctions.map((func, index) => {
          console.log("{readFunctions.map  func:", func.args);
          return (
            <div key={index} style={{ marginBottom: "20px" }}>
              <h4>{func.name}</h4>
              {/* {func.args.length > 0 ? (
                <div>
                  <h5>Parameters</h5>
                  {func.args.map((arg, argIndex) => (
                    <div key={argIndex}>
                      <label>
                        {arg.name} (
                        {typeof arg.type === "object"
                          ? JSON.stringify(arg.type)
                          : arg.type}
                        ):{" "}
                      </label>
                      <input
                        type="text"
                        placeholder={`Enter ${arg.name}`}
                        onChange={(e) =>
                          handleInputChange(func.name, arg.name, e.target.value)
                        }
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p>No parameters required.</p>
              )} */}

              {/* {func.accounts && func.accounts.length > 0 && (
                <div>
                  <h6>Accounts</h6>
                  {func.accounts.map((account, accIndex) => (
                    <div key={accIndex}>
                      <label>{account.name} (PublicKey): </label>
                      <input
                        type="text"
                        placeholder={`Enter ${account.name} PublicKey`}
                        onChange={(e) =>
                          handleAccountChange(
                            func.name,
                            account.name,
                            e.target.value
                          )
                        }
                      />
                    </div>
                  ))}
                </div>
              )} */}

              <button
                onClick={async () =>
                  await handleReadFunction(func.name, func.args, func.accounts)
                }
              >
                Read
              </button>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}
    >
      <h3>Read Functions</h3>
      {/* {readFunctions.length > 0 ? (
        <div>{RenderReadFunctions(readFunctions)}</div>
      ) : (
        <p>No read functions available.</p>
      )} */}
      <div>
        <h3>Response</h3>
        <pre>{response}</pre>
      </div>
    </div>
  );
};

export default ReadProgram;
