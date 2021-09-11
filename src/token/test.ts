import splToken from '@solana/spl-token';
import web3 from '@solana/web3.js';

console.log('Connecting to cluster.');
const clusterUrl = web3.clusterApiUrl('mainnet-beta');
const connection = new web3.Connection(clusterUrl, 'confirmed');
console.log('Connected to', { clusterUrl });

/**
 * Create the sender and receiver wallets.
 */
console.log('Generating wallet.');
const fromWallet = web3.Keypair.generate();

console.log('Generating a new wallet to deposit to.');
const toWallet = web3.Keypair.generate();

/**
 * Create the new token mint.
 */
console.log(
  'Creating a new token mint.',
  fromWallet.publicKey,
  splToken.TOKEN_PROGRAM_ID.toBase58(),
);
const mint = await splToken.Token.createMint(
  connection,
  fromWallet,
  fromWallet.publicKey,
  null,
  9,
  splToken.TOKEN_PROGRAM_ID,
);

/**
 * Create an account with the token mint for the sender and the receiver.
 */

console.log('Getting or creating mint account of sender.');
const fromTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
  fromWallet.publicKey,
);

console.log('Getting or creating token account of receiver.');
const toTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
  toWallet.publicKey,
);

/**
 * Mint the initial supply for the sender.
 */
console.log('Minting 1 token to sender address.');
await mint.mintTo(
  fromTokenAccount.address,
  fromWallet.publicKey,
  [],
  1000000000,
);

/**
 * Create the transaction from the sender to the receiver.
 */
console.log('Creating transaction.');
const transaction = new web3.Transaction().add(
  splToken.Token.createTransferInstruction(
    splToken.TOKEN_PROGRAM_ID,
    fromTokenAccount.address,
    toTokenAccount.address,
    fromWallet.publicKey,
    [],
    1,
  ),
);

/**
 * Sign and broadcast the transaction.
 */
console.log('Signing transaction and broadcasting.');
const signature = await web3.sendAndConfirmTransaction(
  connection,
  transaction,
  [fromWallet],
  { commitment: 'confirmed' },
);

console.log('TX SIGNATURE:', signature);

export {};
