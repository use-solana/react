import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from '../utils/keys';
import { PublicKey } from '@solana/web3.js';
import { Token } from '@solana/spl-token';

export const getAssociatedTokenAddress = async (
  userAddress: PublicKey,
  mintAddress: PublicKey,
) => {
  return await Token.getAssociatedTokenAddress(
    ASSOCIATED_TOKEN_PROGRAM_ID,
    TOKEN_PROGRAM_ID,
    mintAddress,
    userAddress,
  );
};
