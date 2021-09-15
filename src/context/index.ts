import { Connection, PublicKey } from '@solana/web3.js';
import { createContext } from 'react';

export interface SolanaContext {
  connection: Connection | null;
  pubkey: PublicKey | null;
}

const DEFAULT_CONTEXT: SolanaContext = {
  connection: null,
  pubkey: null,
};

const SOLANA_CONTEXT = createContext(DEFAULT_CONTEXT);
export const { Provider } = SOLANA_CONTEXT;
