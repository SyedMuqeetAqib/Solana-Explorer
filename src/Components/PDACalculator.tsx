import React, { useState } from "react";
import { PublicKey } from "@solana/web3.js";
import { Buffer } from "buffer";

interface PDACalculatorProps {
  programId: string;
}

const PDACalculator: React.FC<PDACalculatorProps> = ({ programId }) => {
  const [seeds, setSeeds] = useState<string[]>([""]);
  const [publicKeys, setPublicKeys] = useState<string[]>([""]);
  const [pda, setPda] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  // Handle seed input changes
  const handleSeedChange = (index: number, value: string) => {
    const newSeeds = [...seeds];
    newSeeds[index] = value;
    setSeeds(newSeeds);
  };

  // Handle public key input changes
  const handlePublicKeyChange = (index: number, value: string) => {
    const newPublicKeys = [...publicKeys];
    newPublicKeys[index] = value;
    setPublicKeys(newPublicKeys);
  };

  // Add new seed field (up to 3)
  const addSeedField = () => {
    if (seeds.length < 3) {
      setSeeds([...seeds, ""]);
    }
  };

  // Add new public key field (up to 2)
  const addPublicKeyField = () => {
    if (publicKeys.length < 2) {
      setPublicKeys([...publicKeys, ""]);
    }
  };

  // Calculate PDA
  const calculatePda = () => {
    try {
      setError("");

      const bufferSeeds = seeds
        .filter((seed) => seed)
        .map((seed) => Buffer.from(seed));

      const pubkeyBuffers = publicKeys
        .filter((pk) => pk)
        .map((pk) => new PublicKey(pk).toBuffer());

      const seedArray = [...bufferSeeds, ...pubkeyBuffers];
      const programIdKey = new PublicKey(programId);

      // Calculate PDA
      const [pdaAddress] = PublicKey.findProgramAddressSync(
        seedArray,
        programIdKey
      );
      setPda(pdaAddress.toBase58());
    } catch (err) {
      setError(
        "Invalid input or Program ID. Please check the fields and try again."
      );
    }
  };

  return (
    <div>
      <h3>Find Program Derived Address (PDA)</h3>
      <div>
        <h4>Enter Seeds</h4>
        {seeds.map((seed, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`Seed ${index + 1}`}
              value={seed}
              onChange={(e) => handleSeedChange(index, e.target.value)}
            />
          </div>
        ))}
        {seeds.length < 3 && (
          <button onClick={addSeedField}>Add Optional Seed</button>
        )}
      </div>

      <div>
        <h4>Enter Public Keys</h4>
        {publicKeys.map((pk, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`Public Key ${index + 1}`}
              value={pk}
              onChange={(e) => handlePublicKeyChange(index, e.target.value)}
            />
          </div>
        ))}
        {publicKeys.length < 2 && (
          <button onClick={addPublicKeyField}>Add Optional Public Key</button>
        )}
      </div>

      <button onClick={calculatePda}>Calculate PDA</button>

      {pda && (
        <div>
          <h4>Computed PDA:</h4>
          <p>{pda}</p>
        </div>
      )}
      {error && (
        <div style={{ color: "red" }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default PDACalculator;
