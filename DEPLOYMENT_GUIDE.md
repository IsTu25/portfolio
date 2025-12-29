# Deployment Guide: Vercel & Custom Domain

## 1. Deploy to Vercel
Since your code is already on GitHub, this is very easy!

1.  **Log in to Vercel:** Go to [vercel.com](https://vercel.com) and log in (sign up with GitHub if you haven't).
2.  **Add New Project:** Click the **"Add New..."** button and select **"Project"**.
3.  **Import Git Repository:** You should see your `portfolio` repository in the list. Click **"Import"**.
4.  **Configure Project:**
    *   **Framework Preset:** It should auto-detect **Next.js**.
    *   **Root Directory:** `./` (default).
    *   **Environment Variables:** You generally don't need any for this static portfolio unless you added secret keys later.
5.  **Click Deploy:** Wait about a minute. Your site will be live at a URL like `portfolio-isfaks-projects.vercel.app`.

---

## 2. Set Up Your Custom Domain (`isfakiqbalchowdhury.dev`)

To replace the `.vercel.app` link with your own branded domain:

### Prerequisite: Buy the Domain
If you haven't already, you must purchase `isfakiqbalchowdhury.dev` from a domain registrar (like **Namecheap**, **GoDaddy**, **Porkbun**, or **Google Domains**).

### Configuration Steps:
1.  **Go to Vercel Dashboard:** Open your newly deployed `portfolio` project.
2.  **Settings -> Domains:** Click on the **Settings** tab, then select **Domains** from the left menu.
3.  **Enter Domain:** Type `isfakiqbalchowdhury.dev` in the box and click **Add**.
4.  **Choose Option:** Vercel will ask how you want to add it. usually, choose the recommended option (add to main branch).

### 3. Update DNS Records (The Technical Part)
Vercel will now show you an **Invalid Configuration** error (this is normal!). It will provide you with **DNS Records** that you need to copy to your Domain Registrar.

**Option A: Recommended (A Record)**
1.  Log in to your **Domain Registrar** (where you bought the domain).
2.  Find the **DNS Settings** or **Name Server Management** page for your domain.
3.  Add an **A Record**:
    *   **Type:** `A`
    *   **Name/Host:** `@` (or leave blank)
    *   **Value:** `76.76.21.21` (Vercel's IP address)
    *   **TTL:** Automatic or 3600

**Option B: CNAME (for www)**
If you also want `www.isfakiqbalchowdhury.dev` to work:
1.  Add a **CNAME Record**:
    *   **Type:** `CNAME`
    *   **Name/Host:** `www`
    *   **Value:** `cname.vercel-dns.com`

### 4. Wait for Propagation
*   Go back to Vercel and click **Refresh**.
*   It might take anywhere from **5 minutes to 24 hours** for the changes to spread across the internet (DNS propagation).
*   Once the error turns green (Valid), your site is live at [isfakiqbalchowdhury.dev](https://isfakiqbalchowdhury.dev)!
