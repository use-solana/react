import { Connection, PublicKey } from '@solana/web3.js';
import { createScopedState } from 'create-scoped-state';
import { getConnection } from '../utils/connection';

const DEFAULT_CONTEXT = {
  connection: null as Connection | null,
  pubkey: null as PublicKey | null,
};

const [SolanaStateProvider, useSolanaState] = createScopedState(
  DEFAULT_CONTEXT,
  async ({ connection }) => {
    if (!connection) {
      return {
        pubkey: new PublicKey('FeuT9mmNGSDxaUVSMPLxbGhybh8i3mjUGKhpnXHuzyCe'),
        connection: await getConnection(),
      };
    }

    return null;
  },
);

export { SolanaStateProvider, useSolanaState };
