import { connection, getConnection } from '../../utils/connection';
import { useEffect, useState } from 'react';

export const useConnection = () => {
  const [_connection, _setConnection] = useState(connection);
  useEffect(() => {
    (async () => {
      console.log('Top of callback useConnection');
      _setConnection(await getConnection());
    })();
  }, []);
  return _connection;
};
