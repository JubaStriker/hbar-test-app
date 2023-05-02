export const switchToHederaNetwork = async (etherum: any) => {
    try {
        await etherum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x128' }]
        })
    }
    catch (error: any) {
        if (error.code === 4902) {
            try {
                await etherum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainName: 'Hedera Testnet',
                            chainId: '0x128',
                            nativeCurrency: {
                                name: 'HBAR',
                                symbol: 'HBAR',
                                decimals: 18
                            },
                            rpcUrls: ['https://testnet.hashio.io/api']
                        },
                    ]
                });
            }
            catch (addError) {
                console.error(addError);
            }
        }
        console.error(error);
    }
}