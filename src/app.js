const clientId = 'CLIENT-ID-HERE'; // Put here the client Id you copied.
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