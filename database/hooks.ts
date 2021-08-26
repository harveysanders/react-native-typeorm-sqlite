import { useEffect, useState } from 'react';
import { createConnection } from 'typeorm/browser';
import { Todo } from '../src/entities/todo';

export const useDatabase = () => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [connection, setConnection] = useState<unknown | null>(null);

  useEffect(() => {
    async function connect() {
      try {
        setLoading(true);
        const con = await createConnection({
          type: 'react-native',
          database: 'test',
          location: 'default',
          logging: ['error', 'query', 'schema'],
          synchronize: true,
          entities: [Todo],
        });
        setLoading(false);
        console.log(con);

        setConnection(con);
      } catch (err) {
        console.error(err);
        setLoading(false);
        setError(err);
      }
    }
    connect();
  }, []);
  return { error, loading, connection };
};
