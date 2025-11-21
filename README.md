# ServiceLead Dashboard

A modern, responsive dashboard application built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## ✨ Features

- 📊 **Dashboard Overview** - Real-time job performance insights and earning analytics
- 💼 **Job Management** - Track active, accepted, completed, and canceled jobs
- 💰 **Earning Overview** - Interactive charts and transaction history
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🎨 **Modern UI** - Clean design with Tailwind CSS v4
- 🚀 **Fast Performance** - Built with Next.js App Router
- 🌓 **Mobile Navigation** - Sticky bottom navigation on mobile devices

## 🛠️ Tech Stack

- **Framework:** Next.js 16.0.3
- **UI Library:** React 19.2.0
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Deployment:** Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd dash-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
dash-demo/
├── app/
│   ├── dashboard/
│   │   ├── page.tsx          # Main dashboard
│   │   ├── layout.tsx        # Dashboard layout
│   │   └── ...
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── navbar.tsx            # Top navigation bar
│   ├── sidebar.tsx           # Sidebar navigation
│   └── bottom-nav.tsx        # Mobile bottom navigation
├── contexts/
│   └── SidebarContext.tsx    # Sidebar state management
└── public/
```

## 📱 Responsive Design

- **Desktop (lg+):** Full sidebar with desktop navbar
- **Mobile (<lg):** 
  - Simplified top navbar with logo and notifications
  - Sticky bottom navigation bar
  - Collapsible sidebar menu

## 🚀 Deploy on Vercel

This project is ready to deploy on Vercel with **zero configuration**!

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/dash-demo)

### Manual Deployment

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using Next.js and Tailwind CSS
