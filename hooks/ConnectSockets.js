import io from 'socket.io-client';
import { useState, useEffect } from 'react';

const parseAnalytics = (analytics) => {
  const data = { date: analytics.date };

  analytics.products.forEach((p) => {
    data[p.name] = parseInt(p.votes, 10);
  });

  return data;
};

const useConnectSockets = ({ analyticsData, setAnalyticsData }) => {
  const [socketConnection, setSocketConnection] = useState();

  const fetchData = async () => {
    const socket = await io.connect('http://localhost:5678/');
    setTimeout(() => {
      socket.emit('request_analytics', {});
    }, 2000);
    socket.emit('request_analytics', {});
    socket.on('new_analytics', (msg) => {
      const analytics = parseAnalytics(msg);
      const newAnalytics = analyticsData;
      newAnalytics.push(analytics);
      setAnalyticsData(newAnalytics);
      // setAnalyticsData(analyticsData.push(analytics));
    });
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
