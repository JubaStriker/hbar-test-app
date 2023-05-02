import { AccountId, PrivateKey, Client } from '@hashgraph/sdk';
import NavBar from './components/Navbar.tsx';
import { sendHbar } from './services/hederaService.ts';
import { useContext } from 'react';
import { GlobalAppContext } from './contexts/GlobalAppContext.tsx';

const Home = () => {

    // If we weren't able to grab it, we should throw a new error
    if (!process.env.REACT_APP_MY_ACCOUNT_ID || !process.env.REACT_APP_MY_PRIVATE_KEY) {
        throw new Error("Environment variables REACT_APP_MY_ACCOUNT_ID and REACT_APP_MY_PRIVATE_KEY must be present");
    }

    const { metamaskAccountAddress } = useContext(GlobalAppContext);

    // create your client
    const myAccountId = AccountId.fromString(process.env.REACT_APP_MY_ACCOUNT_ID);
    const myPrivateKey = PrivateKey.fromString(process.env.REACT_APP_MY_PRIVATE_KEY);


    const client = Client.forTestnet();
    client.setOperator(myAccountId, myPrivateKey);

    return (
        <>
            <div className='py-4 bg-black flex justify-center relative'>
                <h1 className='text-white my-auto text-center font-semibold text-2xl'>Building a dApp on Hedera</h1>
                <div className='flex justify-end items-center absolute right-2'><NavBar /></div>

            </div>

            <div className='bg-slate-800 min-h-screen'>
                <h1
                    className="text-purple-600 text-center font-semibold pt-5"
                >
                    Let's build a dApp on Hedera
                </h1>
                <div className='flex justify-center mt-8 '>
                    <button
                        className="bg-violet-500 text-white px-4 rounded-xl py-2 "
                        onClick={() => {
                            sendHbar(client, myAccountId, AccountId.fromEvmAddress(0, 0, metamaskAccountAddress), 7, myPrivateKey)
                        }}
                    >
                        Transfer HBAR to MetaMask Account
                    </button>
                </div>
            </div>

        </>
    );
};

export default Home;