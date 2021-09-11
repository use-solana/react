import { connection, getConnection } from '../../utils/connection';
import { useCallback, useState } from 'react';

export const useConnection = () => {
  const [_connection, _setConnection] = useState(connection);
  useCallback(async () => {
    _setConnection(await getConnection());
  }, []);
  return _connection;
};
