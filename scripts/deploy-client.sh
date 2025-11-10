#!/bin/bash

# Deploy Client Script
# Usage: ./deploy-client.sh client-name [environment]

set -e

if [ $# -eq 0 ]; then
    echo "Usage: $0 <client-name> [environment]"
    echo "Example: $0 every-morning-cartel production"
    echo "Environments: development, staging, production (default: production)"
    exit 1
fi

CLIENT_NAME=$1
ENVIRONMENT=${2:-production}
CLIENT_DIR="clients/$CLIENT_NAME"

# Check if client exists
if [ ! -d "$CLIENT_DIR" ]; then
    echo "Error: Client '$CLIENT_NAME' not found!"
    exit 1
fi

echo "🚀 Deploying $CLIENT_NAME to $ENVIRONMENT"

# Navigate to client directory
cd "$CLIENT_DIR"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Deploy based on environment
case $ENVIRONMENT in
    "development")
        echo "🧪 Deploying to development..."
        # Add development deployment logic here
        # Example: Deploy to Vercel dev environment
        ;;
    "staging")
        echo "🧪 Deploying to staging..."
        # Add staging deployment logic here
        # Example: Deploy to Netlify staging
        ;;
    "production")
        echo "🚀 Deploying to production..."
        # Check if Vercel CLI is available
        if command -v vercel &> /dev/null; then
            echo "Using Vercel CLI..."
            vercel --prod
        else
            echo "Vercel CLI not found. Please install it or deploy manually."
            echo "Run: npm i -g vercel"
            echo "Then: vercel --prod"
            exit 1
        fi
        ;;
    *)
        echo "❌ Unknown environment: $ENVIRONMENT"
        echo "Available environments: development, staging, production"
        exit 1
        ;;
esac

echo "✅ Deployment completed successfully!"
echo ""
echo "Next steps:"
echo "1. Check your deployment URL"
echo "2. Test all functionality"
echo "3. Update DNS if needed"
echo "4. Monitor performance metrics"