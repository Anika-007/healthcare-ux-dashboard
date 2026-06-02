# 🚀 GitHub Setup - Final Steps

Your code is ready to push! Follow these simple steps:

## Option 1: Using GitHub CLI (Fastest)

```bash
# Install GitHub CLI if you don't have it
brew install gh

# Login to GitHub
gh auth login

# Create repo and push (all in one command!)
gh repo create healthcare-ux-dashboard --public --source=. --remote=origin --push
```

## Option 2: Using GitHub Website (Manual)

### Step 1: Create Repository on GitHub

1. Go to: https://github.com/new
2. **Repository name:** `healthcare-ux-dashboard`
3. **Description:** Healthcare UX System Intelligence Dashboard
4. **Visibility:** Public (so GitHub Pages works for free)
5. **DO NOT** check "Add a README file" (we already have one)
6. Click **Create repository**

### Step 2: Push Your Code

Run these commands in your terminal:

```bash
cd /Users/AM70864/CascadeProjects/healthcare-ux-dashboard

git remote add origin https://github.com/Anika-007/healthcare-ux-dashboard.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to: https://github.com/Anika-007/healthcare-ux-dashboard/settings/pages
2. Under **Build and deployment**:
   - **Source:** Select "GitHub Actions"
3. That's it! The workflow is already configured.

### Step 4: Wait for Deployment

- Go to: https://github.com/Anika-007/healthcare-ux-dashboard/actions
- Watch the deployment (takes ~2 minutes)
- Once complete, your site will be live at:

## 🌐 Your Live URL:
```
https://anika-007.github.io/healthcare-ux-dashboard/
```

---

## 🔑 If You Need Authentication

If GitHub asks for credentials when pushing:

### Option A: Use Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scopes: `repo`, `workflow`
4. Copy the token
5. When prompted for password, paste the token

### Option B: Use SSH (Recommended)
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to GitHub
cat ~/.ssh/id_ed25519.pub
# Copy output and add to: https://github.com/settings/keys

# Change remote to SSH
git remote set-url origin git@github.com:Anika-007/healthcare-ux-dashboard.git
git push -u origin main
```

---

## ✅ Quick Checklist

- [ ] Create repository on GitHub
- [ ] Push code: `git push -u origin main`
- [ ] Enable GitHub Pages (Source: GitHub Actions)
- [ ] Wait 2 minutes for deployment
- [ ] Visit: https://anika-007.github.io/healthcare-ux-dashboard/

---

## 🎉 After Setup

Every time you make changes:
```bash
git add .
git commit -m "Your update message"
git push
```

Your site will automatically rebuild and deploy in ~2 minutes!
