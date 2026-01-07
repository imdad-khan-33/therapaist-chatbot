# 🤖 AI-Powered Features - COMPLETE GUIDE

This Virtual Therapist Chatbot is **100% AI-powered** using DeepSeek/OpenRouter API.

## ✨ AI Integration Points

### 1️⃣ Initial Assessment Analysis → AI Session Planning
**Location:** `backend/src/controllers/assessmentAnswer.controller.js`

**What Happens:**
When a new user completes the assessment questionnaire:

1. ✅ **AI analyzes** all user responses using DeepSeek
2. ✅ **Generates personalized** self-care activity plan with clinical rationale
3. ✅ **AI recommends** session frequency (weekly/monthly)
4. ✅ **AI calculates** total number of therapy sessions needed (e.g., 4, 6, 8 sessions)
5. ✅ **Creates** a customized session schedule based on AI recommendations
6. ✅ **Schedules** exact session dates automatically
7. ✅ **Sends** personalized email with the AI-generated plan

**AI Service:** `backend/src/services/deepSeek.service.js` → `initialAssessment()`

**Model Used:** `google/gemini-2.0-flash-exp:free` via OpenRouter

**Example AI Response:**
```json
{
  "userName": "John",
  "selfCareActivity": {
    "description": "Daily Mindfulness & Journaling",
    "details": [
      "10 minutes morning meditation",
      "Evening gratitude journaling",
      "Weekly nature walks"
    ],
    "clinicalRationale": "Regular mindfulness practice reduces anxiety and improves emotional regulation."
  },
  "sessionRecommendation": {
    "frequency": "weekly",
    "totalSessions": 6,
    "schedule": "one session per week, total 6 sessions",
    "reason": "Weekly sessions provide consistent support for building healthy coping mechanisms."
  },
  "fullText": "Your journey to wellness begins with small steps..."
}
```

**Console Logs to Verify:**
```
🤖 Requesting AI analysis for user: John
✅ AI analysis received for John
📊 AI Recommendation: weekly frequency, 6 total sessions
📅 Creating AI-based session schedule...
📆 Session dates: ['2026-01-05', '2026-01-12', '2026-01-19', ...]
✅ AI-Generated 6 sessions scheduled (weekly)
```

---

### 2️⃣ Therapy Chatbot Responses
**Location:** `backend/src/controllers/therapyChat.controller.js`

Every message in the therapy chat:
- ✅ **AI-powered responses** for all user messages
- ✅ **Context-aware** - remembers previous conversation
- ✅ **Therapeutic tone** - warm, supportive, professional
- ✅ **Boundaries enforcement** - only therapy-related topics
- ✅ **HTML formatted** - clean, readable responses

**AI Service:** `backend/src/services/therapyChat.service.js` → `getAiTherapyResponse()`

**Model Used:** `google/gemini-2.0-flash-exp:free` via OpenRouter

**Console Logs to Verify:**
```
💬 New therapy chat message from user: [userId]
📝 Message: "I've been feeling anxious about work..."
🤖 Generating AI therapy response for user: [userId]
📡 Calling OpenRouter for Therapy Chat...
✅ Received response from AI
✅ AI therapy response generated successfully
```

---

### 3️⃣ Session Title Generation
**Location:** `backend/src/services/therapyChat.service.js`

When starting a new chat session:
- ✅ **AI generates** short, emotionally relevant titles (2-5 words)
- ✅ **Based on** user's first message content
- ✅ **Examples:** "Anxiety About Work", "Relationship Stress", "Self-Esteem Journey"

**AI Service:** `backend/src/services/therapyChat.service.js` → `generateTitleFromPrompt()`

**Model Used:** `deepseek/deepseek-r1:free` via OpenRouter

**Console Logs to Verify:**
```
📝 Generating AI-powered session title...
✅ AI therapy response generated successfully
```

---

## 🔧 Configuration

### API Key Setup
The system uses OpenRouter API with your DeepSeek API key:

```env
DEEPSEEK_API_KEY=sk-or-v1-your-api-key-here
```

**Current Status:** ✅ API Key is configured and active

**Location:** `backend/.env`

---

## 🛡️ Error Handling & Fallbacks

All AI services include intelligent fallback mechanisms:

### 1. Assessment Analysis Fallback
- If AI fails → Uses a default therapeutic plan with 6 weekly sessions
- Ensures users can always proceed
- Fallback plan is clinically sound

