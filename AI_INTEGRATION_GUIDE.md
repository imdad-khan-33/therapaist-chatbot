# 🤖 AI-Powered Virtual Therapist - Enhanced Implementation

## 📋 Overview

Yeh project ab fully AI-integrated hai jo user ke assessment answers ko analyze karke personalized therapy plan banata hai aur chatbot mein bhi context-aware responses deta hai.

---

## ✨ Key Features Implemented

### 1. **Smart Assessment Analysis** 🧠

**Location:** `backend/src/services/deepSeek.service.js`

AI ab user ke answers ko deeply analyze karta hai aur:

- **Severity Level** detect karta hai (Mild/Moderate/Severe)
- **Primary Concerns** identify karta hai
- **Personalized Self-Care Plan** banata hai
- **Appropriate Session Count** recommend karta hai (4, 8, ya 12 sessions)

#### Severity-Based Session Planning:

```
MILD (4 sessions - weekly)
├── Minor stress or adjustment issues
├── Good daily functioning
├── Recent/situational symptoms
└── Example: Work stress, minor relationship concerns

MODERATE (8 sessions - weekly)
├── Moderate distress affecting daily life
├── Multiple areas of concern
├── Symptoms present for weeks/months
└── Example: Persistent anxiety, moderate depression

SEVERE (12 sessions - weekly)
├── Significant distress or impairment
├── Multiple severe symptoms
├── Limited coping mechanisms
└── Example: Severe anxiety/depression, trauma, crisis
```

---

### 2. **Context-Aware Chatbot** 💬

**Location:** `backend/src/services/therapyChat.service.js`

Chatbot ab user ki assessment history ko consider karta hai:

- User ka **severity level** dekh kar responses customize karta hai
- **Primary concerns** ko naturally reference karta hai
- **Session progress** ko acknowledge karta hai
- **Recommended self-care activities** ko yaad rakhta hai

#### Example:
```
User Context:
- Severity: Moderate
- Concerns: Anxiety, Sleep issues
- Session: 3 of 8
- Self-Care: Morning meditation

AI Response:
"I understand anxiety and sleep issues have been challenging for you. 
You're now in your 3rd session - that's great progress! How has your 
morning meditation practice been helping?"
```

---

### 3. **Enhanced Controller Logic** 🎯

**Location:** `backend/src/controllers/therapyChat.controller.js`

Controller ab automatically:

1. User ka latest assessment fetch karta hai
2. Session schedule check karta hai
3. Current session number track karta hai
4. Yeh sab context AI ko pass karta hai

---

## 🔄 Data Flow

```
User completes Assessment
         ↓
AI analyzes answers (deepSeek.service.js)
         ↓
Determines: Severity + Concerns + Sessions
         ↓
Saves to Database (AssessmentAnswers)
         ↓
Creates Session Schedule (SessionSchedule)
         ↓
         
User opens Chatbot
         ↓
Controller fetches Assessment Data
         ↓
Passes context to AI (therapyChat.service.js)
         ↓
AI gives personalized response
         ↓
User gets context-aware support
```

---

## 📊 Database Structure

### AssessmentAnswers Model
```javascript
{
  userId: ObjectId,
  response: [...],
  initialAssessment: {
    userName: String,
    severityLevel: "mild" | "moderate" | "severe",  // ✨ NEW
    primaryConcerns: [String],                       // ✨ NEW
    selfCareActivity: {
      description: String,
      details: [String],
      clinicalRationale: String
    },
    sessionRecommendation: {
      frequency: "weekly" | "monthly",
      totalSessions: Number,                         // ✨ ENHANCED
      schedule: String,
      reason: String
    },
    fullText: String
  }
}
```

---

## 🎨 AI Prompt Engineering

### Assessment Analysis Prompt
- Detailed severity assessment criteria
- Evidence-based session planning
- Personalized self-care recommendations
- Crisis detection (suicidal ideation → 12 sessions)

### Chatbot Prompt
- Context-aware therapeutic dialogue
- Reference to user's specific concerns
- Session progress acknowledgment
- Severity-appropriate coping strategies

---

## 🛡️ Fallback Mechanisms

Agar AI API fail ho jaye, system automatically fallback responses use karta hai:

1. **Mock Response** (API key missing)
2. **Fallback Response** (API error)
3. **Static Response** (Parse error)

Har fallback mein proper structure hai with:
- Severity level
- Primary concerns
- Self-care plan
- Session recommendation

---

## 🚀 How It Works

### Step 1: User Assessment
```javascript
// User completes assessment questions
POST /api/assessment/answers
{
  questionsAndAnswers: [
    { question: "How often do you feel anxious?", answer: "Very often" },
    { question: "How is your sleep?", answer: "Poor" }
  ]
}
```

### Step 2: AI Analysis
```javascript
// AI analyzes and returns
{
  severityLevel: "moderate",
  primaryConcerns: ["anxiety", "sleep disturbance"],
  sessionRecommendation: {
    totalSessions: 8,
    frequency: "weekly"
  }
}
```

### Step 3: Chatbot Interaction
```javascript
// User sends message
POST /api/therapy-chat/:sessionId
{
  userPrompt: "I'm feeling anxious today"
}

// AI receives context
userContext = {
  severityLevel: "moderate",
  primaryConcerns: ["anxiety", "sleep disturbance"],
  currentSession: 3,
  totalSessions: 8
}

// AI responds with personalized message
```

---

## 📝 Key Files Modified

1. **`backend/src/services/deepSeek.service.js`**
   - Enhanced AI prompt with severity analysis
   - Added session planning logic (4/8/12)
   - Updated mock and fallback responses

2. **`backend/src/services/therapyChat.service.js`**
   - Added userContext parameter
   - Context-aware system prompt
   - Personalized response generation

3. **`backend/src/controllers/therapyChat.controller.js`**
   - Fetch user assessment data
   - Build userContext object
   - Pass context to AI service

4. **`backend/src/controllers/assessmentAnswer.controller.js`**
   - Updated fallback response structure
   - Added new fields support

---

## 🎯 Benefits

### For Users:
✅ Personalized therapy plans based on their specific needs
✅ Context-aware chatbot that remembers their concerns
✅ Appropriate session counts (not one-size-fits-all)
✅ Progress tracking through sessions

### For Therapists:
✅ AI-powered severity assessment
✅ Evidence-based session planning
✅ Consistent therapeutic approach
✅ Comprehensive user history

---

## 🔐 Environment Variables Required

```env
DEEPSEEK_API_KEY=your_openrouter_api_key_here
```

---

## 🧪 Testing

### Test Assessment Flow:
1. Complete assessment with varying severity answers
2. Check if AI assigns correct severity level
3. Verify session count (4, 8, or 12)
4. Confirm data saved in database

### Test Chatbot Context:
1. Complete assessment first
2. Open chatbot
3. Send message related to your concerns
4. Verify AI references your specific context

---

## 📈 Future Enhancements

- [ ] Session completion tracking
- [ ] Progress reports generation
- [ ] Crisis intervention detection
- [ ] Multi-language support
- [ ] Voice therapy sessions
- [ ] Integration with mental health resources

---

## 🎓 Technical Stack

- **AI Model:** DeepSeek R1T Chimera (via OpenRouter)
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **Real-time:** Socket.io
- **Authentication:** JWT

---

## 📞 Support

Agar koi issue ho ya questions hon, to:
1. Check console logs for detailed error messages
2. Verify API key is correctly set
3. Ensure database connection is active
4. Check network connectivity to OpenRouter API

---

**Made with ❤️ for better mental health support**
