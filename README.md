## Hi there 👋


Hey am **konnofuente/konnofuente** and am a Mobile/Web developer with UI/UX experience .

Some github stats about me 🤧
[![trophy](https://github-profile-trophy.vercel.app/?username=konnofuente)](https://github.com/konnofuente/github-profile-trophy)

This  last update about me was on on 🗓️24 May 2024 😅 

- 🔭 I’m currently working on MapnRank and Taxiliz
- 🌱 I’m currently learning Nothing 😂
- 👯 I’m looking to collaborate on a Fintech project
- 🤔 I’m looking for help with 💭
- 💬 Ask me about my passion
- 📫 How to reach me: LinkedIn-https://shorturl.at/N928R & konomelifuente@gmail.com
- 😄 Pronouns: Never give up
- ⚡ Fun fact: I love cooking


# Konno Meli Fuente Portfolio

Welcome to the repository for my professional portfolio website. This project showcases my skills and projects as a Frontend Developer specializing in React, Tailwind CSS, and Firebase. The portfolio is designed to highlight my UI/UX expertise and technical proficiency.

## Features

- **Responsive Design**: Utilizes Tailwind CSS for a layout that adjusts beautifully across all devices.
- **Dynamic Project Showcase**: Projects are dynamically loaded and updated through Firebase.
- **Contact Form**: Includes a functional contact form that integrates Firebase for message handling.
- **Secure and Fast**: Hosted on Firebase for secure and reliable access with fast loading times.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Firebase**: A comprehensive app development platform by Google, used here for hosting, database, and backend services.

## Project Structure

```
my-portfolio/
│
├── public/                       # Static files like index.html, favicon.ico
│
├── src/
│   ├── components/              # All UI components
│   │   ├── base/                # Base components used across the entire application
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx   # Button component
│   │   │   ├── Input/
│   │   │   │   ├── Input.jsx    # Input field component
│   │   │   │   └── input.css    # Input styles
│   │   │   └── ...
│   │   ├── common/              # Common components that are reused but not as foundational
│   │   │   ├── Modal/
│   │   │   │   ├── Modal.jsx    # Modal component
│   │   │   ├── Card/
│   │   │   │   ├── Card.jsx     # Card component for displaying content
│   │   │   └── ...
│   │   │
│   │   └── layout/              # Components that dictate major layout structures
│   │       ├── Navbar/
│   │       │   ├── Navbar.jsx   # Navbar component
│   │       ├── Footer/
│   │       │   ├── Footer.jsx   # Footer component
│   │       └── ...
│   │
│   ├── sections/                # Feature modules
│   │   ├── Project/
│   │   │   ├── ProjectList.jsx  # Component to list projects
│   │   │   ├── ProjectCard.jsx  # Single project card component
│   │   │   └── projectsSlice.js # Redux slice for projects
│   │   └── ...
│   │
│   ├── firebase/                # Firebase integration
│   │   ├── config.js            # Firebase configuration
│   │   └── services.js          # Firebase service functions
│   │
│   ├── hooks/                   # Custom React hooks
│   │   └── useAuth.js           # Authentication hook
│   │
│   ├── pages/                   # Components representing pages
│   │   ├── Home.jsx             # Home page
│   │   ├── About.jsx            # About page
│   │   ├── Portfolio.jsx        # Portfolio display page
│   │   └── Contact.jsx          # Contact page
│   │
│   ├── utils/                   # Utility functions
│   │   └── api.js               # API related functions
│   │
│   ├── App.jsx                  # Main React application component
│   ├── index.jsx                # Entry point for React application
│   └── index.css                # Global styles
│
├── .gitignore                   # Specifies intentionally untracked files to ignore
├── package.json                 # NPM package manager file
├── tailwind.config.js           # Tailwind CSS configuration
└── README.md                    # Detailed description of the project
```


## Project Setup

To get a local copy up and running, follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/konnofuente/my-portfolio.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Configure your Firebase
   - Create a Firebase project in the Firebase console.
   - Add your Firebase project credentials to `src/firebase-config.js`.

### Usage

Start the development server:
```sh
npm start
```
This command runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deployment

To deploy this project on Firebase Hosting, follow these steps:

1. Build the project
   ```sh
   npm run build
   ```
2. Deploy to Firebase
   ```sh
   firebase deploy
   ```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Arnaud Fuente - konomelifuente@gmail.com

Project Link: [https://github.com/konnofuente/my-portfolio](https://github.com/konnofuente/my-portfolio.gite)




