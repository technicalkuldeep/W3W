import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

// Generate a new keypair and set the public and private keys
function pub_priKey(setPubKey: (pubKey: string) => void, setPriKey: (priKey: string) => void) {
  // Generate a new keypair
  const keypair = Keypair.generate();

  // Extract the public and private keys
  const publicKey = keypair.publicKey.toString();
  const secretKey = keypair.secretKey;

  // Convert the secret key to a Base64 string
  const secretKeyBase64 = btoa(String.fromCharCode(...secretKey));

  // Set the public and private keys using the provided callbacks
  setPubKey(publicKey);
  setPriKey(secretKeyBase64);
}

export default pub_priKey; // Ensure this line is included
