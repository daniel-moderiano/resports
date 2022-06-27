import { ClientCredentialsAuthProvider } from '@twurple/auth';

const clientId = process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_TWITCH_CLIENT_SECRET;

const authProvider = new ClientCredentialsAuthProvider(clientId, clientSecret);

export default authProvider;