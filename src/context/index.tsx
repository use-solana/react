import { Connection, PublicKey } from '@solana/web3.js';
import { createStatefulContext } from 'create-stateful-context';
import { getConnection } from '../utils/connection';

const DEFAULT_CONTEXT = {
  connection: null as Connection | null,
  pubkey: null as PublicKey | null,
};

const [SolanaStateProvider, useSolanaState] = createStatefulContext({
  initialState: DEFAULT_CONTEXT,
  updateState: async ({ connection, updateState }) => {
    if (!connection) {
      updateState({ connection: await getConnection() });
    }
    return false;
  },
});

export { SolanaStateProvider, useSolanaState };
