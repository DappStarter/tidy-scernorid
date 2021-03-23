require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inner enroll bundle foot curtain razor situate social include enroll army gasp'; 
let testAccounts = [
"0xd66c9281276367d8691f4a0a25a07a8f565cc6c624b5123f293d9102f95b0a08",
"0x18b4212b59039f97454921cc2eaf641440aa18a9134ed52d40dea4b192739518",
"0x234573a6f0b842378b787bb35f377ebd5abd8727081c096cf8f026e164e77cf7",
"0x8b3f3e5b86b3755e8ac69c65adbd78f4aeebbec16b8d0087d3ab916da75b001c",
"0x14c91c197189483e0588031364774033da83fddda41d1f53833d28b8612dfa70",
"0xa17ff727216ab766be114ad594f196e0a7148eb100a53b16686e1269f21e8560",
"0x595482c75da4127bb1149fcf5d12652696b720fbefd53e41ba83672e6968b1d2",
"0x7a9b577b8ae05dbc9b268f21fa4cbaa81a2e72a6b2229654c41010e92d74b07d",
"0x2eee6222f111523c5367ad8d9f2464de965633bf9a87cfecb53e9eeda92c616b",
"0x979f51eb9dc17627e2e50c6450f2ccd9a5a13ccafcc85a2e38970362b620bc35"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

