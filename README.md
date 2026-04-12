# Playwright Automation Project – Profile Update Workflow


📌 Project Overview
This project is a Playwright-based end-to-end automation framework built using JavaScript.
It demonstrates how to automate a real-world web workflow with clean structure, conditional logic, and CI-ready design.

---

🛠 Tech Stack
 - Automation Tool: Playwright
 - Language: JavaScript
 - Test Runner: Playwright Test
 - Package Manager: npm
 - Version Control: Git
 - CI (Optional): Jenkins

```
The automation covers:
  > Login flow
  > Profile navigation
  > Conditional text update logic
  > Safe handling of dynamic UI elements
  > CI-friendly execution (Jenkins-ready)
```


⚠️ Note:
This repository is for learning and demonstration purposes only.
No real credentials are stored or committed.

---

🧠 Key Learning Objectives
 - Build maintainable Playwright tests
 - Separate test logic from test data
 - Handle optional popups and flaky UI
 - Implement conditional UI updates
 - Prepare automation for CI/CD execution
 - Follow security best practices (no hardcoded secrets)

```
📁 Project Structure
update_profile_playwright/
│
├── tests/
│   └── profileUpdate.spec.js        # Main Playwright test
│
├── config/
│   └── testData.js                  # Centralized test data (no secrets)
│
├── playwright.config.ts             # Playwright configuration
├── package.json
├── .gitignore
└── README.md
```

🔐 Security & Credentials
 - ❌ No credentials are hardcoded
 - ❌ No secrets are committed
 - ✔ 	Credentials should be supplied via:
			 - .env file (local execution)
			 - Environment variables (CI/Jenkins)

---

Example (not committed):
 - USER_EMAIL=your_email_here
 - USER_PASSWORD=your_password_here

---

▶️ How to Run the Project Locally
1️⃣ Install dependencies
			 - npm install

2️⃣ Install Playwright browsers
			 - npx playwright install

3️⃣ Run tests
 			 - npm test

4️⃣ Run in headed mode (optional)
			 - npx playwright test --headed [Run all test in all browser as well]
			 - npx playwright test ProfileUpdate.spec.js  [Run specific test in all browser]
			 - npx playwright test ProfileUpdate.spec.js --project=chromium [Run specific test in chrome browser]
			 - npx playwright test ProfileUpdate.spec.js --project=chromium --headed [Run specific test in chrome browser with visible] 
			 - npx playwright test ProfileUpdate.spec.js --project=chromium --headed -- debug [Run specific test in chrome browser with visible][debug mode] 

---

📜 Disclaimer
This project is created strictly for educational and demonstration purposes.
Users are responsible for complying with the terms of service of any website they test against.

---

# Author

Manoj Kumar
SDET | Automation Engineer

Technology Stack
Java | Rest Assured | TestNG | WireMock | Maven | Allure | CI/CD (GitHub Actions, Jenkins)

---

