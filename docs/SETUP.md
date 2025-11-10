# Setup Guide

## Prerequisites

- Node.js 18+
- npm or yarn
- Git

## Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/vihaankulkarni29/website-gen.git
cd website-gen
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create `.env.local` in the client directory:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Start Development Server
```bash
cd clients/every-morning-cartel
npm run dev
```

Visit `http://localhost:3000` to see the site.

## Project Structure

```
website-gen/
├── clients/                 # Individual client projects
│   └── every-morning-cartel/
│       ├── src/            # Source code
│       ├── public/         # Static assets
│       └── package.json    # Dependencies
├── shared/                  # Reusable components & utilities
│   ├── components/         # Shared React components
│   ├── utils/             # Helper functions
│   └── templates/         # Project templates
├── docs/                   # Documentation
├── scripts/                # Automation scripts
└── README.md              # Main project overview
```

## Development Workflow

### Creating a New Client
```bash
./scripts/create-client.sh client-name
```

### Adding Shared Components
Place reusable components in `shared/components/` with proper TypeScript types.

### Deployment
```bash
./scripts/deploy-client.sh every-morning-cartel
```

## Code Quality

- Use TypeScript for all new code
- Follow ESLint configuration
- Write meaningful commit messages
- Add tests for new features

## Troubleshooting

### Common Issues

**Port 3000 already in use:**
```bash
lsof -ti:3000 | xargs kill -9
```

**Dependencies not installing:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
npm run build
# Check the error messages and fix TypeScript issues