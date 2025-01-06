import React, { useState, useEffect } from "react";
import PDACalculator from "./PDACalculator"; // Import your PDA component
import { Program, AnchorProvider, web3 } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import { Buffer } from "buffer";
import * as anchor from "@project-serum/anchor";
if (!window.Buffer) window.Buffer = Buffer;

interface WriteProgram {
  programId: string;
  provider: any;
  idl: any;
}

function WriteProgram({ idl, programId, provider }: WriteProgram) {
  const [formData, setFormData] = useState<any>({});
  const [response, setResponse] = useState("");
  const program = new Program(idl, programId, provider);
  // Filter functions that have state-modifying accounts
  const writeFunctions = program.idl.instructions.filter(
    (func: any) =>
      func.accounts &&
      func.accounts.some((account: any) => account.isMut === true)
  );
  // console.log("program",program);

  // Helper function to determine if input should be a Uint8Array
  const handleUint8ArrayConversion = (value: any) => {
    // try {
    //   // Only attempt conversion if the input is in hex format
    //   if (value && /^[0-9A-Fa-f]+$/.test(value)) {
    //     return new Uint8Array(Buffer.from(value, 'hex'));
    //   } else {
    //     throw new Error("Invalid hex string");
    //   }
    // } catch (error) {
    //   console.error("Failed to convert to Uint8Array:", error);
    //   throw new Error("Invalid format for Uint8Array conversion.");
    // }
    // Debugging input values
    console.log("Value being converted:", value);
    if (typeof value === "string" && /^[0-9A-Fa-f]+$/.test(value)) {
      console.log("hola");
      try {
        const uint8Array = new Uint8Array(Buffer.from(value, "hex"));
        console.log("Uint8Array Conversion Successful:", uint8Array);
      } catch (error) {
        console.error("Uint8Array Conversion Failed:", error);
      }
    }
  };
  const handleInputChange = (
    funcName: any,
    argName: any,
    value: any,
    argType: any
  ) => {
    let parsedValue = value;
    let displayValue = value;
    console.log("arg type", argType);
    if (argType === "Uint8Array") {
      try {
        parsedValue = handleUint8ArrayConversion(value);
        displayValue = new Uint8Array(parsedValue.length);
      } catch (error) {
        console.error(`Error converting to Uint8Array for ${argName}:`, error);
      }
    }

    setFormData((prevData: any) => {
      console.log("Updating formData:", prevData); // Log previous state
      return {
        ...prevData,
        [funcName]: {
          ...prevData[funcName],
          [argName]: parsedValue,
          [`${argName}Display`]: displayValue,
        },
      };
    });
  };

  // Update account input values
  const handleAccountChange = (funcName: any, accountName: any, value: any) => {
    setFormData((prevData: any) => ({
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

  const handleWriteFunction = async (
    funcName: any,
    args: any,
    accounts: any
  ) => {
    console.log("accounts", accounts);
    try {
      // Recursive function to parse input values
      const parseInputValue = (value: any) => {
        if (value.startsWith("[") || value.startsWith("{")) {
          value = JSON.parse(value);
        }
        if (Array.isArray(value)) {
          // Handle arrays by parsing each element
          return value.map((item: any) => {
            if (typeof item === "object" && item !== null) {
              // If item is an object, iterate over its keys
              Object.keys(item).forEach((key) => {
                if (typeof item[key] === "string" && item[key].length === 44) {
                  // Convert string of length 44 to PublicKey if applicable
                  try {
                    console.log("item[key] b4", item[key]);
                    item[key] = new web3.PublicKey(item[key]);
                    console.log("item[key]", item[key]);
                  } catch (error) {
                    console.error(
                      `Invalid PublicKey format for key '${key}':`,
                      error
                    );
                    throw new Error(
                      `Invalid PublicKey format for key '${key}'.`
                    );
                  }
                }

                if (typeof item[key] === "number") {
                  item[key] = new anchor.BN(item[key]);
                  console.log("number", item[key]);
                }
              });
            }
            return item;
          });
        }

        if (
          (typeof value === "object" && value !== null) ||
          value === "array"
        ) {
          console.log("value0.2", value);
          // Handle nested objects recursively
          return Object.keys(value).reduce((parsed: any, key) => {
            parsed[key] = parseInputValue(value[key]);
            return parsed;
          }, {});
        }

        // Handle strings of length 44 (assuming potential PublicKey) outside arrays/objects
        if (typeof value === "string" && value.length === 44) {
          try {
            return new web3.PublicKey(value);
          } catch (error) {
            console.error(`Invalid PublicKey format:`, error);
            throw new Error(`Invalid PublicKey format.`);
          }
        }

        //handling numbers
        if (
          typeof value === "string" &&
          !isNaN(Number(value)) &&
          value.trim() !== ""
        ) {
          value = new anchor.BN(value);
          console.log("value.02", value);
        }

        return value; // Return primitive types as-is
      };

      // Process function arguments
      const params = args.map((arg: any) => {
        const value = formData[funcName]?.[arg.name] || "";
        return parseInputValue(value); // Use recursive parsing
      });

      // Process accounts similarly as shown before
      const accountKeys = accounts.reduce((acc: any, account: any) => {
        const accountKeyString = formData[funcName]?.accounts?.[account.name];
        console.log("accountKeyString", accountKeyString);
        if (accountKeyString) {
          try {
            acc[account.name] = new web3.PublicKey(accountKeyString);
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
      }, {});

      // Execute the method call
      // params[1] = new anchor.BN(params[1])
      console.log(
        "Account Keys:",
        accountKeys,
        "Function:",
        funcName,
        "Param:",
        ...params
      );
      const transaction = await program.methods[funcName](...params)
        .accounts(accountKeys)
        .rpc();
      console.log("Transaction Signature:", transaction);
      setResponse(`Transaction Signature: ${transaction}`);
    } catch (error: any) {
      console.error("Error occurred:", error);
      setResponse(`Failed to call function: ${error.message}`);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "60%" }}>
        <h3>Write Functions</h3>
        {writeFunctions.length > 0 ? (
          <div>
            {writeFunctions.map((func: any, index: number) => (
              <div key={index} style={{ marginBottom: "20px" }}>
                <h4>{func.name}</h4>

                {func.args.length > 0 ? (
                  <div>
                    <h5>Parameters</h5>
                    {func.args.map((arg: any, argIndex: number) => (
                      <div key={argIndex}>
                        {/* <label>{arg.name} ({arg.type}): </label> */}
                        <label>
                          {arg.name} (
                          {Array.isArray(arg.type) ? (
                            // Handle case where arg.type is an array
                            <span>
                              {arg.type.map((item: any, index: number) => (
                                <span key={index}>
                                  {typeof item === "object"
                                    ? JSON.stringify(item)
                                    : item}
                                  {index < arg.type.length - 1 ? ", " : ""}
                                </span>
                              ))}
                            </span>
                          ) : // Handle non-array types
                          typeof arg.type === "object" ? (
                            JSON.stringify(arg.type)
                          ) : (
                            arg.type
                          )}
                          ):
                        </label>

                        <input
                          type="text"
                          placeholder={`Enter ${arg.name}`}
                          onChange={(e) =>
                            handleInputChange(
                              func.name,
                              arg.name,
                              e.target.value,
                              arg.type
                            )
                          }
                        />
                        {
                          // console.log('Form Data:', formData)
                        }
                        {formData[func.name]?.[`${arg.name}Display]`] !=
                          null && (
                          <p>
                            Current Value:{" "}
                            {String(formData[func.name][`${arg.name}Display`])}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No parameters required.</p>
                )}

                {func.accounts && func.accounts.length > 0 && (
                  <div>
                    <h6>Accounts</h6>
                    {func.accounts.map((account: any, accIndex: number) => (
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
                        {formData[func.name]?.accounts?.[account.name] && (
                          <p>
                            Current Account:{" "}
                            {formData[func.name]?.accounts[account.name]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <button
                  onClick={async () =>
                    await handleWriteFunction(
                      func.name,
                      func.args,
                      func.accounts
                    )
                  }
                >
                  Write
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No write functions available.</p>
        )}

        <div>
          <h3>Response</h3>
          <pre>{response}</pre>
        </div>
      </div>

      <div style={{ width: "35%", marginLeft: "20px" }}>
        <PDACalculator programId={programId} />
      </div>
    </div>
  );
}

export default WriteProgram;
