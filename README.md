![Caiburity](https://res.cloudinary.com/dbimvbfi0/image/upload/v1721265529/caiburity-dark.png)
![Caiburity](https://res.cloudinary.com/dbimvbfi0/image/upload/v1721265797/services-dark.png)

<div align="center">
  ·
  <i>Landing page for AI-powered cybersecurity company built with Next.js, TypeScript, Tailwind CSS, and Firebase</i>
  ·
  <br/>
  <br/>

<p align="center">
    <img src="https://img.shields.io/github/forks/jigar-sable/next-portfolio?style=for-the-badge" />
  <a href="https://caiburity.vercel.app">
    <img src="https://img.shields.io/static/v1?label=&message=View%20Demo&style=for-the-badge&color=black&logo=vercel" />
  </a>
</p>

<p align="center">
  <a href="#introduction-">Introduction</a> •
  <a href="#tech-stack-%EF%B8%8F">Tech Stack</a> •
  <a href="#development-">Development</a> •
  <a href="#deployment-">Deployment</a> •
  <a href="#license-">License</a>
</p>

</div>

## Introduction 👋

Caiburity is an AI-powered cybersecurity company providing comprehensive solutions to protect your network traffic and resources. Built using Next.js and Tailwind CSS, with TypeScript for enhanced code safety, and Firebase for backend services, this dynamic landing page highlights our team's expertise and services.

## Tech Stack 🛠️

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel](https://vercel.com/)
- [SendGrid](https://sendgrid.com)
- [Framer Motion](https://www.framer.com/motion)

## Development 💻

Follow these steps to run the landing page locally.

1. Fork [this](https://github.com/WhityGhost/Caiburity) repository.
2. Clone your forked copy of the repo

   ```bash
   git clone https://github.com/WhityGhost/Caiburity.git
   ```

3. Install dependencies

   ```bash
   npm i
   ```

4. Create a Firebase project and select the web app
5. Create an `.env.local` file in the root directory, and add the following variables:

   ```makefile
   SENDGRID_API_KEY=XXXXXXXX
   MAIL_FROM=YOUR_MAIL_ID
   MAIL_TO=YOUR_MAIL_ID
   ```

> **Note: `SENDGRID_API_KEY` - **Create an API key from "Settings"** -> **"API Keys" with "Restricted Access"** to only "Mail Send"**

6. Update the sample `data.tsx` provided, with your data or directly import the same.
7. Run the project

   ```bash
   npm run dev
   ```

## Deployment 🚀

1. Create a Vercel account and select "Import Project"
2. Select the forked repository and deploy
3. Add the following environment variables in the Vercel dashboard

```bash
SENDGRID_API_KEY=XXXXXXXX
MAIL_FROM=YOUR_MAIL_ID
MAIL_TO=YOUR_MAIL_ID
```

4. Hurray! You successfully deployed the landing page🥳

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/jigar-sable/next-portfolio/blob/main/LICENSE.md)

## Backlogs ✅

- [x] Animation
- [ ] Loading Screen
- [ ] Mail API
- [ ] Testimony Section
