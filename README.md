# 🌐 Multi-Page Portfolio

A modern, accessible, and responsive **3-page personal website** built using **semantic HTML**, **CSS**, and **vanilla JavaScript**.  
This project includes a **Profile Page**, **About Page**, and **Contact Page**, designed to meet HNG Stage 0 Task requirements with complete accessibility, testability, and responsiveness.

## ✨ Features

- ✅ **Fully Accessible** - WCAG 2.1 AA compliant with semantic HTML and ARIA labels
- 📱 **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- 🎨 **Modern UI** - Gradient backgrounds, smooth animations, and hover effects
- 🧭 **Multi-Page Navigation** — Seamless links between Home, About, and Contact pages
- ⌨️ **Keyboard Navigation** - All interactive elements are keyboard accessible
- 🧪 **Test-Ready** - Every element has `data-testid` attributes for automated testing
- ⏱️ **Live Updates** - Current time in milliseconds updates every second

## 🗂️ Project Structure

```
HNG-STAGE0-TASK/
├── index.html # Home/Profile page
├── index.css # Styles for the profile page
├── script.js # Dynamic JavaScript for timestamp updates
│
├── about.html # About Me page
├── about.css # Styles for the About page
│
├── contact.html # Contact page with form validation
├── contact.css # Styles for the Contact page
├── contact.js # Handles form validation and success message
│
└── README.md # Project documentation
```

## 🧩 Test ID Reference

Each page includes consistent `data-testid` attributes for automated testing.

### **Profile Page (`index.html`)**

| Element                | Test ID                     |
| ---------------------- | --------------------------- |
| Main card              | `test-profile-card`         |
| Avatar                 | `test-user-avatar`          |
| User name              | `test-user-name`            |
| User title             | `test-user-title`           |
| Timestamp              | `test-user-time`            |
| Bio                    | `test-user-bio`             |
| Social heading         | `test-user-social-heading`  |
| Social links container | `test-user-social-links`    |
| LinkedIn link          | `test-user-social-linkedin` |
| GitHub link            | `test-user-social-github`   |
| Hobbies list           | `test-user-hobbies`         |
| Dislikes list          | `test-user-dislikes`        |

### **About Page (`about.html`)**

| Section                | Test ID                  |
| ---------------------- | ------------------------ |
| Entire page            | `test-about-page`        |
| Bio section            | `test-about-bio`         |
| Goals section          | `test-about-goals`       |
| Confidence section     | `test-about-confidence`  |
| Future note section    | `test-about-future-note` |
| Extra thoughts section | `test-about-extra`       |

### **Contact Page (`contact.html`)**

| Element          | Test ID                                 |
| ---------------- | --------------------------------------- |
| Success message  | `test-contact-success`                  |
| Full name input  | `test-contact-name`                     |
| Email input      | `test-contact-email`                    |
| Subject input    | `test-contact-subject`                  |
| Message textarea | `test-contact-message`                  |
| Submit button    | `test-contact-submit`                   |
| Error messages   | `test-contact-error-*` (for each field) |


## Installation & Setup

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No build tools or dependencies required!

### Steps

1. **Clone or download the repository**

   ```bash
   git clone https://github.com/blessing986/hng-task-zero.git
   cd hng-task-zero
   ```

2. **Open the project**

   - Double-click any of the .html files, or
   - Right-click → Open with → your preferred browser

3. **Explore the pages**
   - index.html → Profile page
   - about.html → About Me page
   - contact.html → Contact Form page

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **No dependencies** - Pure HTML/CSS/JS
- **Lightweight** - ~15KB total (unminified)
- **Fast load time** - Renders in <100ms on modern devices

---

**Built with ❤️ using semantic HTML, modern CSS, and vanilla JavaScript**
