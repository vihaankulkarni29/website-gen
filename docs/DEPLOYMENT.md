# Deployment Guide

## Vercel Deployment (Recommended)

### Automatic Deployment
1. Connect GitHub repository to Vercel
2. Set build settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `clients/every-morning-cartel`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### Environment Variables
Add to Vercel project settings:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### Custom Domain
1. Go to Vercel project settings
2. Add custom domain
3. Configure DNS records as instructed

## Manual Deployment Options

### Netlify
```bash
npm run build
npm run export
```
Upload the `out/` directory to Netlify.

### Static Hosting
```bash
npm run build
npm run export
```
Deploy the `out/` directory to any static host (GitHub Pages, AWS S3, etc.).

## Build Optimization

### Image Optimization
- Use Next.js `Image` component for automatic optimization
- Convert images to WebP format
- Implement lazy loading

### Performance Monitoring
- Enable Vercel Analytics
- Monitor Core Web Vitals
- Use Lighthouse for regular audits

## CDN Configuration

### Asset Optimization
- Enable gzip compression
- Set appropriate cache headers
- Use CDN for static assets

### Global Distribution
- Vercel automatically distributes globally
- Consider Cloudflare for additional CDN layer

## SSL & Security

### HTTPS Setup
- Vercel provides automatic SSL certificates
- Force HTTPS redirects in `next.config.ts`

### Security Headers
```javascript
// next.config.ts
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ]
  }
}
```

## Monitoring & Analytics

### Error Tracking
- Implement error boundaries
- Use Sentry for error monitoring
- Log client-side errors

### Performance Monitoring
- Vercel Analytics for real-time metrics
- Google Analytics 4 for user behavior
- Hotjar for user experience insights

## Backup & Recovery

### Database Backups
- Regular automated backups
- Off-site storage
- Test restore procedures

### Code Repository
- Use GitHub for version control
- Implement branch protection rules
- Regular code reviews

## Rollback Strategy

### Quick Rollback
```bash
# Using Vercel CLI
vercel rollback
```

### Version Control
- Tag releases in Git
- Keep deployment history
- Document rollback procedures

## Maintenance

### Regular Updates
- Update dependencies monthly
- Monitor security vulnerabilities
- Keep Node.js version current

### Performance Optimization
- Regular Lighthouse audits
- Monitor bundle size
- Optimize images and assets