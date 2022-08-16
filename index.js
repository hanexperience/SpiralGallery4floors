let addresses =
[
    "tz1Trg6npgauME1Nb8zkkv7xv7sBdboNUFPP",
    "tz1TxG4c8y5KpY5LMBbLseAHbCLwYqE41E3g",
    "tz1eB2tzcRPLQbnKPZLAYoVMV1yWv8BetSTQ",
    "tz1WVBEsgQGwCP1eFAneZT8hhTxJLmhVt2wM",
    "tz1UnJgNirWHHh6Nb3Huu1J522SUkgW74u5U",
    "tz1fDpEVGgkMKTTKt6ZMvWasE5qrQiwWgMFP",
    "tz1NvHRGaHJ4wh4wNNR1dh4EKqa3FdhFQDUJ",
    "tz1SES7sUNxJgLFbbukgDoJTvQJ6zr5iXXUC",
    "tz1QSxDeUy6YQZj9Q9HZ5couvThGX8Qu7RzY",
    "tz1iB8Ayco6yPe2nBUJ8kbcF7CitAW8Aid74",
    "tz1bK5grp8GsSq9W1q1BBFGPkigr1FxPNg5Y",
    "tz1TaDasecu3YQ72aqqx77neicJp534RuHKe",
    "tz2QuhWPbQ4esshaTJRAku2AWnLVGjRfs5mu",
    "tz2JYys2FP5s3TpsGSPxG4afvoL9cBWVh4Tv",
    "tz1ZGNErBKdYeEPjZuqKXhyTixQTTPn54bx3",
    "tz2XBHRsHZuakKNM6vachYeHpyiWDXukTVPy",
    "tz1cNnEdJYgbkB8YN6vD5QJTBays2EJsw5A7",
    "tz1gKQKVmgU2qeeS98dh74g6t3M7pu6YGvYk",
    "tz2WoHgA1HrQnp8Z2rTu7hv1a7AoXtBpLVdD",
    "tz1Nf9i2JEttBb7cknw8wy2UE2P5qFvnjfUD",
    "tz2GNTqeQvoWuphVSKwCzh1HNEfrBH6rkwvr",
    "tz1UCvB8ZNc8pcGy7Tb9kKp1cv9qSxRgDtUE",
    "tz1aVzhX3gFAHKaqea7YaxXj65vG2hoTVEC3",
    "tz1ijYE4zkTUjnVjThebWu7e4zumx4dfUjVJ",
    "tz1TYGFaVUk5SPZ7E9AyfKhFWJNuZeAHDNEc",
    "tz1RJaJXwrqyjUtWyXqcybX77yUKHj8j3oyL",
    "tz1gGWacDo4RqrMNJuMqTkeZucx3cpxUWS7x",
    "tz1ULAUg24mjhBGLJxGKoFvfweXNW4521FVp",
    "tz1TfUsMziADL2uyKWiq6nfu296mVNjTHBjg",
    "tz1gfc1S3RQoMeQNnbs61NxomqjKbMQZCLoc",
    "tz1S3KEPAnYbQodV11YSBaSbBGFUkzUF5hPC",
    "tz1PjiLw8JQf2DCY4TacbVgrjR3EvkpTBnab",
    "tz1hhG3vN2NCoPZepvEbKHBFQ5denwNJwHXP",
    "tz1ae2d1BJt7YUqaaec6Xenh3mBqS7VjSZtK",
    "tz1LHuU1UDZFRMMkqeafi3QfuMmZmFn5z1tu",
    "tz1YhAXQFfX2umDgD7gUES1wFjvLHzbRr7P5",
    "tz1NkDtLboBk6gYG2jUyLmKcQHxzDDiSU3Kn",
    "tz1Y7kQhhxAL4VdDPuZUev17SmhNwxnMXS7B",
    "tz1QZEuxryeCF6yiJyCY4zqSxFmBYbg7Yzu1",
    "tz1aKLHtqAd8bwvRWFoEfNRGGQnMZ4q9Pi67",
    "tz1RJrjBafWDdNhnJDK41ivKRuecMjY9NaxB",
    "tz1RMpizDcHGkd6jFyxThvVjvruvRZP1dWEA",
    "tz1URdJTzHC53TqMQDMn39HpLnpCMGCKotes",
    "tz1Q17EMNrpUEHDH47dVVT8K6Xt9SiWDsYVS",
    "tz1atWGSKRQ5tKY8RAhm4he5bbaemTDmsvBW",
    "tz1iCi9BdMEE36L8DjaD9dQjwqLnXFALHXeZ",
    "tz1cL91C6GoySQGxKG8oh14aV7AeMbARkpYH",
    "tz1PYJbuAbc14ZBLbD7jQszoVDDEbMBpjYKG",
    "tz1WH6p1iqZDfMPCQLwtKnyM2NGYecVPCmN1",
    "tz2KpfKzshGg3caVDSdh7q3jSjR7Zh3kHDtJ",
    "tz1LGEVqBLDByRPGbb5ExVqiSRgKpzKJW8cc",
    "tz1ehhHuAQXrdXukswG2PP7TnptsEfHDxbZK",
    "tz1Yad6um3KNBst9si1xPRiXcYHybmpVohUQ",
    "tz1gDDQhmqVi1FVHcSyxjD95MPKoqbUs2qiP",
    "tz1X1mkbg38Z1ccSvqMhhZzmyw2u8S3fSyTE",
    "tz1aNb6fnNoB53wZc4zMCaJKbivPynEDKVYZ",
    "tz1giMz316AbentzgUmCkbMdfSCTr6yg8eqF",
    "tz1X2dcj3V5UyWfQfwqeKroRwPtdzdRPWBjw",
    "tz1e9cuHbqgrJobzakykJYXUqGaPMS9vpbD2",
    "tz1iUe4W8HGFdy1BmuZhNn56Bqp2G5EnjzhS",
    "tz1iPau49fkKuwZf4eGoxhm3zLhSYp74BnFr",
    "tz1fHqHbnroHWKjK2UXUaK8CYfXduc6ym2gF",
    "tz1Rq2bLTHepf3WQPcERpfzMS8Tynb7K4miN",
    "tz1evESgAfKJKHHiuD9XLkUJwN7JWvLwumac",
    "tz1TCZZCQbGAe6tzG8PrQZq4pP9EUsyQeQt5",
    "tz1V6YfNEZdyDstDyJRkw52F5CUidMrX1iwZ",
    "tz1e7LaKKq76kuGs5LJ2865acchFcVaEaj4Z",
    "tz1SREjxzP3Eycw4XSDzgdMMZrys9pUidJzr",
    "tz1ZhteLTqobRVCYsPj44oFfom5BJ2SdGxeE",
    "tz1PRQw9n2m3DsgpCdMuYPeRegAYuV1BKRzH",
    "tz1PsY6huVzWihab1EX1Axrtk72ip9qQHBCs",
    "tz1ZqoFyngmiuS21zn4zF4yKYfcYdeefNJG4",
    "tz1fhd4k1jSJRRcNVbkMwVzkKEhX3kzApsfk",
    "tz1YokFzMR1hX4m4aBqgutxLSUKFDdNoYGEN",
    "tz1i2USmchVqSHayBGEZcTADDsUZMh5n7Tyw",
    "tz1Rm5ttxV2mozS4TGNraimYzvdv9mvATpGm",
    "tz1MvANy7dz3USPJpDHqfHUVXfo5T47A13oM",
    "tz1XJDXNHNmdeuqCsqRzvPXBh7GTbSz75oGB",
    "tz1Kz8FqJkpf7kFkcPPuW5dU75BQ37cC7hm2",
    "tz1du344PmY2bWwdtG7JU8nKA3guCsSzMJcy",
    "tz1dngpmAx8r3MqPSNFzkt1F9whzVzPTTHq9",
    "tz1dd2tmTJFRJh8ycLuZeMpKLquJYkMypu2Q",
    "tz1KhiFKMdKeLdBmuV6qmzpP4Jp8v7u6cDft",
    "tz1LnrJm9tKin6E481UuYDEMiWudUuWLqogp",
    "tz1fzYXXbFXr2sttbngRPWj3XCKzNxm8fduj",
    "tz1UJu21hcQYgVLYKki3S8fsLZSMiuvXyynC",
    "tz1SC4dEFt6iZx1GLM5Yax8EDwvqCCM39SzF",
    "tz1f35fmNMJiUuRAryrugQJzeVa8NHX66qp4",
    "tz1Zqaxu9f8TvbNHyFuvbJvx6ZESoiHjWU8q",
    "tz29SUdqg4zMbzYL4ftRVKddoviGTwRJ2DR4",
    "tz2CLumZCtHXkowtMRGHqsNZef8qx9wyLj6h",
    "tz1eZ8amacCvSQsFM8wampwWXJFWsmGVRQFd",
    "tz2AFJW2JoB1kh6TVgLgE2rj2cwM6DvQq2Ho",
    "tz1YPbFGPzcwVMefVXDK5Tatv8Fsm2gX9g3N",
    "tz1dvHfCFsEt5QCNoVgKGqaK211C4ciNEVvK",
    "tz1YHNA2XDa3zr3EdgqbngSoZ1emfJsnfrsY",
    "tz1ez9EzqaaZWWTuYiRsPKKm3UrDQP3owYva",
    "tz1NQVMDBvQu1816ikb8ELRAg2XmXTofPuWf",
    "tz1Td3gNxdRnZWHssCVA5raceRKoLKWmuCm5",
    "tz1gwoHAqVq3FDadtf64aXZuf6snd58R4wdH",
    "tz1QU9oV7wzwWESx7ZHerZramMPstyRrLNDj",
    "tz1TXEkrqQSJ4rBCm5RYjQNduZyiBdM7Xyxt",
    "tz1Zf12fV54z5xR21Zqk3QRsC5ZkfWRNLtQ1",
    "tz1NmSuYH2DkJZt4zFZLydai9cXWdvQffcbV",
    "tz2CcTzrLDhqFK1Bqt9iiVSPGDezvbnXntpe",
    "tz1cjHCorsyNqN3cWWKoYpzycBJmpifyoWd6",
    "tz1hmq6iGPZc7ifEedVj3oyJqNr8xSa7sEMc",
    "tz2N4ErvpMBt2P5C1irPtFQ5CRb8HpeWa72F",
    "tz1YEd84t1fNqNsywZBmABgBDQD3cabmiN6N",
    "tz1aQjHwMt4X94aFRrUiM95dqFrnNNiNzW5N",
    "tz1fb4EaCS7yj51XNgTfAzCvLKgR97HnMeHj",
    "tz2Q5zhuacRAavzxNPFHgGb7thKMHbvGBpQu",
    "tz1hgQBc8PgDtoR8DubMKrgyk7oJnBHuZhWn",
    "tz1QX6kFimQU2hH53jCn7FBR7mhsq6Mf9yLK",
    "tz1LKpeN8ZSSFNyTWiBNaE4u4sjaq7J1Vz2z",
    "tz1c3HNFnE14bTcRHpiqPWNXv7wPpgcTwKF5",
    "tz1UecmgMghaWovhh9EYfqTrK9gTtaiMtbzs",
    "tz1hVRmQnpWDiHouav4K77skAtWMhbdi6wEq",
    "tz1hzRPZH3W8s3PumudjFEYLzbUoGiU2NSDm",
    "tz1WhSyYnvGjjDsfzGwUi8PLyLKtTB1eXMPr",
    "tz2Vgk9cdLCqqA2DHXQ6YamzNzhGcAsnrz2f",
    "tz1gSwiCxiwJ8gbTXUAzSxHAJ3JvB9LrUPBz",
    "tz1fKy5tGbcyZc11anTi1zZHTgrDgao9mPnP",
    "tz1g2oHH1JJMhat5ifDVq3T4oUeJB9Qw1MA7",
    "tz1RDr6j75VpeLDGV8o64gy7eR4b3vWBFdZS",
    "tz1NmzVpKaaG96zLEmktzVWF9Rzi436jYWzR",
    "tz1R5aLedcRQb9kYyNBS1UXzHR6aQQ3Z5qoq",
    "tz1aEkkopAVVFRx6wA45EsbVXy44Tce7BBNH",
    "tz1Nf8mQBpnaxK374yUbMLuUreYKughgwsaQ",
    "tz1aVx5i3TMyGeVA3m1XAJkdfiusVV7Piz9R",
    "tz1ibTknNagJCgQPgcbPvJhpSyS5vxgdyFt4",
    "tz1YseydcorqAoU5AY4xkvNqhghWSuKMLnCc",
    "tz1Q8XHjDA6gC7Kqc5rYTx1TaaqxCfzjvRuz",
    "tz1gKb6qHLKg5YUajcxKBBEKG3gVwjNVe4c5",
    "tz1MfuHgpyDBmwbYRJjjBGyKGZgFBPLyEVWd",
    "tz1PibN3AyrAk5WCadLJqF8u2E8d9aCNQCbH",
    "tz2GP2o3kMJ8Q22FdjBo6QeheqUTAyEkHBo4",
    "tz1dnEsHNKBvjCr4bDT7upPSdgmGxnzKkJ2R",
    "tz1iUNoH3MGRvnmd4miJKuPErLxPsBAYnYbZ",
    "tz1L91mzG47xaTvCd2iBAQ4ozNcNLjBbs4en",
    "tz1MsrdFYZfY5SJynGCjBCgsLeR3aVRMitTn",
    "tz1N7hKKTVqsRKq5ZaPqMjioKydoHs276erq",
    "tz1PPCp95hsBK2Yz1CAUswZCX6vymPnQzqym",
    "tz1Q2te8kT2aScepknw1LjVNoZ3qU2iAcUXH",
    "tz1KoCdaY9qTHD19N4JwDZGfi9jWmnJHeXzU"
    ]



