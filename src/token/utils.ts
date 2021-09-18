import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  KeyLike,
  TOKEN_PROGRAM_ID,
} from '../utils/keys';
import { Connection, PublicKey } from '@solana/web3.js';
import { Token } from '@solana/spl-token';

export const getAssociatedTokenAddress = async (
  userAddress: KeyLike,
  mintAddress: KeyLike,
) => {
  return await Token.getAssociatedTokenAddress(
    ASSOCIATED_TOKEN_PROGRAM_ID,
    TOKEN_PROGRAM_ID,
    new PublicKey(mintAddress),
    new PublicKey(userAddress),
  );
};

export const getAssociatedBalance = async (
  connection: Connection,
  userAddress: KeyLike,
  mintAddress: KeyLike,
) => {
  const associatedAddress = await getAssociatedTokenAddress(
    userAddress,
    mintAddress,
  );

  return await connection.getTokenAccountBalance(associatedAddress);
};
