import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { SessionSchedule } from "../models/sessionSchedule.model.js";

const markSessionComplete = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const { sessionId } = req.body; // Optional explicit session ID, otherwise next available

    const schedule = await SessionSchedule.findOne({ userId });

    if (!schedule) {
        throw new ApiError(404, "Session schedule not found for this user");
    }

    // Mark as complete using findOneAndUpdate for better persistence with array elements
    const updatedSchedule = await SessionSchedule.findOneAndUpdate(
        { userId, "sessions.isCompleted": false }, // Find the first incomplete session
        {
            $set: {
                "sessions.$.isCompleted": true,
                "sessions.$.completedAt": new Date(),
                "sessions.$.isActive": false,
                lastSessionDate: new Date()
            }
        },
        { new: true }
    );

    if (!updatedSchedule) {
        return res.status(200).json(new ApiResponse(200, schedule, "No pending sessions found"));
    }

    // Update next session date logic
    const nextSessionIndex = updatedSchedule.sessions.findIndex(s => !s.isCompleted);
    if (nextSessionIndex !== -1) {
        updatedSchedule.nextSessionDate = updatedSchedule.sessions[nextSessionIndex].sessionDate;
        await updatedSchedule.save();
    } else {
        updatedSchedule.nextSessionDate = null;
        await updatedSchedule.save();
    }

    console.log(`✅ Session marked complete for user ${userId}.`);

    return res.status(200).json(
        new ApiResponse(200, updatedSchedule, "Session marked as complete successfully")
    );
});

export { markSessionComplete };
