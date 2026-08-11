# Niveshmarg

Niveshmarg is a modern marketing and product landing page for an AI-powered stock and portfolio workspace. The app presents the platform’s value proposition, AI scoring concepts, portfolio tools, and investment workflow in a polished single-page experience built with Next.js.

## Overview

This project is a frontend marketing site for:

- AI-based portfolio research and analysis
- Six-agent investment research workflow
- AI Score evaluation framework
- Portfolio diagnostics and suggestions
- Paper trading and backtesting workflows
- Board-ready reporting and decision support

The app is built with:

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

## Project structure

```bash
.
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── logo.png
├── src/
│   ├── app/
│   ├── components/
│   └── globals.css
├── package.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
└── README.md
```

## Local development

### Requirements

- Node.js 20+
- npm

### Install dependencies

```bash
npm install
```

### Run the app in development mode

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

### Production build

```bash
npm run build
npm run start
```

This serves the optimized production build locally on port 3000.

## Proxmox LXC setup

The following steps describe a practical setup for running this app inside a Proxmox LXC container.

### 1. Create the container

In Proxmox:

- Create a new LXC container
- Linux distribution: Debian 12 or Ubuntu 22.04/24.04
- Resource sizing example:
  - CPU: 2 vCPU
  - RAM: 4 GB
  - Disk: 20–40 GB
- Enable nesting if you want to use Node tooling more comfortably

### 2. Open the container and update the system

```bash
apt update && apt upgrade -y
apt install -y curl ca-certificates gnupg git build-essential
```

### 3. Install Node.js 20

For Debian/Ubuntu-based containers, use NodeSource:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
```

Verify:

```bash
node -v
npm -v
```

### 4. Clone the project

```bash
git clone <your-repository-url> /opt/niveshmarg
cd /opt/niveshmarg
```

If you are using a private repository, make sure SSH keys are configured or use HTTPS with the appropriate credentials.

### 5. Install project dependencies

```bash
npm install
```

### 6. Build for production

```bash
npm run build
```

### 7. Start the app in production mode

```bash
npm run start -- --hostname 0.0.0.0 --port 3000
```

This binds the app to all network interfaces inside the container.

### 8. Run it as a service with systemd

Create a service file:

```bash
sudo nano /etc/systemd/system/niveshmarg.service
```

Add:

```ini
[Unit]
Description=NiveshMarg Next.js app
After=network.target

[Service]
Type=simple
WorkingDirectory=/opt/niveshmarg
Environment=NODE_ENV=production
Environment=PORT=3000
ExecStart=/usr/bin/npm run start -- --hostname 0.0.0.0 --port 3000
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Then enable it:

```bash
systemctl daemon-reload
systemctl enable --now niveshmarg
systemctl status niveshmarg
```

### 9. Expose it through Proxmox networking

If you want the site reachable from outside the container, configure either:

- a bridged network on the LXC container, or
- a reverse proxy on the host or another container (Nginx/Traefik/Caddy)

A simple HTTP proxy example would route traffic to:

```text
http://127.0.0.1:3000
```

### 10. Optional reverse proxy example with Nginx

Install Nginx on the host or another service container:

```bash
apt install -y nginx
```

Create a site config:

```nginx
server {
    listen 80;
    server_name niveshmarg.example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Then enable the site and reload Nginx.

## Notes

- This repository is primarily a frontend landing/application shell for the NiveshMarg brand experience.
- If the production deployment later needs environment variables or backend connectivity, create a `.env.local` file and add only the necessary values.
- The public folder already includes the brand assets such as the logo and favicon used by the app.

## Useful commands

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```

```bash
git pull origin main
npm run build
cd /var/www/niveshmarg
cp -r .next/static .next/standalone/.next/
cp -r public .next/standalone/
chown -R www-data:www-data .next/standalone
systemctl restart niveshmarg
```

## License

This project is private and intended for the NiveshMarg product/site workflow unless otherwise stated by the repository owner.
