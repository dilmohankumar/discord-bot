const { Client, GatewayIntentBits } = require('discord.js');

const dotenv = require('dotenv');
dotenv.config();

// Import MongoDB model files
require('./model/model');
require('./mongodb');


// Function to retrieve and replay a user's last message
async function replayMessage(userId) {
    try {
        const message = await Message.findOne({ userId: userId }).sort({ timestamp: -1 });
        if (message) {
            return message.message; // Return the message for further use
        } else {
            return 'No messages found.'; // No message found
        }
    } catch (err) {
        console.error('Error retrieving message:', err);
        return null; // Return null to handle the error more gracefully
    }
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
  ],
});

client.on('guildMemberAdd', async (member) => {
    try {
        console.log(`New member joined: ${member.user.tag}`);
        const guild = member.guild;

        // Replace with the actual channel ID
        const channel = guild.channels.cache.get('1278689861758357627');

        if (!channel) {
            console.error('Channel not found!');
            return; // Exit if the channel doesn't exist
        }

        try {
            await channel.send(`Thank you for joining, ${member.user.tag}`);
            console.log(`Sent welcome message to ${member.user.tag}`);
        } catch (err) {
            console.error('Error sending welcome message:', err);
        }

        // Replay the user's last message
        
    } catch (err) {
        console.error('Error in guildMemberAdd event:', err);
    }
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Use environment variable for the token
client.login(process.env.TOKEN).catch(err => {
    console.error('Error logging in:', err);
});
