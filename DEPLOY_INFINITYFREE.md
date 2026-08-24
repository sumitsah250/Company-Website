# Deploy Sumix Developers to InfinityFree

## Prerequisites

- An InfinityFree account (free at https://www.infinityfree.net)
- A registered domain or InfinityFree subdomain
- Node.js 18+ installed on your computer
- The extracted project folder

---

## Step 1: Build the Static Site

Open your terminal in the project folder and run:

```bash
cd sumix-developers
npm install
npm run build
```

This creates a `dist/` folder with all static HTML, CSS, and JS files.

**What `npm run build` does:**
- Compiles TypeScript to JavaScript
- Processes Tailwind CSS
- Generates static HTML for every page
- Outputs everything to the `dist/` folder

---

## Step 2: Prepare Files for Upload

After building, your `dist/` folder should contain:

```
dist/
├── index.html              (Home page)
├── about/
│   └── index.html          (About page)
├── team/
│   └── index.html          (Team page)
├── services/
│   └── index.html          (Services page)
├── projects/
│   └── index.html          (Projects page)
├── products/
│   └── index.html          (Products page)
├── contact/
│   └── index.html          (Contact page)
├── _next/
│   ├── static/
│   │   ├── css/            (Compiled CSS)
│   │   └── chunks/         (JavaScript bundles)
│   └── media/              (Images, fonts)
└── .htaccess               (Apache config)
```

**Important:** The `.htaccess` file inside `dist/` handles URL routing. Do NOT delete it.

---

## Step 3: Upload to InfinityFree

### Option A: FTP Upload (Recommended)

1. **Get FTP credentials** from InfinityFree:
   - Log into your InfinityFree client area
   - Go to "FTP Accounts" or "File Manager"
   - Note your: FTP server, username, password, port (usually 21)

2. **Use FileZilla** (free FTP client):
   - Download: https://filezilla-project.org/
   - Host: `ftpupload.net` (or your specific server)
   - Username: your InfinityFree username
   - Password: your InfinityFree password
   - Port: `21`
   - Click "Quickconnect"

3. **Upload files**:
   - In FileZilla, navigate to the remote `htdocs/` folder
   - **DELETE** the default `index.html` in `htdocs/`
   - Select ALL files from your local `dist/` folder
   - Drag them into the remote `htdocs/` folder
   - Wait for upload to complete (may take 5-10 minutes)

### Option B: InfinityFree File Manager

1. Log into your InfinityFree account
2. Go to "Control Panel" → "File Manager"
3. Navigate to `htdocs/`
4. Delete the default `index.html`
5. Click "Upload" and select all files from `dist/`
6. Upload in batches if needed (file manager has size limits)

---

## Step 4: Configure Your Domain

### Using InfinityFree Subdomain (free):
- Your site is live at: `https://yourusername.infinityfreeapp.com`
- No extra setup needed

### Using Custom Domain:
1. In InfinityFree, go to "Domains" → "Parked Domains" or "Addon Domains"
2. Enter your domain name
3. Update your domain's DNS nameservers to InfinityFree's:
   - `ns1.infinityfree.com`
   - `ns2.infinityfree.com`
4. Wait 24-48 hours for DNS propagation

---

## Step 5: Test Your Site

Visit your domain and verify:
- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] About page loads
- [ ] Team page loads
- [ ] Services page loads
- [ ] Projects page loads
- [ ] Products page loads
- [ ] Contact form is editable
- [ ] 3D effects render
- [ ] No 404 errors on page refresh

---

## Troubleshooting

### 404 Error on page refresh
**Cause:** InfinityFree Apache isn't routing `.html` files properly.  
**Fix:** Ensure `.htaccess` is uploaded to `htdocs/`. If still broken, try accessing `/about/index.html` directly.

### CSS/JS not loading (broken styling)
**Cause:** Files didn't upload completely or wrong path.  
**Fix:**
1. Check browser console (F12 → Console) for 404 errors
2. Re-upload the `_next/static/` folder completely
3. Clear browser cache (Ctrl+Shift+R)

### Contact form doesn't submit
**Cause:** Static sites can't process form submissions without a backend.  
**Fix:** The form is frontend-only. To make it work:
- Use Formspree (free): https://formspree.io — replace the form action
- Use Netlify Forms (if you switch to Netlify hosting)
- Use InfinityFree's PHP mail function (requires backend code)

### Images not showing
**Cause:** Next.js Image component requires optimization.  
**Fix:** Already handled — `next.config.js` has `unoptimized: true`. If still broken, check that images are in the `dist/` folder.

### Site loads slowly
**Cause:** Large JS bundles or no compression.  
**Fix:**
- The `.htaccess` enables gzip compression
- Consider using a CDN like Cloudflare (free tier available)
- Enable InfinityFree's "Cloudflare" integration in control panel

### "Suspicious Website" warning
**Cause:** InfinityFree free domains are sometimes flagged.  
**Fix:**
- Use a custom domain (recommended for professional sites)
- Or add SSL via InfinityFree's "SSL/TLS" section

---

## Optional: Add a Custom Domain

For a professional appearance, use a custom domain:

1. Buy a domain from Namecheap, GoDaddy, or Cloudflare
2. In InfinityFree: "Addon Domains" → enter your domain
3. At your domain registrar: Change nameservers to:
   ```
   ns1.infinityfree.com
   ns2.infinityfree.com
   ```
4. Wait 24-48 hours
5. Your site is now at `https://yourdomain.com`

---

## Optional: Enable SSL (HTTPS)

1. In InfinityFree control panel, go to "SSL/TLS"
2. Select your domain
3. Click "Install" for the free SSL certificate
4. Wait 5-10 minutes
5. Your site is now accessible via `https://`

---

## Updating Your Site Later

To push updates:

```bash
cd sumix-developers
# Make your edits
npm run build
# Re-upload the dist/ folder contents to InfinityFree htdocs/
```

**Tip:** Use FileZilla's "Overwrite if source newer" option to only upload changed files.

---

## Alternative: Deploy to Vercel (Easier, Also Free)

If InfinityFree feels complex, Vercel is the easiest host for Next.js:

1. Push code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Click "Deploy"
5. Done — automatic builds on every git push

Vercel advantages:
- Native Next.js support (no static export needed)
- Automatic HTTPS
- Global CDN
- Form handling built-in
- Custom domains free

---

## File Structure on InfinityFree

Your InfinityFree `htdocs/` folder should look exactly like your local `dist/` folder:

```
htdocs/
├── .htaccess
├── index.html
├── about/
│   └── index.html
├── team/
│   └── index.html
├── services/
│   └── index.html
├── projects/
│   └── index.html
├── products/
│   └── index.html
├── contact/
│   └── index.html
└── _next/
    └── static/
        ├── css/
        └── chunks/
```

**Do NOT** put files inside a `dist/` folder on the server. Upload the CONTENTS of `dist/` directly into `htdocs/`.
