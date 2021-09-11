import { PublicKey } from '@solana/web3.js';
import { getAssociatedTokenAddress } from './token/utils';
import { getConnection } from './utils/connection';
import { getServerKeypair } from './utils/keys';

/**
 * Simulate private key.
 */
process.env.SOLANA_PRIVATE_KEY =
  '[102,161,37,79,190,66,47,164,189,17,50,252,65,112,197,134,197,119,212,210,142,5,150,195,90,4,101,248,236,181,213,122,217,185,105,206,135,224,145,78,120,87,83,147,181,231,207,199,236,186,67,20,48,97,231,13,137,126,94,96,54,106,249,171]';

const USER_ADDRESS = new PublicKey(
  'FeuT9mmNGSDxaUVSMPLxbGhybh8i3mjUGKhpnXHuzyCe',
);

const MINT_ADDRESS = new PublicKey(
  '3g1kGZL66m65ooeYZxKGazkkbHsCWqu38WEsgvGDbB1Y',
);

// const ACCOUNT_ADDRESS = new PublicKey(
//   'CDHMDKM2ezooQyPukA3Sr7CpYJzaqPSWs4FzEtRrZTxR',
// );

const { publicKey } = getServerKeypair();
const connection = await getConnection();
console.log(connection);

const balance = await connection.getBalance(publicKey);
console.log({ balance });

// const tokenBalance = await connection.getTokenAccountBalance(publicKey);
// console.log({ tokenBalance });

const tokenSupply = await connection.getTokenSupply(MINT_ADDRESS);
console.log({ tokenSupply });

const associatedAddress = await getAssociatedTokenAddress(
  USER_ADDRESS,
  MINT_ADDRESS,
);

console.log(associatedAddress.toBase58());
