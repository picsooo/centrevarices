module.exports = {
  apps: [
    {
      name: "centre-varices",
      script: "node",
      args: "server.js",
      cwd: "/var/www/centredesvarices/.next/standalone",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "0.0.0.0",
      },
      instances: 1,
      autorestart: true,
      max_memory_restart: "512M",
    },
  ],
};
