const { REST, Routes, Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
const commands = [
  {
    name: "bot",
    description: "Replies with bot!",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");
    await rest.put(Routes.applicationCommands("1281279181686181928"), {
      body: commands,
    });
    console.log("Successfully reloaded application (/) commands.");
    await client.login(process.env.DISCORD_TOKEN);
  } catch (error) {
    console.error(error);
  }
})();

client.on("ready", () => {
  console.log("Client is ready");
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply({ content: "Hello", ephemeral: true });
});
