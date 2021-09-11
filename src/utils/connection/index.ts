import { Connection } from '@solana/web3.js';
import { getRpcUrl } from '..';

/**
 * Connection to the network.
 */
let connection: Connection | undefined;

/**
 * Establish a connection to the cluster
 */
export const establishConnection = async () => {
  const rpcUrl = await getRpcUrl();
  connection = new Connection(rpcUrl, 'confirmed');

  const version = await connection.getVersion();
  console.log('Connection to cluster established:', rpcUrl, version);

  return connection;
};

/**
 * Get the current session; establish a new one if it does not exist.
 */
export const getConnection = async () => {
  return connection || (await establishConnection());
};

export { connection };