### 2. Chat Response Fallback  
- If AI fails → Returns supportive message
- Encourages users to continue sharing
- Message: "I hear you, and I'm here to support you..."

### 3. Timeout Protection
- 60-second timeout on all AI requests
- Prevents hanging connections
- Graceful degradation

---

## 📊 Complete AI Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│  USER REGISTERS → COMPLETES ASSESSMENT QUESTIONS            │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  🤖 AI ANALYZES RESPONSES (DeepSeek API)                    │
│  • Reads all Q&A pairs                                      │
│  • Evaluates mental health indicators                       │
│  • Determines severity and needs                            │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  🧠 AI GENERATES PERSONALIZED PLAN                          │
│  • Self-care activities (with clinical rationale)           │
│  • Session frequency (weekly/monthly)                       │
│  • Total sessions count (4, 6, 8, 12, etc.)                │
│  • Supportive message                                       │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  📅 SYSTEM CREATES SESSION SCHEDULE                         │
│  • Calculates exact dates based on AI recommendation        │
│  • Stores in database (SessionSchedule model)              │
│  • Sets up CRON job for reminders                          │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  📧 EMAIL & NOTIFICATION SENT                               │
│  • Detailed AI plan emailed to user                         │
│  • Real-time socket notification                            │
│  • User sees results page with AI recommendations           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  USER GOES TO CHATBOT → SENDS MESSAGE                      │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  🤖 AI GENERATES RESPONSE (DeepSeek API)                    │
│  • Reads conversation history                               │
│  • Maintains therapeutic context                            │
│  • Generates warm, supportive response                      │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  💬 RESPONSE DISPLAYED TO USER                              │
│  • HTML formatted for readability                           │
│  • Saved to database                                        │
│  • User can continue conversation                           │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 Key Features - ALL AI-POWERED

✅ **100% AI-Driven Session Planning** - DeepSeek analyzes user responses
✅ **Real-time AI Therapy Responses** - Context-aware conversations  
✅ **Intelligent Title Generation** - AI creates meaningful session titles
✅ **Context-Aware Conversations** - Remembers chat history
✅ **Automatic Session Scheduling** - AI determines frequency & count
✅ **Automatic Fallback Protection** - Graceful degradation on API errors
✅ **Dark/Light Mode Support** - Full theme customization
✅ **Real-time Notifications** - Socket.io + Email alerts
✅ **Progress Tracking** - Session completion monitoring
✅ **Email Reminders** - CRON-based session notifications

---

## 🚀 Testing AI Integration

### Test Assessment Flow:
1. **Register/Login** as a new user
2. **Complete** all assessment questions
3. **Watch backend console** for these logs:
   ```
   🤖 Requesting AI analysis for user: [username]
   ✅ AI analysis received for [username]
   📊 AI Recommendation: weekly frequency, 6 total sessions
   📅 Creating AI-based session schedule...
   ```
4. **View** AI-generated session plan on results page
5. **Check email** for personalized plan

### Test Chatbot Flow:
1. **Navigate** to Chatbot/Chat Therapy section
2. **Start** a new chat session
3. **Send** a message (e.g., "I feel anxious")
4. **Watch backend console** for:
   ```
   💬 New therapy chat message from user: [userId]
   🤖 Generating AI therapy response...
   📡 Calling OpenRouter for Therapy Chat...
   ✅ AI therapy response generated successfully
   ```
5. **Receive** AI-powered therapeutic response

### Test Session Scheduling:
1. **Complete** assessment
2. **Check** database `sessionschedules` collection
3. **Verify** session dates match AI recommendation
4. **Confirm** frequency (weekly/monthly) matches AI plan

---

## 🔍 Troubleshooting

### Issue: Chat not responding (400 Bad Request)
**Solution:** ✅ FIXED! Updated API payload format
- Frontend now sends: `{ userPrompt: "message" }`
- Backend expects: `req.body.userPrompt`

### Issue: Assessment plan seems generic
**Reason:** AI fallback was used (API might have failed)
**Check:** 
1. Backend console for "⚠️ Using fallback response"
2. Verify API key is valid: `backend/verify-ai.js`

### Issue: Session dates not appearing
**Check:**
1. Database `sessionschedules` collection
2. Backend logs for "📅 Creating AI-based session schedule..."
3. Verify `generateSessionPlan` function executed

