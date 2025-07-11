# 🎓 Beeja Learning Management System (LMS)

A comprehensive full-stack Learning Management System built with modern web technologies, featuring course management, user authentication, payment integration, and advanced analytics.

## 📋 Table of Contents

- [🎓 Beeja Learning Management System (LMS)](#-beeja-learning-management-system-lms)
  - [📋 Table of Contents](#-table-of-contents)
  - [🌟 Project Overview](#-project-overview)
  - [🏗️ Architecture](#️-architecture)
  - [🚀 Features](#-features)
    - [👤 User Management](#-user-management)
    - [📚 Course Management](#-course-management)
    - [💳 Payment \& E-commerce](#-payment--e-commerce)
    - [📊 Analytics \& Reporting](#-analytics--reporting)
    - [🔔 Communication](#-communication)
    - [🎯 Learning Features](#-learning-features)
    - [🛡️ Security \& Performance](#️-security--performance)
  - [🛠️ Technology Stack](#️-technology-stack)
    - [Frontend Technologies](#frontend-technologies)
    - [Backend Technologies](#backend-technologies)
    - [Database \& Storage](#database--storage)
    - [Development Tools](#development-tools)
  - [📁 Project Structure](#-project-structure)
    - [Backend Structure](#backend-structure)
    - [Frontend Structure](#frontend-structure)
  - [🔧 Installation \& Setup](#-installation--setup)
    - [Prerequisites](#prerequisites)
    - [Environment Variables](#environment-variables)
    - [Installation Steps](#installation-steps)
  - [🚀 Running the Application](#-running-the-application)
  - [📡 API Documentation](#-api-documentation)
    - [Authentication Endpoints](#authentication-endpoints)
    - [Course Management Endpoints](#course-management-endpoints)
    - [User Management Endpoints](#user-management-endpoints)
    - [Payment Endpoints](#payment-endpoints)
    - [Admin Endpoints](#admin-endpoints)
    - [Additional Endpoints](#additional-endpoints)
  - [🗄️ Database Schema](#️-database-schema)
    - [User Schema](#user-schema)
    - [Course Schema](#course-schema)
    - [Additional Models](#additional-models)
  - [👥 User Roles \& Permissions](#-user-roles--permissions)
    - [Student Role](#student-role)
    - [Instructor Role](#instructor-role)
    - [Admin Role](#admin-role)
  - [🎨 Frontend Components](#-frontend-components)
    - [Common Components](#common-components)
    - [Core Components](#core-components)
    - [Page Components](#page-components)
  - [🔐 Authentication \& Security](#-authentication--security)
  - [💰 Payment Integration](#-payment-integration)
  - [📧 Email System](#-email-system)
  - [☁️ Cloud Services](#️-cloud-services)
  - [📊 Analytics \& Monitoring](#-analytics--monitoring)
  - [🧪 Testing](#-testing)
  - [🚀 Deployment](#-deployment)
  - [📱 Mobile Responsiveness](#-mobile-responsiveness)
  - [🔧 Configuration](#-configuration)
  - [🐛 Troubleshooting](#-troubleshooting)
  - [🤝 Contributing](#-contributing)
  - [📄 License](#-license)
  - [📞 Support](#-support)

## 🌟 Project Overview

Beeja LMS is a modern, scalable Learning Management System designed to facilitate online education. It provides a comprehensive platform for course creation, student enrollment, progress tracking, and educational content delivery. The system supports multiple user roles and offers advanced features like payment processing, certificate generation, and detailed analytics.

**Key Highlights:**
- 🎯 Multi-role user system (Students, Instructors, Admins)
- 📚 Comprehensive course management with video content
- 💳 Integrated payment system with Razorpay
- 📊 Advanced analytics and progress tracking
- 🎓 Certificate generation and verification
- 📱 Fully responsive design
- 🔒 Secure authentication and authorization
- ☁️ Cloud-based file storage with Cloudinary

## 🏗️ Architecture

The application follows a modern full-stack architecture:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Backend      │    │    Database     │
│   (React +      │◄──►│   (Node.js +    │◄──►│   (MongoDB)     │
│   Vite)         │    │   Express)      │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Cloudinary    │    │    Razorpay     │    │   Email Service │
│   (Media)       │    │   (Payments)    │    │   (Nodemailer)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🚀 Features

### 👤 User Management
- **Multi-role Authentication**: Students, Instructors, and Admins
- **Profile Management**: Complete user profiles with image upload
- **Account Verification**: Email-based OTP verification
- **Password Management**: Secure password reset functionality
- **User Status Control**: Account activation/deactivation

### 📚 Course Management
- **Course Creation**: Rich course builder with sections and subsections
- **Video Content**: Video upload and streaming capabilities
- **Course Categories**: Organized course categorization
- **Course Visibility**: Public/private course settings
- **Course Types**: Free and paid course options
- **Content Organization**: Hierarchical content structure
- **Course Approval**: Admin approval workflow

### 💳 Payment & E-commerce
- **Razorpay Integration**: Secure payment processing
- **Multiple Payment Methods**: Cards, UPI, Net Banking
- **Coupon System**: Discount codes and promotional offers
- **Purchase History**: Complete transaction records
- **Order Management**: Comprehensive order tracking
- **Bundle Purchases**: Multiple course bundles

### 📊 Analytics & Reporting
- **Student Progress**: Detailed learning analytics
- **Course Analytics**: Enrollment and completion statistics
- **Revenue Tracking**: Financial performance metrics
- **User Engagement**: Activity monitoring
- **Custom Reports**: Exportable data reports

### 🔔 Communication
- **Notification System**: Real-time notifications
- **Email Templates**: Automated email communications
- **Contact Forms**: User inquiry management
- **FAQ System**: Dynamic FAQ management
- **Support System**: Integrated help desk

### 🎯 Learning Features
- **Progress Tracking**: Lecture completion monitoring
- **Quiz System**: Interactive assessments
- **Certificate Generation**: Automated certificate creation
- **Certificate Verification**: QR code-based verification
- **Course Reviews**: Rating and review system
- **Bookmarking**: Save favorite content

### 🛡️ Security & Performance
- **JWT Authentication**: Secure token-based auth
- **Rate Limiting**: API abuse prevention
- **Input Validation**: Comprehensive data validation
- **File Upload Security**: Secure file handling
- **CORS Configuration**: Cross-origin security
- **Error Handling**: Comprehensive error management

## 🛠️ Technology Stack

### Frontend Technologies
- **React 18.2.0**: Modern React with hooks and context
- **Vite 4.4.5**: Fast build tool and development server
- **Redux Toolkit**: State management
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Hook Form**: Form handling
- **Axios**: HTTP client
- **React Hot Toast**: Notification system

### Backend Technologies
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication
- **Bcrypt**: Password hashing
- **Multer**: File upload handling
- **Nodemailer**: Email service
- **Node Schedule**: Task scheduling

### Database & Storage
- **MongoDB Atlas**: Cloud database
- **Cloudinary**: Media storage and optimization
- **Mongoose**: ODM for MongoDB

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Nodemon**: Development server
- **Concurrently**: Run multiple commands
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## 📁 Complete Project Structure

### Root Structure
```
beeja-deploy/
├── backend/                  # Backend application
├── frontend/                # Frontend application
├── package.json            # Root package.json
└── README.md               # Project documentation
```

### Backend Structure
```
backend/
├── config/
│   ├── cloudinary.js        # Cloudinary configuration
│   ├── database.js          # MongoDB connection
│   └── razorpay.js         # Payment gateway config
├── controllers/
│   ├── admin/
│   │   └── studentProgress.js
│   ├── admin.js
│   ├── auth.js
│   ├── category.js
│   ├── certificate.js
│   ├── contactMessage.js
│   ├── coupon.js
│   ├── course.js
│   ├── courseAccess.js
│   ├── courseProgress.js
│   ├── faq.js
│   ├── featuredCourses.js
│   ├── notification.js
│   ├── order.js
│   ├── payments.js
│   ├── profile.js
│   ├── quiz.js
│   ├── ratingAndReview.js
│   ├── resetPassword.js
│   ├── section.js
│   └── subSection.js
├── mail/
│   └── templates/
│       ├── courseEnrollmentEmail.js
│       ├── emailVerificationTemplate.js
│       ├── faqAnswerTemplate.js
│       ├── passwordUpdate.js
│       └── resetPasswordTemplate.js
├── middleware/
│   ├── auth.js              # Authentication middleware
│   ├── multer.js            # File upload middleware
│   └── rateLimiter.js       # Rate limiting
├── models/
│   ├── bundleAccessRequest.js
│   ├── category.js
│   ├── certificate.js
│   ├── contactMessage.js
│   ├── coupon.js
│   ├── course.js
│   ├── courseAccessRequest.js
│   ├── courseProgress.js
│   ├── faq.js
│   ├── FeaturedCourses.js
│   ├── notification.js
│   ├── order.js
│   ├── OTP.js
│   ├── profile.js
│   ├── quiz.js
│   ├── ratingAndReview.js
│   ├── section.js
│   ├── subSection.js
│   ├── user.js
│   └── userNotificationStatus.js
├── routes/
│   ├── admin/
│   │   └── studentProgress.js
│   ├── admin.js
│   ├── certificate.js
│   ├── contactMessage.js
│   ├── course.js
│   ├── courseAccess.js
│   ├── faq.js
│   ├── featuredCourses.js
│   ├── notification.js
│   ├── payments.js
│   ├── profile.js
│   ├── quiz.js
│   └── user.js
├── scripts/
│   ├── addSampleCourses.js
│   ├── checkSubSectionData.js
│   ├── checkUser.js
│   ├── createAdmin.js
│   ├── debugToken.js
│   ├── fixCourseInstructors.js
│   ├── fixVideosDuration.js
│   ├── migrateCourseTypes.js
│   ├── testCatalogAPI.js
│   ├── testFeaturedCoursesAPI.js
│   ├── updateAdminPassword.js
│   └── updateCoursesInstructor.js
├── utils/
│   ├── clearDatabase.js
│   ├── fileCleanup.js
│   ├── imageUploader.js
│   ├── mailSender.js
│   ├── secToDuration.js
│   ├── seedCategories.js
│   ├── seedData.js
│   └── updateCourseThumbnails.js
└── server.js                # Main server file

### Frontend Structure
```
frontend/
├── data/
│   ├── countrycode.json
│   ├── dashboard-links.js
│   ├── footer-links.js
│   ├── homepage-explore.js
│   └── navbar-links.js
├── public/
│   ├── _redirects
│   └── beejalogo.png
├── src/
│   ├── assets/
│   │   ├── Images/
│   │   │   ├── certification img/
│   │   │   ├── MemberCardImg/
│   │   │   └── random bg img/
│   │   ├── Logo/
│   │   └── TimeLineLogo/
│   ├── components/
│   │   ├── common/
│   │   │   ├── AuthChecker.jsx
│   │   │   ├── ConfirmationModal.jsx
│   │   │   ├── FaqButton.jsx
│   │   │   ├── Loading.jsx
│   │   │   ├── ModernNavbar.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NotificationPanel.jsx
│   │   │   ├── RatingStars.jsx
│   │   │   └── Toast.jsx
│   │   └── core/
│   │       ├── AboutPage/
│   │       ├── Auth/
│   │       ├── Catalog/
│   │       ├── Certificate/
│   │       ├── ContactPage/
│   │       ├── Course/
│   │       ├── Dashboard/
│   │       ├── HomePage/
│   │       └── ViewCourse/
│   ├── hooks/
│   │   ├── useOnClickOutside.js
│   │   └── useRouteMatch.js
│   ├── pages/
│   │   ├── Admin/
│   │   │   ├── components/
│   │   │   │   ├── CreateCourse/
│   │   │   │   └── StudentProgress/
│   │   │   ├── Coupons.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── Card/
│   │   ├── Dashboard/
│   │   ├── About.jsx
│   │   ├── BackgroundEffect.jsx
│   │   ├── BundleCheckout.jsx
│   │   ├── Business.jsx
│   │   ├── Careers.jsx
│   │   ├── Catalog.jsx
│   │   ├── Contact.jsx
│   │   ├── CourseCheckout.jsx
│   │   ├── CourseDetails.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── [other pages]
│   ├── reducer/
│   │   └── index.js
│   ├── routes/
│   │   └── AdminRoutes.jsx
│   ├── services/
│   │   ├── apiConnector.js
│   │   ├── apis.js
│   │   ├── formatDate.js
│   │   └── operations/
│   ├── slices/
│   │   ├── authSlice.js
│   │   ├── cartSlice.js
│   │   ├── courseSlice.js
│   │   ├── profileSlice.js
│   │   ├── sidebarSlice.js
│   │   └── viewCourseSlice.js
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── index.html
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
└── vite.config.js
```

## 🔧 Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or Atlas)
- **Cloudinary** account
- **Razorpay** account

### Environment Variables

Create `.env` files in both frontend and backend directories:

**Backend (.env):**
```env
# Database
MONGODB_URL=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret

# Cloudinary
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

# Razorpay
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret

# Email
MAIL_HOST=smtp.gmail.com
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_email_password

# Server
PORT=5001
```

**Frontend (.env):**
```env
VITE_APP_BASE_URL=http://localhost:5001
VITE_RAZORPAY_KEY=your_razorpay_key
```

### Installation Steps

1. **Clone the repository:**
```bash
git clone <repository-url>
cd beeja-deploy
```

2. **Install root dependencies:**
```bash
npm install
```

3. **Install backend dependencies:**
```bash
cd backend
npm install
```

4. **Install frontend dependencies:**
```bash
cd ../frontend
npm install
```

5. **Set up environment variables** (as described above)

6. **Initialize database** (optional - run setup scripts):
```bash
cd backend
node scripts/createAdmin.js
node scripts/seedCategories.js
```

## 🚀 Running the Application

### Development Mode

1. **Start the backend server:**
```bash
cd backend
npm run dev
```

2. **Start the frontend development server:**
```bash
cd frontend
npm run dev
```

3. **Access the application:**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5001`

### Production Mode

1. **Build the frontend:**
```bash
cd frontend
npm run build
```

2. **Start the backend:**
```bash
cd backend
npm start
```

## 📡 API Documentation

### Authentication Endpoints
- `POST /api/v1/auth/sendotp` - Send OTP for verification
- `POST /api/v1/auth/signup` - User registration
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/reset-password-token` - Request password reset
- `POST /api/v1/auth/reset-password` - Reset password
- `POST /api/v1/auth/changepassword` - Change password

### Course Management Endpoints
- `GET /api/v1/course/getAllCourses` - Get all courses
- `GET /api/v1/course/getCourseDetails` - Get course details
- `POST /api/v1/course/createCourse` - Create new course
- `PUT /api/v1/course/editCourse` - Edit course
- `DELETE /api/v1/course/deleteCourse` - Delete course
- `POST /api/v1/course/addSection` - Add course section
- `POST /api/v1/course/addSubSection` - Add subsection
- `GET /api/v1/course/showAllCategories` - Get categories

### User Management Endpoints
- `GET /api/v1/profile/getUserDetails` - Get user profile
- `PUT /api/v1/profile/updateProfile` - Update profile
- `PUT /api/v1/profile/updateUserProfileImage` - Update profile image
- `GET /api/v1/profile/getEnrolledCourses` - Get enrolled courses
- `DELETE /api/v1/profile/deleteProfile` - Delete account

### Payment Endpoints
- `POST /api/v1/payment/capturePayment` - Process payment
- `POST /api/v1/payment/verifyPayment` - Verify payment
- `GET /api/v1/payment/purchaseHistory` - Get purchase history
- `POST /api/v1/payment/sendPaymentSuccessEmail` - Send confirmation

### Admin Endpoints
- `GET /api/v1/admin/users` - Get all users
- `POST /api/v1/admin/users` - Create user
- `GET /api/v1/admin/courses` - Get all courses
- `GET /api/v1/admin/analytics` - Get analytics data
- `GET /api/v1/admin/orders` - Get all orders
- `GET /api/v1/admin/coupons` - Get all coupons
- `POST /api/v1/admin/coupons/create` - Create coupon

### Additional Endpoints
- `GET /api/v1/quiz/:quizId` - Get quiz details
- `POST /api/v1/quiz/submit` - Submit quiz
- `POST /api/v1/certificate/generate` - Generate certificate
- `GET /api/v1/certificate/verify/:certificateId` - Verify certificate
- `GET /api/v1/notification/get-notifications` - Get notifications
- `POST /api/v1/contact/submit` - Submit contact form
- `GET /api/v1/faqs/published` - Get published FAQs

## 🗄️ Database Schema

### User Schema
```javascript
{
  firstName: String (required),
  lastName: String (required),
  email: String (required, unique),
  password: String (required),
  accountType: String (enum: ['Admin', 'Instructor', 'Student']),
  active: Boolean (default: true),
  approved: Boolean (default: true),
  additionalDetails: ObjectId (ref: 'Profile'),
  courses: [ObjectId] (ref: 'Course'),
  image: String,
  token: String,
  resetPasswordTokenExpires: Date,
  courseProgress: [ObjectId] (ref: 'CourseProgress'),
  timestamps: true
}
```

### Course Schema
```javascript
{
  courseName: String,
  isVisible: Boolean (default: true),
  courseType: String (enum: ['Paid', 'Free']),
  adminSetFree: Boolean (default: false),
  originalPrice: Number,
  courseDescription: String,
  instructor: ObjectId (ref: 'User'),
  whatYouWillLearn: String,
  courseContent: [ObjectId] (ref: 'Section'),
  ratingAndReviews: [ObjectId] (ref: 'RatingAndReview'),
  price: Number,
  thumbnail: String,
  category: ObjectId (ref: 'Category'),
  tag: [String],
  studentsEnrolled: [ObjectId] (ref: 'User'),
  instructions: [String],
  status: String (enum: ['Draft', 'Published']),
  createdAt: Date,
  updatedAt: Date
}
```

### Additional Models
- **Profile**: User additional details
- **Category**: Course categories
- **Section**: Course sections
- **SubSection**: Course subsections
- **Order**: Purchase orders
- **Coupon**: Discount coupons
- **Quiz**: Course quizzes
- **Certificate**: Generated certificates
- **Notification**: User notifications
- **FAQ**: Frequently asked questions
- **ContactMessage**: Contact form submissions
- **CourseProgress**: Learning progress tracking
- **RatingAndReview**: Course reviews

## 👥 User Roles & Permissions

### Student Role
- **Course Access**: Enroll in courses, view content
- **Progress Tracking**: Track learning progress
- **Certificates**: Generate and download certificates
- **Payments**: Purchase courses and bundles
- **Reviews**: Rate and review courses
- **Profile**: Manage personal profile
- **Support**: Access help and FAQ

### Instructor Role
- **Course Creation**: Create and manage courses
- **Content Upload**: Upload videos and materials
- **Student Management**: View enrolled students
- **Analytics**: Access course performance data
- **Profile**: Manage instructor profile
- **Earnings**: Track revenue from courses

### Admin Role
- **User Management**: Manage all users
- **Course Management**: Approve and manage all courses
- **Analytics**: Access comprehensive analytics
- **Order Management**: Manage all transactions
- **Coupon Management**: Create and manage discounts
- **Content Moderation**: Review and approve content
- **System Configuration**: Manage system settings

## 🎨 Frontend Components

### Common Components
- **Navbar**: Navigation with role-based menus
- **Footer**: Site footer with links
- **Toast**: Notification system
- **Loader**: Loading indicators
- **Modal**: Reusable modal dialogs
- **ConfirmationModal**: Action confirmations
- **AuthChecker**: Authentication state management

### Core Components
- **Auth Components**: Login, signup, password reset
- **Dashboard Components**: Role-specific dashboards
- **Course Components**: Course creation and editing
- **Catalog Components**: Course browsing and filtering
- **ViewCourse Components**: Video player and content viewer
- **Cart Components**: Shopping cart functionality

### Page Components
- **Home**: Landing page with hero section
- **About**: Company information
- **Contact**: Contact form and information
- **Courses**: Course catalog
- **CourseDetails**: Individual course pages
- **Dashboard**: User dashboard
- **Admin Pages**: Administrative interfaces

## 🔐 Authentication & Security

- **JWT Tokens**: Secure authentication with refresh tokens
- **Password Hashing**: Bcrypt for password security
- **OTP Verification**: Email-based verification
- **Rate Limiting**: API abuse prevention
- **Input Validation**: Comprehensive data validation
- **CORS Configuration**: Cross-origin request security
- **File Upload Security**: Secure file handling with Multer
- **Environment Variables**: Sensitive data protection

## 💰 Payment Integration

- **Razorpay Gateway**: Secure payment processing
- **Multiple Payment Methods**: Cards, UPI, Net Banking, Wallets
- **Order Management**: Complete transaction tracking
- **Coupon System**: Discount codes and promotions
- **Refund Handling**: Automated refund processing
- **Payment Verification**: Secure payment confirmation
- **Invoice Generation**: Automated invoice creation

## 📧 Email System

- **Nodemailer Integration**: Email service
- **Template System**: HTML email templates
- **Automated Emails**: Welcome, verification, purchase confirmations
- **Password Reset**: Secure password reset emails
- **Course Enrollment**: Enrollment confirmation emails
- **Notification Emails**: System notifications

## ☁️ Cloud Services

- **Cloudinary**: Media storage and optimization
- **Image Upload**: Secure image upload and processing
- **Video Streaming**: Optimized video delivery
- **File Management**: Automated file cleanup
- **CDN Delivery**: Global content delivery network

## 📊 Analytics & Monitoring

- **User Analytics**: Registration and engagement metrics
- **Course Analytics**: Enrollment and completion rates
- **Revenue Analytics**: Sales and payment tracking
- **Performance Monitoring**: System performance metrics
- **Error Tracking**: Comprehensive error logging
- **Custom Reports**: Exportable analytics reports

## 🧪 Testing

- **Unit Testing**: Component and function testing
- **Integration Testing**: API endpoint testing
- **E2E Testing**: Full application flow testing
- **Performance Testing**: Load and stress testing
- **Security Testing**: Vulnerability assessment

## 🚀 Deployment

### Frontend Deployment
- **Build Process**: Vite build optimization
- **Static Hosting**: Netlify, Vercel, or similar
- **Environment Configuration**: Production environment setup
- **CDN Integration**: Content delivery optimization

### Backend Deployment
- **Server Hosting**: Heroku, AWS, or similar
- **Database Hosting**: MongoDB Atlas
- **Environment Variables**: Secure configuration
- **Process Management**: PM2 or similar
- **Load Balancing**: Multiple instance support

## 📱 Mobile Responsiveness

- **Responsive Design**: Mobile-first approach
- **Touch Optimization**: Mobile-friendly interactions
- **Performance Optimization**: Fast mobile loading
- **Progressive Web App**: PWA capabilities
- **Cross-browser Compatibility**: Universal browser support

## 🔧 Configuration

### Development Configuration
- **Hot Reloading**: Instant development updates
- **Source Maps**: Debugging support
- **Development Tools**: Enhanced debugging
- **Mock Data**: Development data setup

### Production Configuration
- **Build Optimization**: Minification and compression
- **Caching Strategy**: Efficient caching setup
- **Security Headers**: Production security
- **Performance Monitoring**: Production analytics

## 🐛 Troubleshooting

### Common Issues
1. **Database Connection**: Check MongoDB URI and network
2. **File Upload**: Verify Cloudinary configuration
3. **Payment Issues**: Check Razorpay credentials
4. **Email Delivery**: Verify SMTP settings
5. **CORS Errors**: Check frontend/backend URLs

### Debug Commands
```bash
# Check database connection
node backend/scripts/checkUser.js

# Test API endpoints
node backend/scripts/testCatalogAPI.js

# Debug authentication
node backend/scripts/debugToken.js
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Development Guidelines
- Follow ESLint configuration
- Use meaningful commit messages
- Add documentation for new features
- Ensure backward compatibility

## 📄 License

This project is licensed under the ISC License. See the LICENSE file for details.

## 📞 Support

For support and questions:
- **Email**: support@beeja.com
- **Documentation**: Check this README
- **Issues**: GitHub Issues section
- **FAQ**: Built-in FAQ system

---

**Built with ❤️ by the Beeja Team**

*Last Updated: December 2024*
