# Cloudflare Pages Deployment Secrets

Add these secrets in GitHub repo: rizoadev/inovara-seafront-villas
→ Settings → Secrets and variables → Actions → New repository secret

---

## Secret 1
- **Name:** `CLOUDFLARE_API_TOKEN`
- **Value:** `xndwhUEhkg1CByAo8UBCQzyNyhuzobwoq171OByx`

## Secret 2
- **Name:** `CLOUDFLARE_ACCOUNT_ID`  
- **Value:** `3af6c3d76a6d2e004e58323ceef3e77a`

---

## Setup Steps

1. Go to: https://github.com/rizoadev/inovara-seafront-villas/settings/secrets/actions
2. Click "New repository secret"
3. Add both secrets above
4. Go to: https://github.com/rizoadev/inovara-seafront-villas/pages
5. Click "Connect to Git" → select this repo
6. Framework preset: Vue.js (or Vite)
7. Build command: `npm run build`
8. Build output: `dist`
9. Click "Save and Deploy"

---

## Alternative: Deploy manually

1. Build locally: `npm run build`
2. Go to https://pages.cloudflare.com
3. Upload `dist` folder
4. Done!