### Issue: CRON email failures
**Reason:** SMTP credentials or session date mismatch
**Check:**
1. `.env` file: `MAIL_USER` and `MAIL_PASSWORD`
2. Session `nextSessionDate` is in the past
3. Backend logs: `[CRON] ✅ Email reminder sent`

---

## 📝 Console Logs Reference

### Backend Console (All AI Operations):

```bash
# Assessment Submission
🧹 Cleared old assessment answers for user: [userId]
🤖 Requesting AI analysis for user: [username]
🚀 Sending request to OpenRouter API...
✅ OpenRouter API Response RECEIVED
🧠 Assistant Response Preview (Post-processed):
✅ AI analysis received for [username]
🧐 Parsing AI Response...
✅ AI Response parsed successfully.

# Session Planning
🤖 AI-BASED SESSION SCHEDULING
🤖 AI Recommendation: weekly frequency, 6 total sessions
📊 This plan is personalized based on user's mental health assessment
📅 Creating AI-based session schedule...
✅ AI-Generated 6 sessions scheduled (weekly)
📆 Session dates: ['2026-01-05', '2026-01-12', '2026-01-19', ...]

# Therapy Chat
💬 New therapy chat message from user: [userId]
📝 Message: "I've been feeling anxious..."
🤖 Generating AI therapy response for user: [userId]
📝 Generating AI-powered session title...
📡 Calling OpenRouter for Therapy Chat...
✅ Received response from AI
✅ AI therapy response generated successfully

# CRON Jobs
[CRON] ✅ Email reminder sent to: user@email.com
[CRON] Reminder sent to user@email.com (weekly)
```

---

## 💡 Advanced Features

### 1. AI Context Memory
The chatbot maintains conversation context:
```javascript
const messages = [
  { role: "system", content: systemPrompt },
  ...previousMessages.map(msg => ({ role: msg.role, content: msg.content })),
  { role: "user", content: userPrompt },
];
```

### 2. Dynamic Session Calculation
AI determines exact number of sessions needed:
- **Light support:** 4 sessions
- **Moderate support:** 6-8 sessions  
- **Intensive support:** 12+ sessions

### 3. Adaptive Frequency
AI chooses between:
- **Weekly:** For immediate needs, high stress
- **Monthly:** For maintenance, long-term growth

---

## 🔐 Security & Privacy

✅ All API keys stored in `.env` (never committed)
✅ User data encrypted in MongoDB
✅ JWT authentication for all endpoints
✅ CORS protection enabled
✅ Rate limiting on AI requests (60s timeout)

---

## 📊 Database Schema

### SessionSchedule Model (AI-Generated)
```javascript
{
  userId: ObjectId,
  userName: String,
  email: String,
  frequency: String,        // AI-determined: "weekly" or "monthly"
  nextSessionDate: Date,    // AI-calculated
  lastSessionDate: Date,
  sessions: [{
    weekNumber: Number,
    sessionDate: Date,       // AI-scheduled dates
    isActive: Boolean,
    isCompleted: Boolean
  }]
}
```

---

## 🌟 Future AI Enhancements

- [ ] Voice-to-text AI integration
- [ ] Emotion detection from text
- [ ] Multi-language AI support (Urdu, Pashto)
- [ ] Advanced analytics with AI insights
- [ ] Proactive AI check-ins based on mood patterns
- [ ] Crisis detection AI

---

## 📖 Quick Start Commands

```bash
# Backend
cd backend
npm install
node verify-ai.js          # Verify AI setup
npm run dev               # Start server

# Frontend  
cd frontend
npm install
npm run dev               # Start React app

# Access
http://localhost:5173     # Frontend
http://localhost:5000     # Backend API
```

---

## 📚 Key Files Reference

| File | Purpose | AI Integration |
|------|---------|----------------|
| `backend/src/services/deepSeek.service.js` | Assessment AI | ✅ Initial analysis |
| `backend/src/services/therapyChat.service.js` | Chat AI | ✅ Responses + Titles |
| `backend/src/controllers/assessmentAnswer.controller.js` | Assessment logic | ✅ Processes AI plan |
| `backend/src/controllers/therapyChat.controller.js` | Chat logic | ✅ Handles AI messages |
| `backend/src/utils/generateSessionPlan.js` | Schedule creator | ✅ Uses AI params |
| `backend/verify-ai.js` | Verification script | ✅ Checks AI setup |

---

**🎉 Your Virtual Therapist is 100% AI-Powered and Ready!**

Built with ❤️ using AI-first approach with DeepSeek & OpenRouter API
