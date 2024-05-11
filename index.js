import { useState } from 'react';
import { LiveblocksProvider, TextEditor } from '@liveblocks/react';

export default function Home() {
  const [clientId, setClientId] = useState(null);

  // Khi clientId được thiết lập, bạn có thể bắt đầu sử dụng Liveblocks
  // Ví dụ: <TextEditor clientId={clientId} />
  return (
    <div>
      {!clientId ? (
        <button onClick={() => setClientId('pk_prod_VKW9QI77b11kPO800SmxgX8orJGwya14CeWkfAuR3xXmCqCTdpZDa0t3dWneqf0K')}>
          Connect Liveblocks
        </button>
      ) : (
        <LiveblocksProvider clientId={clientId}>
          <TextEditor />
        </LiveblocksProvider>
      )}
    </div>
  );
}
