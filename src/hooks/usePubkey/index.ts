import { KeyLike } from '../../utils/keys';
import { PublicKey } from '@solana/web3.js';
import { useMemo } from 'react';

export const usePubkey = (account: KeyLike) => {
  return useMemo(() => new PublicKey(account), [account]);
};
