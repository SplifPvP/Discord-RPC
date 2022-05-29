# Discord-RPC
A simple RPC client for Discord, Doubts? enter my discord and create a ticket => [Discord Server Here](https://discord.gg/hTR5VRQc3Y)

# Steps to follow
* Step 1: Go to [Discord Developer Portal> My Applications](https://discord.com/developers/applications)

* Step 2: Click on the "New Application" button:
<img src="https://media.discordapp.net/attachments/853062371794616320/980547108484563005/Screenshot_156.png?width=1440&height=273" />

* Step 3: Write the "name of your Bot" and click the "Create" button:
<img src="https://media.discordapp.net/attachments/853062371794616320/980547108702670928/Screenshot_157.png" />

* Step 4: Go to the "Rich Presence" category and add an image with the name capitalized, for example `discord-icon`.:
<img src="https://media.discordapp.net/attachments/853062371794616320/980547108992090152/Screenshot_158.png?width=1440&height=651" />

* Step 5: go to "OAuth2" category, Click on the "Copy" button, this to copy the Client ID:
<img src="https://media.discordapp.net/attachments/853062371794616320/980547109373743124/Screenshot_159.png?width=1440&height=519" />

* Step 6: Put in `app.js` file and paste your Client ID.
* Step 7: Follow the comments that are in `app.js`.
* Step 8: Install bot dependencies with `npm i`.
* Step 9: Start the bot with `npm run test`!

## Show app.js file
```const clientId = 'CLIENT-ID-HERE'; // Put here the client Id you copied.
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(clientId);

async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: `Testing precense`,
        state: `Playing with RPC`,
        startTimestamp: Date.now(),
        largeImageKey: `crove-discord-icon`, // Here you put the name of the image.
        largeImageText: `Crove Discord Icon`,
        smallImageKey: `crove-discord-icon`, // Here you put the name of the image.
        smallImageText: `Small Icon`,
        instance: false,
        buttons: [
            {
                label: `Crove Community`, // Button name.
                url: `https://discord.gg/hTR5VRQc3Y` // You can put the url you want here.
            },
            {
                label: `Create a Ticket`, 
                url: `https://discord.gg/RnDmyGjWMS`
            }
        ]
    });
};

RPC.on('ready', async () => {
    setActivity();

    setInterval(() => {
        setActivity();
    }, 15 * 1000);
});

RPC.login({ clientId }).catch(err => console.error(err));
```

# Contact me
Contact Information

[![Discord](https://img.shields.io/badge/Discord-SplifPvP%239298-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/hTR5VRQc3Y) [![Discord](https://img.shields.io/badge/Discord-Crove-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/hTR5VRQc3Y)
