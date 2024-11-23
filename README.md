# Custom Domain for Bento Profile

> Transform your Bento profile with a personalized domain name

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Deployed on Zeabur](https://zeabur.com/deployed-on-zeabur-dark.svg)](https://zeabur.com?referralCode=vikshan&utm_source=vikshan)

## ✨ Features

- Easy custom domain setup
- Multiple deployment options
- SSL support
- PM2 process management
- Apache2/Nginx compatibility

## 📋 Prerequisites

Before you begin, ensure you have:

- A computer/VPS running Windows, Linux, macOS, or Ubuntu 20.04+
- [bun](https://bun.sh) v1.1.36 or later
- A [Bento](https://bento.me) account
- A custom domain name
- [PM2](https://pm2.keymetrics.io/) (optional)
- [Apache2](https://httpd.apache.org/) (Required for VPS)
- [Certbot](https://certbot.eff.org/) (Required for SSL on VPS)

> [!TIP] Get $300 free credit on Vultr to try your app! [Claim now](https://go.vikshan.tech/vultr)

### 💻 Recommended VPS Providers

- [Ionos](https://go.vikshan.tech/ionos) - Special discount available
- [Vultr](https://go.vikshan.tech/vultr) - $300 free credit
- [DigitalOcean](https://go.vikshan.tech/digitalocean) - $200 free credit
- [Hostinger](https://go.vikshan.tech/hostinger) - Discounted rates
- [BigRock VPS](https://go.vikshan.tech/bigrock) - Special offers
- [HostGator](https://go.vikshan.tech/hostgator) - Exclusive deals

> [!NOTE] Need help with setup? I'm an Ionos Partner and can assist you! Contact me at
> [Vikshan](https://go.vikshan.tech/ionos-partner)

## 🚀 Installation

### Local/VPS Installation

1. Clone and install dependencies:

```bash
git clone https://github.com/vixshan/bento.git
cd bento
bun i
```

2. Create environment variables:

```bash
# Create .env file
echo "BENTO_USERNAME=your_username" > .env
```

3. Start the application:

```bash
bun start
```

4. Run tests (optional):

```bash
bun test
```

> [!IMPORTANT] When using a VPS, make sure to set up a reverse proxy using Apache2 or Nginx. See the
> [Apache2 guide](https://docs.vikshan.tech/selfhost/dashboard/domain) or
> [Nginx guide](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/).

## ☁️ Cloud Deployment Options

1. ⭐ Star and [fork](https://github.com/vixshan/bento/fork) this repository

### Deploy to Zeabur

1. Create a [Zeabur account](https://zeabur.com?referralCode=vikshan&utm_source=vikshan)
2. Select "Deploy from GitHub" in your dashboard
3. Configure environment variables:
   - `BENTO_USERNAME`: Your Bento username

> [!NOTE] Remove the `.env` file if you're setting variables in Zeabur dashboard to avoid conflicts

### Deploy to Koyeb (Recommended)

1. [Create a Koyeb account](https://app.koyeb.com/signup)
2. Deploy from GitHub repository
3. Set required environment variables

> [!WARNING] Custom domains require a paid Koyeb plan

### Deploy to Heroku

1. [Create a Heroku account](https://signup.heroku.com/)
2. Click
   [here to deploy](https://dashboard.heroku.com/new?template=https%3A%2F%2Fgithub.com%2Fvixshan%2Fbento)
3. Configure custom domain in Settings → Domains
4. Enable auto-deploys in Deploy → Deployment method

> [!CAUTION] Known issue: Images may not persist due to caching. In case that happens, re-add those
> images in bento or use VPS deployment for best results.

### Additional Deployment Options

- **Railway**: [Documentation](https://railway.app/)
- **Okteto**: [Documentation](https://www.okteto.com/docs/)
- **Repl.it**: [Documentation](https://docs.replit.com/)
- **Docker**: [Documentation](https://docs.docker.com/)

## 🤝 Contributing

Contributions are always welcome! If you find bugs or have suggestions:

1. [Fork](https://github.com/vixshan/bento/fork) the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a [Pull Request](https://github.com/vixshan/bento/compare)

> [!TIP] If this project helped you, please consider:
>
> - Giving it a star ⭐
> - [Becoming a sponsor](https://github.com/sponsors/vixshan)
> - Checking out my [other projects](https://github.com/vixshan?tab=repositories)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💪 Powered By

<p align="left">
  <a href="https://www.digitalocean.com/?refcode=c5587212fe39&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
    <img src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg" alt="DigitalOcean" height="50">
  </a>
  <a href="https://go.vikshan.tech/vultr">
    <img src="https://www.vultr.com/media/logo_ondark.svg" alt="Vultr" height="50">
  </a>
  <a href="https://partnernetwork.ionos.com/partner/vikshan?origin=PartnerBadge">
    <img src="https://images-2.partnerportal.ionos.com/items/0461b6bb-dabe-40bb-8d94-feb41be45e49/profiles/b6282cd9-10f6-4260-90dd-0bc4584f9c33/badges/normal_blue_eco" alt="IONOS" height="50">
  </a>
</p>
