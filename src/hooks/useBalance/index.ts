import { PublicKey, RpcResponseAndContext } from '@solana/web3.js';
import { useCallback, useState } from 'react';
import { useConnection } from '..';

/**
 * Check the SOL or SPL token balance of an address.
 *
 * @param accountAddress The account to check.
 * @param tokenMint The token for which to check the balance of
 * `accountAddress`. If not provided, returns SOL balance.
 * @returns The balance of `accountAddress` in SOL or the given token mint.
 */
export const useSolanaBalance = (accountAddress: PublicKey) => {
  const connection = useConnection();
  const [balance, setBalance] = useState<RpcResponseAndContext<number>>();

  useCallback(async () => {
    const newBalance = await connection?.getBalanceAndContext(accountAddress);
    setBalance(newBalance);
  }, [accountAddress, connection]);

  return balance;
};

// export const useTokenBalance = (
//   accountAddress: PublicKey,
//   tokenMint: PublicKey,
// ) => {
//   const connection = useConnection();
//   const [balance, setBalance] = useState<RpcResponseAndContext<number>>();

//   useCallback(async () => {
//     const newBalance = await connection?.getTokenAccountBalance(accountAddress);
//     setBalance(newBalance);
//   }, [accountAddress, connection]);

//   return balance;
// };
