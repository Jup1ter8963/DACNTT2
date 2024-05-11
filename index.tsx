"use client";

import { RoomProvider } from "C:/Users/PC2/liveblocks.config";
import { Editor } from "./Editor";
import { ClientSideSuspense } from "@liveblocks/react";

export default function Page() {
  return (
    <RoomProvider id="my-room" initialPresence={{}}>
      <ClientSideSuspense fallback="Loading…">
        {() => <Editor />}
      </ClientSideSuspense>
    </RoomProvider>
  );
}