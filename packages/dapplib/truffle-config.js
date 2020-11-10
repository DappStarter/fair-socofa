require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame foot dad random rural slow coral light army gasp'; 
let testAccounts = [
"0xf9cb2b524fd3bdad2e70aa7627597e928d4e578658e0b08f04eea9498bd04739",
"0xd3dcb1eb3a3d0ff790201a65e79610c91511449d7ac93037fae95ffbb1e4d688",
"0x8dcd5f95d1d76471681f5d01ec67b152f4cbe2efc812dc827544b81f81881824",
"0x1bfc7af0d5bd420f3ce0b785771e332bff60dc3382042d6a008abefef91fb28a",
"0x994ac9f114097cbb77630989c135cffbec203217ad41ecba89996bb1f28e1f6a",
"0x88eb256584275dabac85f0054ea66e3bc2777b826596076418ba9d9e84025c35",
"0xc8455c2a9e1987386ef135c9b4912315a50cd0812b3e2cd787ffec9e8295cbd1",
"0xb01590014fe2f14ea4bc250e373c16f689d1faeea1289a4e74d825ca25ac3998",
"0xa3ea6225f3624fafd65e23b5338184fdba5a6b0037abe370e3cddb80487d4089",
"0x4c3e7eb75dacfce3382772c84ec854fdee9fe3ac135d357c49b292fcc5cf89e8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
