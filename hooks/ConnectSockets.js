import io from 'socket.io-client';
import { useState, useEffect } from 'react';

const useConnectSockets = (props) => {
  const [socketConnection, setSocketConnection] = useState();

  const fetchData = async () => {
    const socket = io.connect('http://localhost:5678/');

    socket.on('news', msg => console.log(msg));
    setSocketConnection(socket);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    socketConnection,
  };
};

export default useConnectSockets;
