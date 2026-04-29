export default function middleware(req) {
  const userAgent = req.headers.get("user-agent");
  const bots = ["facebookexternalhit", "WhatsApp", "Twitterbot", "discordbot"];

  const isBot = bots.some((bot) => userAgent.includes(bot));

  if (isBot) {
    const url = new URL(req.url);
    const animeTitle = url.pathname.split("/").pop();

    return new Response(
      `<html>
        <head>
          <meta property="og:title" content="Ki-nime | ${animeTitle}">
          <meta property="og:description" content="Watch and track your favorite anime.">
          <meta property="og:image" content="https://your-api.com/anime-image.jpg">
        </head>
      </html>`,
      { headers: { "content-type": "text/html" } },
    );
  }
}
