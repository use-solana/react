import { getConnection } from '../../utils/connection';
import { useEffect } from 'react';
import { useSolanaState } from '../../context';

export const useConnection = () => {
  const { connection, loading, updateState } = useSolanaState();
  console.log({ loading });
  useEffect(() => {
    (async () => {
      console.log('Top of callback useConnection');
      updateState({
        connection: await getConnection(),
      });
    })();
  }, [updateState]);
  return connection;
};
