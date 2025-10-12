# Portfolio Website - Project Structure

## Overview
A modern, single-page portfolio website built with React showcasing professional experience, skills, projects, and contact information.

## Color Scheme
- **Primary Gradient**: Purple to Blue (#667eea to #764ba2)
- **Background**: White (#ffffff) and Light Gray (#f8f9fa)
- **Text**: Dark Gray (#2d3748) and Medium Gray (#4a5568)
- **Accents**: Purple (#667eea) and Deep Purple (#764ba2)

## File Structure

```
my-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Fixed navigation with smooth scroll
│   │   ├── Navbar.css
│   │   ├── Hero.js            # Landing section with name and CTA
│   │   ├── Hero.css
│   │   ├── About.js           # Profile summary
│   │   ├── About.css
│   │   ├── Skills.js          # Technical skills categorized
│   │   ├── Skills.css
│   │   ├── Experience.js      # Work experience timeline
│   │   ├── Experience.css
│   │   ├── Projects.js        # Portfolio projects
│   │   ├── Projects.css
│   │   ├── Education.js       # Education & certifications
│   │   ├── Education.css
│   │   ├── Contact.js         # Contact form and info
│   │   ├── Contact.css
│   │   ├── Footer.js          # Footer with links
│   │   └── Footer.css
│   ├── App.js                 # Main app component
│   ├── App.css                # Global app styles
│   ├── index.js               # Entry point
│   └── index.css              # Global styles
├── package.json
└── README.md
```

## Components Description

### 1. Navbar
- Fixed navigation bar
- Smooth scroll to sections
- Mobile responsive hamburger menu
- Changes style on scroll

### 2. Hero
- Full-screen landing section
- Gradient background
- Contact information
- Social media links
- Call-to-action button

### 3. About
- Brief profile summary
- Professional overview

### 4. Skills
- Categorized technical skills
- Interactive hover effects
- Grid layout

### 5. Experience
- Timeline-based layout
- Company details
- Responsibilities and achievements
- Hover animations

### 6. Projects
- Project cards with descriptions
- Technology stack tags
- Hover effects

### 7. Education
- Educational qualifications
- Certifications
- Grid layout

### 8. Contact
- Contact form with validation
- Contact information cards
- Social media links
- Form submission handling

### 9. Footer
- Copyright information
- Quick links
- Social media links

## Features

- ✅ Fully responsive design
- ✅ Smooth scroll navigation
- ✅ Modern gradient color scheme
- ✅ Hover animations and transitions
- ✅ Mobile-friendly hamburger menu
- ✅ Form validation
- ✅ Clean and organized code structure
- ✅ Accessible design

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization
All colors, fonts, and content can be easily customized by editing the respective component files and CSS files.
