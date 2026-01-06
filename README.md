# Remote Start & Shutdown Project (NEXT.js)

This is a small **NEXT.js** project for remotely starting and shutting down Linux and Windows machines.  
It uses **Wake-on-LAN (WoL)** and **SSH** for control.

---

## Getting Started

1. **Clone the repository** and edit the `config.json` file to match your computers. Fill in your personal information.

2. **Generate an SSH key pair** on the machine that will run this service. Configure the other computers to allow SSH connections as needed.

3. **Create a `.env` file** in the root directory. You can use the provided `.envBase` as a template, which includes descriptions of all environment variables you need to set.

4. **Start the Node.js server**:

```bash
npm run build
npm start
```

Notice that this won't use the specified port in the .env file.

## Docker

It is recommended to use docker for running the proect. Before using, follow all previous steps, but instead of running it via npm, run

```bash
docker compose build
docker compose run -d
```

This will start Docker and run the service using the credentials in `.env`.
