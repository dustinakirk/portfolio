#!/bin/bash

# Script to push the Flask app to GitHub after repository creation

echo "Adding GitHub remote..."
git remote add origin https://github.com/dustinakirk/flask-vercel-app.git

echo "Pushing to GitHub..."
git push -u origin main

echo "Repository pushed successfully!"
echo ""
echo "Next steps for Vercel deployment:"
echo "1. Go to https://vercel.com"
echo "2. Click 'Add New Project'"
echo "3. Import your GitHub repository: flask-vercel-app"
echo "4. Vercel will automatically detect the Flask configuration"
echo "5. Click 'Deploy'"