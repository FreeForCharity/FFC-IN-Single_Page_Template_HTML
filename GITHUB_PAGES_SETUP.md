# GitHub Pages Configuration Required

## Issue

The site is currently rendering the README.md instead of the HTML site because GitHub Pages is not properly configured to use GitHub Actions as the deployment source.

## Solution

You need to update the GitHub Pages settings in the repository to use GitHub Actions:

### Steps to Fix:

1. Go to your repository on GitHub: https://github.com/FreeForCharity/FFC-IN-Single_Page_Template_HTML

2. Click on **Settings** (top navigation)

3. In the left sidebar, click on **Pages** (under "Code and automation")

4. Under "Build and deployment", find the **Source** dropdown

5. Change the source from "Deploy from a branch" to **"GitHub Actions"**

6. Save the changes

### What This Does:

- Tells GitHub Pages to use the deployment from the GitHub Actions workflow (`.github/workflows/deploy.yml`) instead of deploying directly from the main branch
- The workflow already deploys the `html-site/` directory contents, which contain the actual HTML website
- Once configured correctly, the site will be available at:
  - https://ffcworkingsite1.org (custom domain)
  - https://freeforcharity.github.io/FFC-IN-Single_Page_Template_HTML/ (GitHub Pages URL)

### Verification:

After making the change:
1. The deploy workflow will automatically run (or you can manually trigger it from the Actions tab)
2. Visit the site URLs above to verify the HTML site is loading instead of the README
3. You should see the actual Free For Charity website, not the repository documentation

## Current Configuration:

- ✅ Deployment workflow configured correctly (`.github/workflows/deploy.yml`)
- ✅ HTML site ready in `html-site/` directory  
- ✅ `.nojekyll` file present in `html-site/` to disable Jekyll processing
- ✅ CNAME file added for custom domain support
- ❌ **Repository Pages settings need to be set to "GitHub Actions"** ← YOU NEED TO DO THIS

## Why This Is Necessary:

GitHub Pages can deploy in two ways:
1. **Deploy from a branch**: GitHub serves files directly from a branch (e.g., main branch root or gh-pages branch)
2. **GitHub Actions**: GitHub uses the artifact uploaded by a workflow (our approach)

The repository is currently set to option 1, which is why it's showing the README.md from the main branch root. We need to switch to option 2 to serve the HTML site from the `html-site/` directory via the GitHub Actions workflow.
