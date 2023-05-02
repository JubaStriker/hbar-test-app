import { AccountId, PrivateKey, Client } from '@hashgraph/sdk';
import NavBar from './components/Navbar.tsx';

const Home = () => {

    // If we weren't able to grab it, we should throw a new error
    if (!process.env.REACT_APP_MY_ACCOUNT_ID || !process.env.REACT_APP_MY_PRIVATE_KEY) {
        throw new Error("Environment variables REACT_APP_MY_ACCOUNT_ID and REACT_APP_MY_PRIVATE_KEY must be present");
    }

    console.log(process.env.REACT_APP_MY_ACCOUNT_ID)

    // create your client
    const myAccountId = AccountId.fromString(process.env.REACT_APP_MY_ACCOUNT_ID);
    const myPrivateKey = PrivateKey.fromString(process.env.REACT_APP_MY_PRIVATE_KEY);


    const client = Client.forTestnet();
    client.setOperator(myAccountId, myPrivateKey);

    return (
        <div className='py-4 bg-black flex justify-center relative'>
            <h1 className='text-white my-auto text-center font-semibold text-2xl'>Building a dApp on Hedera</h1>
            <div className='flex justify-end items-center absolute right-2'><NavBar /></div>

        </div>
    );
};

export default Home;