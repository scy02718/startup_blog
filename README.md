# Startup Blog Platform

Welcome to the **Startup Blog Platform**, a dynamic full-stack web application where users can pitch their startup ideas, share innovative concepts, and engage with a community of like-minded entrepreneurs. Built with cutting-edge technologies like **Next.js**, **Tailwind CSS**, and **Sanity CMS**, this platform ensures a seamless user experience and robust performance.

---

## Key Features

### 🚀 **Startup Idea Pitching**
- Authenticated users can share their startup ideas and showcase them to the community.
- Each blog post is displayed with its own unique content, author information, and the number of views.

### 🔒 **GitHub Authentication**
- Users can log in securely using their GitHub accounts.
- Authentication is powered by **NextAuth.js**, ensuring reliable and secure login sessions.

### 📊 **View Counter**
- Each blog post tracks and displays the number of views it has received, offering insights into engagement and popularity.

### 🎨 **Responsive Design**
- The platform is styled using **Tailwind CSS**, providing a modern, mobile-first, and responsive design.

### 📝 **CMS Integration**
- Powered by **Sanity CMS**, users can manage and edit content easily.
- Real-time previews for posts ensure the best content presentation.

---

## Tech Stack

### Frontend
- **Next.js**: React-based framework for fast and scalable web applications.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

### Backend
- **Sanity CMS**: Headless CMS for flexible and dynamic content management.
- **NextAuth.js**: Authentication solution for secure user login with GitHub.

---

## Installation

Follow these steps to set up the project locally:

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14 or newer)
- **npm** or **yarn**
- A **GitHub OAuth App** for authentication
- A **Sanity CMS** project with the required schema

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/startup-blog-platform.git
   cd startup-blog-platform
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables:**
   Create a `.env.local` file in the root directory and add the following:
   ```env
    AUTH_SECRET="your-auth-secret"
    AUTH_GITHUB_ID="your-github-id"
    AUTH_GITHUB_SECRET="your-github-secret"
    NEXT_PUBLIC_SANITY_DATASET="your-sanity-dataset"
    NEXT_PUBLIC_SANITY_PROJECT_ID="your-sanity-project-id"
    NEXT_PUBLIC_SANITY_API_VERSION=your-sanity-api-version
    SANITY_WRITE_TOKEN=your-sanity-write-tokcn
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Visit `http://localhost:3000` in your browser.

---

## Project Structure

```plaintext
├── components         # Reusable React components
├── app                # Next.js pages
│   ├── (root)         # Home page, blog posts, and user pages
│   │   ├── startup    # Startup idea pages
│   │   │   ├── [id]   # Dynamic startup idea pages
│   │   │   └── create # Page for creating new startup ideas
│   │   └── user       # User profile pages
│   │       └── [id]   # Dynamic user profile pages
│   ├── api            # API routes for authentication
│   ├── fonts          # Custom fonts
│   ├── studio         # Sanity CMS studio
├── components         # Reusable React components
│   ├── ui             # UI components
├── hooks              # Custom React hooks
├── lib                # Utility functions
├── public            # Static assets
├── sanity            # Sanity CMS configuration
├── auth.ts           # NextAuth.js configuration
├── next.config.ts    # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── README.md          # Project overview
```

---

## Sanity CMS Setup

1. **Install Sanity CLI:**
   ```bash
   npm install -g @sanity/cli
   ```

2. **Initialize your Sanity project:**
   ```bash
   sanity init
   ```

3. **Define schemas:**
   Update the `sanity/schemas` directory with your desired content schemas, e.g., `post` schema for blog posts.

4. **Deploy the studio:**
   ```bash
   sanity deploy
   ```

---

## Deployment

To deploy the application:

1. **Push your code to a GitHub repository.**
2. **Connect your repository to Vercel:**
   - Sign in to [Vercel](https://vercel.com/).
   - Link your GitHub repository and configure environment variables in the Vercel dashboard.
3. **Deploy:**
   Vercel will automatically build and deploy your project.

---

## Contributing

We welcome contributions! To contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request.

---

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## Contact

If you have any questions or feedback, feel free to reach out:
- Email: scy02718@gmail.com
- GitHub: [scy02718](https://github.com/scy02718)
---

Thank you for checking out the Startup Blog Platform! 🎉

