import { PublicKey } from '@solana/web3.js';

/**
 * Phantom's NFT Token program.
 *
 * @see https://docs.phantom.app/integrating/tokens/non-fungible-tokens
 */
export const TOKEN_METADATA_PROGRAM_ID: PublicKey = new PublicKey(
  'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
);

export {
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
