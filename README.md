<h1 align="center">kauefraga.com</h1>

<p align="center">
  <img
    alt="GitHub top language"
    src="https://img.shields.io/github/languages/top/kauefraga/kauefraga.com.svg"
  />
  <img
    alt="Repository size"
    src="https://img.shields.io/github/repo-size/kauefraga/kauefraga.com.svg"
  />
  <a href="https://github.com/kauefraga/kauefraga.com/commits/main">
    <img
      alt="GitHub last commit"
      src="https://img.shields.io/github/last-commit/kauefraga/kauefraga.com.svg"
    />
  </a>
  <img
    alt="GitHub LICENSE"
    src="https://img.shields.io/github/license/kauefraga/kauefraga.com.svg"
  />
</p>

<h4 align="center">This is my personal website! There is portfolio and so on... </h4>

## ⬇️ How to start developing server

```bash
git clone https://github.com/kauefraga/kauefraga.com.git
cd kauefraga.com
npm install
npm dev
```

Or downloading with yarn? `yarn && yarn dev`
<br/>
Sincerely, i prefer pnpm, so: `pnpm i && pnpm dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/v1/hello](http://localhost:3000/api/v1/hello).

## 💻 Technologies

- :crystal_ball: Framework: [NextJS](https://nextjs.org)
  > "...React framework for production"
- :rocket: Deployed on [Vercel](https://vercel.com)
  > Vercel have the best deployment for nextjs
- :globe_with_meridians: HTTP client: [Axios](https://www.npmjs.com/package/axios)
  > Axios is a fully featured http client for doing requests
- :technologist: Developed on [Typescript](https://www.typescriptlang.org)
  > Improve dev experience by adding type safety

## :card_file_box: Project tree view

```bash
.
├─ LICENSE
├─ package.json
├─ README.md
├─ src
│  ├─ components
│  ├─ pages
│  │  ├─ api
│  │  │  └── v1
│  │  └─ index.tsx
│  ├─ providers
│  ├─ services
│  ├─ styles
├─ tailwind.config.js
└─ tsconfig.json
```

## :art: HTML hierarchies of `/src/pages/index.tsx`

- Header

  - Logo
  - Navigation

- Main

  - About role (what i do)
  - About me
  - [ ] Carousel with tech skills
  - [ ] Cards in grid layout with latest projects

- Footer

  - [ ] Logo
  - [ ] Social media icons
  - [ ] "handcrafted by me © 2022"

## 📝 License

This project is licensed under the MIT License - See the [LICENSE](https://github.com/kauefraga/kauefraga.com/blob/main/LICENSE) for more information.

---

<div align="center" display="flex">
  <img alt="Built with love" src="https://forthebadge.com/images/badges/built-with-love.svg">
  <img alt="Powered by coffee" src="https://forthebadge.com/images/badges/powered-by-coffee.svg">
</div>