// Initialize wallet client
const wallet = new beacon.DAppClient({
    name: "Here & Now",
    iconUrl: 'https://hereandnow.events/wp-content/uploads/2022/03/walletpic.jpg'
})

var app = Vue.createApp({
    el: "#app",
    data() {
        return {
            account: null,
            walletAddress: null,
            loadingTokens: false,
            foundEntryToken: false,
            started: false
        }
    },
    mounted() {
        this.checkConnection();
    },
    methods: {
        syncWallet: async function () {
            wallet
            .requestPermissions({ network: { type: 'mainnet' } })
            .then((_) => wallet.getActiveAccount())
            .then((account) => {
                app.walletAddress = account.address;
                console.log(`Wallet connected: ${app.walletAddress}`);
                console.log("Setting provider....");
            });
        },
        checkConnection: async function () {
            try {
                // Check if user has already synced wallet
                this.account = await wallet.getActiveAccount();
                this.walletAddress = account.address;
                console.log(`Wallet connected: ${this.walletAddress}`);
                console.log("Setting provider....");
            } catch {
                console.log("Wallet not connected");
            }
        },
        checkWallet: async function () {
            // Clean up before checking users tokens
            this.cleanUp();

            this.loadingTokens = true;

            let addressFound = false;
            console.log("Checking address "+this.walletAddress);
            addresses.forEach(address => {
                if(address == this.walletAddress){
                    addressFound = true;
                }
            });
  
            if(addressFound){
                console.log("Owns token");
                this.loadingTokens = false;
                this.foundEntryToken = true;
                this.start();
            } else {
                console.log("Does not own token");
                this.loadingTokens = false;
                this.foundEntryToken = false;
            }
        },
        openSecondary: function(){
            window.open(
                'https://objkt.com/explore/tokens/1?faContracts=KT1SRFbwhvfkXoRGqiDFVVsf5GTp16wGgtCa&sort=lowest_ask:asc',
                '_blank'
              );  
        },
        cleanUp: function () {
            this.loadingTokens = false;
            this.started = false;
        },
        openModal: function () {
            document.body.style.overflow = "hidden";
            var modal = document.getElementById("ed4Modal");
            modal.style.display = "flex";
            this.checkWallet();
        },
        closeModal: function () {
            document.getElementById("ed4Frame").src = "";
            document.body.style.overflow = "visible";
            var modal = document.getElementById("ed4Modal");
            modal.style.display = "none";
            this.cleanUp();
        },
        start: function () {
            let source;
            source = `https://hereandnow2.s3.ap-southeast-2.amazonaws.com/escapethemoontz/index.html`;
            console.log(source);
            document.getElementById("ed4Frame").src = source;
            this.started = true;
        },
        resetWallet: async function () {
            this.walletAddress = null;
            await wallet.clearActiveAccount();
            try {
                const account = await wallet.getActiveAccount();
                console.log("Active account", account);
            } catch {
                console.log("Wallet disconnected");
            }
        },
    },
}).mount('#app')
