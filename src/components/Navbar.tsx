import { useContext } from "react";
import { GlobalAppContext } from "../contexts/GlobalAppContext.tsx";
import { connectToMetamask } from "../services/metamaskService.ts";

export default function NavBar() {
    // use the GlobalAppContext to keep track of the metamask account connection
    const { metamaskAccountAddress, setMetamaskAccountAddress } = useContext(GlobalAppContext);
    const retrieveWalletAddress = async () => {
        const addresses = await connectToMetamask();
        if (addresses) {
            // grab the first wallet address
            setMetamaskAccountAddress(addresses[0]);
            console.log(addresses[0]);
        }
    }

    return (
        <button
            className="bg-violet-500 text-white px-4 rounded-xl py-2"
            onClick={retrieveWalletAddress}
        >
            {metamaskAccountAddress === "" ?
                "Connect to MetaMask" :
                `Connected to: ${metamaskAccountAddress.substring(0, 8)}...`}
        </button>
    )
}