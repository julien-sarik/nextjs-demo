import NetworkStatus from "@/app/(client-components)/network-status";

export default function Page() {
    return (
        <div>
            The component below is using a custom hook to get the network status.
            <NetworkStatus/>
        </div>
    )
}