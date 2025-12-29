---
description: How to deploy the application to Vercel
---

This workflow guides you through deploying the React application to Vercel using the Vercel CLI.

1.  **Login to Vercel**
    The first step is to authenticate with Vercel.
    ```powershell
    npx vercel login
    ```
    Follow the prompts in the terminal/browser to log in.

2.  **Deploy**
    Once logged in, you can deploy the project.
    ```powershell
    npx vercel
    ```
    - Set up and deploy? [Y/n]: y
    - Which scope do you want to deploy to?: (Select your user/team)
    - Link to existing project?: [y/N]: n (unless you already have one)
    - What’s your project’s name?: (Press Enter for default or type a name)
    - In which directory is your code located?: ./ (Press Enter)
    - Want to modify these settings?: [y/N]: n (Auto-detection is usually correct for Vite)

3.  **Production Deployment (Optional)**
    The previous step creates a "Preview" deployment. To deploy to production:
    ```powershell
    npx vercel --prod
    ```
