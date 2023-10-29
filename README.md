# Add a custom domain to your bento profile

## Prerequisites

Get free [$100 Credit](https://www.vultr.com/?ref=9556008-8H) on Vultr to try your app!!!!! Click [here](https://www.vultr.com/?ref=9556008-8H), it is available for a limited time only!
---
- A computer running Windows, Linux or macOS or a VPS running Ubuntu 20.04 or
  later, here are some of my recommendations, please note that these are
  affiliate links, I will get a small commission if you buy a VPS using these
  links.
  - Ionos - Click [here for a discount](https://acn.ionos.com/SHA5)
  - Vultr - Click [here for a discound](https://www.vultr.com/?ref=9556007)
  - DigitalOcean - Click [here for a discount](https://digitalocean.pxf.io/vikshan)
  - Hostinger - Click [here for a discount](https://hostinger.sjv.io/vikshan)
  - BigRock VPS - Click [here for a discount](https://bigrock-in.sjv.io/vikshan)
  - HostGator - Click [here for a discount](https://https://partners.hostgator.com/vikshan)

> If you don't know how to do this, I am an Ionos Partner and you can hire me at
> [Vikshan](https://partnernetwork.ionos.com/partner/vixshan)

- Node.js v20.0.0 or later
- npm v7.0.0 or later
- A [Bento](https://bento.me/vikshan) account
- A custom domain, I recommend [NameCheap](https://namecheap.pxf.io/vikshan) for
  this. Please note this is an affiliate link, I will get a small commission if
  you buy a domain using this link. Some of the VPS providers I mentioned above
  also sell domains. You can also use [Freenom](https://freenom.com) for a free
  domain.
- PM2 (optional)
- Apache2 (Required for VPS ) - I won't go deep on this, you can check a
  documentation I wrote for my Discord bot's dashboard [here](docs.vikshan.me),
  it is basically the same thing.
- Certbot (Required for SSL on VPS) see [here](docs.vikshan.me)

## Installation

### Instalation in a VPS or PC

1. Clone this repository and run `npm install` in the root directory

```bash
git clone https://github.com/vixshan/bento.git
cd bento
npm install
```

2. Create a `.env` file in the root directory and add the following variables,
   see `.env.example` for an example

```bash
BENTO_USERNAME=<your bento username>
```

3. Run `npm start` in the root directory

```bash
npm start
```

The app starts using PM2, you can now access your app at `http://localhost` or
`http://localhost:3000` if you're not using a reverse proxy.

To test your app, run `npm test` in the root directory

```bash
npm test
```

- Set up a reverse proxy to the app using Apache2 or Nginx. See
  [here](https://docs.vikshan.me/installation/dashboard/custom-domain) for
  Apache2 and
  [here](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/) for
  Nginx.

### Deployment to Heroku

In this example I will assume you;

- Have already created a Heroku account
- Have already created a Bento account
- Have already created a custom domain
- Using Heroku web interface

---

1. Clone my repository to your GitHub account and connect it to Heroku.
2. Create a new Heroku app and a pipeline
3. Add the GitHub repository to the pipeline
4. Add the following config vars to the Heroku app

```bash
BENTO_USERNAME=<your bento username>
```

5. Deploy the app to Heroku
6. Add the custom domain to the Heroku app

> Note: You can also deploy the app to Heroku using the Heroku CLI. Due to some
> issues, i think caching, deploying the app on Heroku doesnt show the images,
> They load for a brief second and disappear. So, I recommend deploying the app
> to a VPS or PC.

## Usage

I haven't tried deploying the app to other platforms like AWS, CloudFlare
Workers, etc. If you have, please let me know how it went. My instance is
deployed on Azure, and cached by CloudFlare.

- Cached - [vikshan.me](https://vikshan.me)
- Uncached -
  [bento.eastus.cloudapp.azure.com](https://bento.eastus.cloudapp.azure.com/)

## Contributing

I am not a professional developer, I am still learning. If you find any bugs or
issues with the app please open an issue or a pull request. I will be happy to
review it. Also if you have any suggestions or ideas, please let me know.

If this project helped you, please consider giving it a star ⭐, or sponsor me
[here](https://github.com/sponsors/vixshan) and check out my other projects
[here](https://github.com/vixshan?tab=repositories) It will help me a lot.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
