import React, { useMemo } from 'react';
import useWebSocket from 'react-use-websocket';

import AuthToken from '@api/utils/AuthToken';
import Terminal from '@components/Terminal';
import { OAUTH2_APPLICATION_CLIENT_ID } from '@api/constants';
import { getWebSocket } from '@api/utils/url';

function TerminalEncapsulated() {
  const token = useMemo(() => new AuthToken(), []);
  const sharedWebsocketData = useMemo(() => ({
    api_key: OAUTH2_APPLICATION_CLIENT_ID,
    token: token.decodedToken.token,
  }), [
    token,
  ]);

  const {
    lastMessage,
    sendMessage,
  } = useWebSocket(getWebSocket('terminal'), {
    queryParams: sharedWebsocketData,
    shouldReconnect: () => true,
  });

  return (
    <Terminal
      lastMessage={lastMessage}
      sendMessage={sendMessage}
    />
  );
}

export default TerminalEncapsulated;
