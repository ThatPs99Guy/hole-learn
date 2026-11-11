# Accounts setup (Cloudflare Worker with static assets)

1. Cloudflare -> Storage & Databases -> KV -> create a namespace -> copy its ID.
2. Edit wrangler.jsonc in your GitHub repo:
   - "name": your Worker's exact name (see Workers & Pages list)
   - "id": the KV namespace ID you copied
3. Commit. Cloudflare rebuilds and deploys automatically.
4. Open the site, click "Sign in" in the menu, and create an account.

Don't add the binding in the dashboard; wrangler.jsonc does it.
