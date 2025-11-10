# Client Project Guidelines

## Project Structure

Each client project should follow this structure:

```
clients/client-name/
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Homepage
│   │   └── globals.css     # Global styles
│   └── components/         # Client-specific components
├── public/                  # Static assets
│   ├── assets/            # Images, videos, etc.
│   └── favicon.ico
├── package.json            # Dependencies
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
├── .env.local             # Environment variables
├── .gitignore             # Git ignore rules
└── README.md              # Project documentation
```

## Naming Conventions

### Files and Folders
- Use kebab-case for file names: `contact-form.tsx`
- Use PascalCase for component names: `ContactForm.tsx`
- Use camelCase for utilities: `formatDate.ts`

### CSS Classes
- Use Tailwind utility classes
- Custom classes should be kebab-case
- Follow BEM methodology for complex components

### Variables
- TypeScript: camelCase for variables, PascalCase for types
- CSS custom properties: kebab-case with double dashes

## Code Quality Standards

### TypeScript
- Strict mode enabled
- No `any` types without justification
- Proper interface definitions
- Generic types where appropriate

### React
- Functional components with hooks
- Custom hooks for reusable logic
- Proper key props in lists
- Error boundaries for error handling

### Styling
- Tailwind CSS for utility classes
- CSS custom properties for theme variables
- Responsive design first
- Dark mode support when applicable

## Component Guidelines

### Structure
```tsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface ComponentProps {
  title: string
  onAction?: () => void
}

export default function Component({ title, onAction }: ComponentProps) {
  const [state, setState] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="component-class"
    >
      <h2>{title}</h2>
      <button onClick={onAction}>Action</button>
    </motion.div>
  )
}
```

### Props Interface
- Define interfaces for all props
- Use optional props with `?`
- Default values in component destructuring

### State Management
- useState for local component state
- useReducer for complex state logic
- Context API for shared state (if needed)

## Performance Optimization

### Images
```tsx
import Image from 'next/image'

<Image
  src="/hero-image.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority // For above-the-fold images
  placeholder="blur"
/>
```

### Code Splitting
- Dynamic imports for large components
- Route-based code splitting (automatic with app router)
- Lazy loading for below-the-fold content

### Bundle Analysis
- Regular bundle size monitoring
- Remove unused dependencies
- Optimize imports

## SEO & Accessibility

### Meta Tags
```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: 'Every Morning Cartel',
  description: 'Premium coffee experience in Mumbai',
  openGraph: {
    title: 'Every Morning Cartel',
    description: 'Premium coffee experience in Mumbai',
    images: ['/og-image.jpg']
  }
}
```

### Accessibility
- Semantic HTML elements
- Proper ARIA labels
- Keyboard navigation support
- Color contrast compliance
- Screen reader testing

## Testing

### Unit Tests
```tsx
// __tests__/Component.test.tsx
import { render, screen } from '@testing-library/react'
import Component from '../Component'

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component title="Test" />)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
```

### E2E Tests
- Playwright for critical user journeys
- Visual regression testing
- Performance testing

## Deployment Checklist

- [ ] Environment variables configured
- [ ] Build passes without errors
- [ ] Images optimized
- [ ] SEO meta tags set
- [ ] Accessibility audit passed
- [ ] Performance metrics checked
- [ ] Mobile responsiveness tested
- [ ] Cross-browser compatibility verified

## Maintenance

### Regular Tasks
- Dependency updates (weekly)
- Security vulnerability checks
- Performance monitoring
- User feedback review

### Documentation
- Update README for new features
- Document API changes
- Maintain changelog

## Communication

### Client Updates
- Regular progress reports
- Screenshot previews for design changes
- Performance metrics sharing
- Issue tracking and resolution

### Code Reviews
- Pull request template
- Code review checklist
- Automated testing gates
- Deployment approval process