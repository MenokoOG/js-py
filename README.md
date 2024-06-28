

---

# JS-PY Project

This is a simple project that combines a JavaScript backend using Express and a Python frontend using Flask. It fetches random dog images from the Dog CEO API and displays them with a nice Tailwind CSS style.

## Project Structure

```
js-py/
├── backend/
│   ├── package.json
│   ├── server.js
│   └── routes/
│       └── api.js
├── frontend/
│   ├── app.py
│   ├── requirements.txt
│   ├── static/
│   │   ├── css/
│   │   │   └── styles.css
│   │   └── images/
│   └── templates/
│       └── index.html
├── ecosystem.config.js
├── render.yaml
├── package.json
└── README.md
```

## Setup Instructions

### Backend

1. **Navigate to the `backend` directory:**
   ```sh
   cd js-py/backend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the backend server:**
   ```sh
   node server.js
   ```

### Frontend

1. **Navigate to the `frontend` directory:**
   ```sh
   cd js-py/frontend
   ```

2. **Create and activate a virtual environment:**
   ```sh
   python -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies:**
   ```sh
   pip install -r requirements.txt
   ```

4. **Start the frontend server:**
   ```sh
   python app.py
   ```

### Combined Deployment

1. **Ensure you have pm2 installed globally:**
   ```sh
   npm install -g pm2
   ```

2. **Navigate to the root directory and install pm2 and other dependencies:**
   ```sh
   cd js-py
   npm install
   ```

3. **Start both servers using pm2:**
   ```sh
   pm2 start ecosystem.config.js
   ```

## Deployment on Render

1. **Create a `render.yaml` file in the root of your project to configure the service:**

   ```yaml
   services:
     - type: web
       name: js-py
       env: node
       buildCommand: "npm install && cd backend && npm install && cd ../frontend && python -m venv venv && source venv/bin/activate && pip install -r requirements.txt && cd .."
       startCommand: "npm start"
       envVars:
         - key: NODE_ENV
           value: production
         - key: FLASK_ENV
           value: production
         - key: PORT
           value: 3000
       plan: free
       disk:
         sizeGB: 1
   ```

2. **Push your code to GitHub:**

   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/js-py.git
   git push -u origin main
   ```

3. **Create a new Web Service on Render:**

   - Go to the Render dashboard.
   - Click on "New" and select "Web Service".
   - Connect your GitHub repository.
   - Select your repository and click "Next".
   - Render will automatically detect the `render.yaml` file and configure the service.
   - Click "Create Web Service" to deploy your application.

## Access the Website

After deploying, you should be able to access your application using the URL provided by Render. The frontend will communicate with the backend via the API URL you specified.

## Acknowledgements

- [Dog CEO's Dog API](https://dog.ceo/dog-api/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

This project is licensed under the MIT License.

---

