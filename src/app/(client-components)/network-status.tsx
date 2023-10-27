'use client'

import useOnlineStatus from "@/app/(hooks)/is-online";

export default function NetworkStatus() {
    const isOnline = useOnlineStatus()
    return (
        <div>
            Network status is {isOnline? 'online': 'offline'}.
        </div>
    )
}