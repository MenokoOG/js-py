module.exports = {
  apps: [
    {
      name: 'backend',
      script: 'backend/server.js',
      watch: true,
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
    {
      name: 'frontend',
      script: 'venv/bin/python',
      args: 'frontend/app.py',
      interpreter: 'none',
      watch: true,
      env: {
        FLASK_ENV: 'production',
        PORT: 5000,
      },
    },
  ],
};
