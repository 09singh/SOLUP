# 🚀 MSME ERP Management System

> A comprehensive ERP solution designed specifically for Micro, Small, and Medium Enterprises (MSMEs) to manage business operations, inventory, sales, purchasing, HR processes, and business analytics from a single platform.

LIVE - https://flowbit-solup.netlify.app/

---

## 📖 Overview

Managing business operations through spreadsheets and disconnected software tools often leads to inefficiencies, inaccurate reporting, and poor decision-making.

The MSME ERP Management System centralizes all business operations into a single platform, enabling organizations to streamline workflows, monitor performance, and make data-driven decisions.

---

# 🎯 Problem Statement

Most MSMEs struggle with:

- Maintaining separate spreadsheets for sales, inventory, HR, and purchasing.
- Manual data entry and report generation.
- Difficulty tracking employee performance and attendance.
- Lack of real-time business insights.
- Inventory mismatches and stock shortages.
- Delayed decision-making due to scattered data.
- Poor visibility into business growth metrics.

As organizations scale, these challenges significantly impact productivity and profitability.

---

# 💡 Solution

The MSME ERP Management System provides a centralized platform that integrates multiple business functions into one application.

The system enables organizations to:

- Manage employees and HR operations.
- Monitor inventory levels in real time.
- Track sales performance.
- Manage supplier purchases.
- Import business data using CSV files.
- Export reports in multiple formats.
- Analyze business performance through dashboards and analytics.

---

# 🏆 Outcomes

### Business Impact

✅ Reduced manual administrative work

✅ Centralized business operations

✅ Improved inventory accuracy

✅ Faster report generation

✅ Better employee management

✅ Real-time business monitoring

✅ Enhanced decision-making through analytics

✅ Scalable solution for growing MSMEs

---

# ✨ Core Modules

## 📊 Dashboard

Provides a complete overview of business performance.

### Features

- Revenue Summary
- Sales Overview
- Inventory Statistics
- Employee Summary
- Interactive Charts
- KPI Monitoring

---

## 👨‍💼 HR Management Module

Manage workforce operations efficiently.

### Features

- Employee Management
- Attendance Tracking
- Leave Management
- Department Management
- Employee Performance Monitoring
- Role-Based Access Control

---

## 💰 Sales Management Module

Track and analyze business sales.

### Features

- Sales Records
- Customer Transactions
- Revenue Tracking
- Monthly Sales Analytics
- Sales Reports

---

## 📦 Inventory Management Module

Maintain accurate inventory information.

### Features

- Product Management
- Stock Monitoring
- Inventory Updates
- Low Stock Alerts
- Category Management

---

## 🛒 Purchase Management Module

Manage procurement and supplier relationships.

### Features

- Purchase Records
- Supplier Management
- Procurement Tracking
- Purchase Analytics
- Purchase History Reports

---

## 📈 Reports & Analytics Module

Transform business data into actionable insights.

### Features

- Revenue Analysis
- Sales Reports
- Inventory Reports
- HR Reports
- Purchase Reports
- Business Growth Analytics
- Downloadable Reports

---

# 📊 Data Import & Export

## Import Features

The system supports bulk data import using CSV files.

### Supported Imports

- Employee Data
- Product Data
- Inventory Data
- Sales Data
- Purchase Records

### Format

```csv
Employee Name,Department,Salary
John Doe,HR,45000
Jane Smith,Sales,55000
```

## Export Features

Users can export data in multiple formats.

### Supported Exports

- CSV
- Excel (.xlsx)
- PDF Reports

### Exportable Reports

- Sales Reports
- Inventory Reports
- HR Reports
- Purchase Reports
- Analytics Reports

---

# 🛠 Tech Stack

## Frontend

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React Router DOM
- Axios
- Recharts

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose

## Authentication

- JWT Authentication
- bcrypt.js

## Development Tools

- Git
- GitHub
- Postman
- VS Code

---

# 🏗 System Architecture

```text
┌───────────────────┐
│   React Frontend  │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│     REST APIs     │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Node.js + Express │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│      MongoDB      │
└───────────────────┘
```

---

# 📸 Screenshots

## Dashboard

![Dashboard](./screenshots/dashboard.png)

---

## HR Management

![HR Management](./screenshots/hr-management.png)

---

## Inventory Management

![Inventory Management](./screenshots/inventory.png)

---

## Sales Management

![Sales Management](./screenshots/sales.png)

---
## Purchase Management

![Purchase Management](./screenshots/purchase.png)

---

## Reports & Analytics

![Reports & Analytics](./screenshots/analytics.png)

---

# 📂 Project Structure

```bash
msme-erp-system/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── utils/
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── utils/
│
├── screenshots/
│
├── README.md
│
└── package.json
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/msme-erp-system.git
```

## Navigate to Project

```bash
cd msme-erp-system
```

## Install Backend Dependencies

```bash
cd server
npm install
```

## Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## Environment Variables

Create a `.env` file in the server directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

---

## Run Backend

```bash
npm run server
```

## Run Frontend

```bash
npm start
```

---

# 🔐 Security Features

- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role-Based Authorization
- Secure API Communication

---

# 🧪 Testing

### Frontend Testing

- Component Testing
- UI Testing
- Responsive Testing

### Backend Testing

- API Testing
- Authentication Testing
- Database Validation

### Tools

- Postman
- Chrome DevTools

---

# 🚀 Future Enhancements

- AI-Powered Business Insights
- Payroll Management
- GST Management
- Mobile Application
- Multi-Tenant Support
- Email Notifications
- SMS Notifications
- Predictive Inventory Analytics
- Demand Forecasting

---

# 📊 Key Highlights

- Full-Stack MERN Application
- Modular ERP Architecture
- CSV Import & Export Support
- Downloadable Business Reports
- Interactive Analytics Dashboard
- Responsive User Interface
- RESTful API Design
- Secure Authentication System

---

# 👨‍💻 Developer

**Sanket Kumar Singh**

MERN Stack Developer | AIML Student

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

Your support helps improve and maintain the project.
