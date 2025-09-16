# AI Dropout Prevention System - Student Dashboard

A comprehensive student management system with AI-powered dropout risk prediction, gamification, and academic tracking.

## 🎯 Project Overview

This system helps educational institutions prevent student dropouts through:
- **AI-powered risk prediction** with detailed explanations
- **Gamification elements** to boost student engagement  
- **Comprehensive academic tracking** and performance analytics
- **Smart attendance monitoring** with proactive alerts
- **Counseling request system** for student support

## ✨ Features

### 📊 Student Dashboard
- Real-time dropout risk assessment display
- Quick stats overview (CGPA, attendance, XP points)
- Recent achievements and notifications
- Performance alerts and recommendations
- Quick action buttons for counseling requests

### 📈 Attendance Tracking
- Subject-wise attendance monitoring with visual charts
- Weekly/monthly attendance trends
- Automatic shortage alerts for attendance < 75%
- Personalized recommendations for improvement
- Calendar view of attendance history

### 🎓 Academic Progress
- CGPA/SGPA progression tracking with trends
- Subject-wise performance analysis and breakdowns
- AI-powered grade predictions with confidence levels
- Semester-wise detailed marksheets
- Performance comparison with class averages
- Strengths and weaknesses identification

### 🎮 Gamification System
- XP-based progression with levels and rewards
- Achievement badges (Attendance Star, Assignment Hero, etc.)
- Daily/weekly streak tracking for motivation
- Class leaderboards and peer comparisons
- Progress bars for course completion

### 🤖 Risk Prediction AI
- ML-powered dropout probability assessment
- Detailed explanations of risk factors
- Visual trend analysis and historical data
- Actionable recommendations for improvement
- Early warning system for at-risk students

### 💬 Counseling System
- Easy counseling request submission
- Status tracking (Pending/In Progress/Completed)
- Priority-based request handling
- Communication history with counselors

### 👤 Student Profile Management
- Personal and academic information management
- Editable profile with contact details
- Attendance and grade history views
- Performance trend visualizations

## 🛠 Technical Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom teal/cyan theme
- **UI Components**: Shadcn/ui (Radix UI primitives)
- **Charts & Analytics**: Recharts for data visualization
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite for fast development
- **State Management**: React Query for server state

## 🎨 Design System

- **Theme**: Modern teal/cyan color palette
- **Typography**: Clean, accessible font hierarchy
- **Components**: Consistent spacing, shadows, and animations
- **Responsive**: Mobile-first responsive design
- **Dark Mode**: Full dark/light mode support
- **Accessibility**: WCAG compliant components

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Saritha1428/Ai_Dropout_SIh.git
cd Ai_Dropout_SIh
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:5173](http://localhost:5173)

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Shadcn UI components
│   ├── Navigation.tsx   # Main navigation with notifications
│   ├── StatCard.tsx     # Reusable stat display component
│   └── RiskBadge.tsx    # Risk level indicator component
├── pages/
│   ├── StudentDashboard.tsx    # Main dashboard overview
│   ├── StudentProfile.tsx      # Profile management
│   ├── Attendance.tsx          # Attendance tracking
│   ├── Academic.tsx            # Academic progress
│   ├── Gamification.tsx        # XP and achievements  
│   ├── RiskPrediction.tsx      # AI risk analysis
│   └── CounselingRequest.tsx   # Counseling system
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── assets/             # Images and static files
```

## 🎯 Page Features

### 🏠 Student Dashboard
- Risk level display with visual indicators
- Quick stats (CGPA: 7.8, Attendance: 78%, XP: 2,450)
- Recent achievements and badge showcase
- Performance trend charts and analytics
- Notification system with performance alerts

### 📊 Attendance Page  
- Subject-wise attendance tracking
- Visual charts (line graphs, bar charts)
- Attendance shortage alerts for < 75%
- Weekly/monthly trend analysis
- Actionable recommendations

### 🎓 Academic Page
- CGPA/SGPA progression tracking
- Subject-wise grade breakdowns  
- Performance radar charts
- AI-powered grade predictions
- Semester-wise detailed reports
- Export functionality for marksheets

### 🎮 Gamification Page
- XP tracking with level progression
- Achievement badges and unlocks
- Daily/weekly streak counters
- Leaderboard comparisons
- Motivational progress indicators

### 🤖 Risk Prediction Page
- AI dropout probability assessment
- Detailed risk factor explanations
- Historical trend analysis
- Personalized recommendations
- Visual risk indicators and charts

### 💬 Counseling Request Page
- Easy request form submission
- Request status tracking
- Priority categorization
- Communication history
- Mentor assignment system
