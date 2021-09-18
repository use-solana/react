import { getConnection } from '../../utils/connection';
import { useEffect } from 'react';
import { useSolanaState } from '../../context';

export const useConnection = () => {
  const { connection, loading, transition } = useSolanaState();
  console.log({ loading });
  useEffect(() => {
    (async () => {
      console.log('Top of callback useConnection');
      transition({
        connection: await getConnection(),
      });
    })();
  }, [transition]);
  return connection;
};
