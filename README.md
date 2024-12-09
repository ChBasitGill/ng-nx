# 🚀 ng-nx: Modern Angular Patterns and Industry Concepts

Welcome to the **ng-nx** repository! This project demonstrates the latest concepts and industry best practices for building scalable, highly active, and maintainable applications. Designed with **module federation**, **microfrontends**, and state-of-the-art tooling, this repository serves as a learning hub for developers.

---

## 🌟 Key Features

1️⃣ **Host App**
   - Loads **Module Federated Microfrontend Apps** for seamless integration.

2️⃣ **Microfrontends**:
   - 🖼️ **Shell-Profile**: Showcases Angular's **deferable views** by loading user profiles with images.
   - 📊 **Shell-AgGrid**: Handles **high-volume live data** and demonstrates **AG Grid** features.
   - ✅ **Shell-Todos**: Demonstrates state management using **NGRX-Signals**.

3️⃣ **State Management**:
   - **NGRX-Store**: Effects, Actions, Devtools, Reducers, Selectors
   - **NGRX-Signals**: `withMethod`, `withComputed`

4️⃣ **Shared Libraries**:
   - 🛠️ **UI**: Reusable UI components.
   - 🔄 **Services**: Common services used across apps.
   - 🗂️ **Models**: DTOs, models, and view models.
   - 🏛️ **State**: State management utilities.
   - 🧰 **Utilities**: Generic utilities (planned for NPM packaging).

5️⃣ **Storybook** 📖
   - 🔧 **Interaction Testing**
   - ♿ **Accessibility (a11y) Testing**
   - 📚 **Documentation** with **Compodoc**

6️⃣ **Testing** 🔍
   - Automated UI and End-to-End tests with **Playwright**.
   - Unit testing with **Vitest**.

7️⃣ **UI Framework** 🎨
   - **Material UI** or other libraries.

8️⃣ **CI/CD** 🌐
   - **Automated Release Notes** and **Versioning**
   - Built with **GitHub Actions** and deployed to **Netlify**

9️⃣ **Data Grid** 📊
   - Advanced usage of **AG Grid** for high-performance data visualization.

---

## 🏗️ Project Structure
![image](https://github.com/user-attachments/assets/4224c747-9061-4c15-b505-4307482e211f)

![image](https://github.com/user-attachments/assets/8ce0ca1e-0e34-4c9a-9657-79f1c07e6494)

```
ng-nx/
├── apps/
│   ├── host-app
│   ├── shell-profile
│   ├── shell-aggrid
│   ├── shell-todos
├── libs/
│   ├── ui
│   ├── services
│   ├── models
│   ├── state
│   ├── utilities
└── tools/
```

---

## 🚦 CI/CD Pipeline

- **Build and Deploy** with **GitHub Actions** and **Netlify**.
- Automated:
  - 📑 **Release Notes**
  - 🔢 **Versioning**

---

## Tech Stack

**Client:** Angular, NX, NGRX, AG Grid
---
## Authors

- [Basit Jamil](https://www.github.com/chbasitgill)

---

## 📧 Contact

For questions or feedback, feel free to open an issue or contact the repository maintainer. Happy coding! 🎉
