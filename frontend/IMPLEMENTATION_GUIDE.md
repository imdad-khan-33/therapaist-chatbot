# TherapyBuddy 

A complete web application dashboard for mental health support using AI-powered therapy chatbot. The application provides a safe, user-friendly platform for therapy sessions, mood tracking, and crisis support.

---

##  Project Overview

**Type:** Web Application (Dashboard-style)

**Purpose:** Provide users with a safe, AI-powered mental health assistant offering:
-  Chat-based therapy
- Voice interaction
- Mood tracking
- Therapy planning
- Crisis support



## Key Features

### 1. **Authentication & Onboarding**
- Splash screen with app branding
- 3-slide onboarding introduction
- Login/Signup with email
- Forgot password & OTP verification
- Initial assessment (first-time users)

### 2. **Dashboard Home**
- Today's mood tracking 
- Mood emoji selector
- Quick stats (Sessions, Improvement Rate)
- Weekly progress chart
- Continue last session button
- Quick access to all features

### 3. **Chat Therapy Room**
- WhatsApp-style messaging interface
- User vs AI chat bubbles
- Real-time typing indicator
- Voice input button (ready for integration)
- Emotion indicator (Sad/Calm/Stressed/Happy)
- Timestamp on messages
- Responsive message layout

### 4. **Mood Tracker**
- Daily mood slider (1-10)
- Emoji selection for mood expression
- Weekly mood chart (bar chart)
- Monthly mood chart (line chart)
- Mood history with dates
- Progress visualization

5. Therapy Plan
- Weekly planning view with focus areas
- Daily task checklist
- Priority-based task management
- Overall progress percentage
- Task completion tracking
- Daily, weekly, and monthly views

 6. Progress & Analytics
- Key statistics cards:
  - Sessions completed
  - Average mood
  - Improvement rate
  - Last session date
- Therapy progress area chart
- Mood trend line chart
- AI-generated insights
- Data visualization with Recharts

### 7. **Emergency Help**
- Crisis support alert banner
- Quick action buttons:
  - Call hotline
  - Chat with counselor (24/7)
  - Emergency services (911)
- Hotline directory with phone numbers
- Self-help resources:
  - Breathing exercises
  - Guided meditation
  - Grounding techniques
- Emergency chat modal

### 8. **Profile**
- User avatar and basic info
- Personal information section
- Contact details
- Join date
- Therapy statistics
- Achievements/badges
- Edit profile option
- Change photo option

### 9. **Settings**
- Voice input/output toggle
- Notification preferences
- Dark mode toggle
- Account management (password, privacy)
- App information & version
- Logout functionality

---

 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── commonComponents/
│   │   │   ├── Button.jsx           # Primary, Secondary, Danger variants
│   │   │   ├── Card.jsx              # Reusable card container
│   │   │   ├── Input.jsx             # Form input with validation
│   │   │   ├── Modal.jsx             # Modal dialog component
│   │   │   ├── Alert.jsx             # Alert notifications
│   │   │   ├── ProgressBar.jsx       # Progress visualization
│   │   │   ├── ChatBubble.jsx        # Chat message bubble
│   │   │   ├── TypingIndicator.jsx   # Typing animation
│   │   │   ├── Badge.jsx             # Badge component
│   │   │   ├── Slider.jsx            # Range slider
│   │   │   └── Toggle.jsx            # Toggle switch
│   │   ├── Modals/
│   │   ├── commonComponents/
│   │   └── ...
│   ├── pages/
│   │   ├── Splash.jsx                # Initial splash screen
│   │   ├── LanguageSelect.jsx        # Language selection
│   │   ├── Onboarding.jsx            # 3-slide onboarding
│   │   ├── DashboardHome.jsx         # Main dashboard
│   │   ├── ChatTherapy.jsx           # Chat interface
│   │   ├── MoodTracker.jsx           # Mood tracking
│   │   ├── TherapyPlan.jsx           # Weekly therapy plan
│   │   ├── Analytics.jsx             # Progress & analytics
│   │   ├── EmergencyHelp.jsx         # Crisis support
│   │   ├── Profile.jsx               # User profile
│   │   ├── Settings.jsx              # App settings
│   │   └── authScreens/              # Auth pages
│   ├── layouts/
│   │   ├── DashboardLayout.jsx       # Main app layout with sidebar
│   │   └── ...
│   ├── 
│   ├── slices/                       # Redux slices
│   ├── utils/                        # Utility functions
│   └── App.jsx                       # Main app component
```

---







```

---

---

# Key Features Implementation

### Chat Therapy
- Real-time message sending/receiving
- Typing indicator animation
- Emotion selector for mood tracking
- Voice recording button (UI ready)
- Auto-scroll to latest message
- Timestamp on each message

### Mood Tracking
- Interactive slider (1-10)
- Emoji selector with animation
- Weekly bar chart visualization
- Monthly line chart visualization
- Mood history list with dates
- Save mood functionality

### Analytics
- Interactive charts with Recharts
- Key metrics cards
- Therapy progress visualization
- Mood trend analysis
- AI-generated insights
- Historical data tracking

### Emergency Support
- Crisis alert banner
- Multiple contact options
- Hotline directory
- Self-help resources
- 24/7 counselor chat modal
- Breathing exercises guide

---

##  Security & Privacy

- All authentication pages available
- Form validation throughout
- Error handling with user feedback
- Secure session management (ready for backend integration)
- Privacy settings in Settings page
- Logout with session clearing

 