import React, { useState } from "react";

import Card from "../components/commonComponents/Card";
import ProgressBar from "../components/commonComponents/ProgressBar";
import Button from "../components/commonComponents/Button";
import { FiCheckCircle, FiActivity, FiTarget, FiCalendar, FiBookOpen, FiZap, FiChevronRight } from "react-icons/fi";

const TherapyPlan = () => {


  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Daily Meditation (10 mins)",
      completed: true,
      priority: "high",
    },
    {
      id: 2,
      title: "Journaling",
      completed: true,
      priority: "high",
    },
    {
      id: 3,
      title: "Practice Breathing Exercises",
      completed: false,
      priority: "medium",
    },
    {
      id: 4,
      title: "Read Therapy Material",
      completed: false,
      priority: "medium",
    },
    {
      id: 5,
      title: "Social Connection Activity",
      completed: false,
      priority: "low",
    },
  ]);

  const weeklyPlans = [
    {
      day: "Monday",
      focus: "Self-awareness",
      tasks: 3,
      completed: 2,
    },
    {
      day: "Tuesday",
      focus: "Emotional Regulation",
      tasks: 3,
      completed: 1,
    },
    {
      day: "Wednesday",
      focus: "Mindfulness",
      tasks: 3,
      completed: 0,
    },
    {
      day: "Thursday",
      focus: "Social Skills",
      tasks: 3,
      completed: 0,
    },
  ];

  const completedTasks = tasks.filter((t) => t.completed).length;
  const overallProgress = Math.round((completedTasks / tasks.length) * 100);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl lg:text-4xl font-black text-[#0B6A5A] font-heading mb-2">
            Growth Strategy
          </h1>
          <p className="text-gray-500 font-medium">Your personalized path to mental wellness.</p>
        </div>

      </div>

      {/* Progress Card */}
      <div className="relative overflow-hidden bg-white rounded-3xl p-8 border border-[#E0F2F1] shadow-sm">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="58"
                strokeWidth="12"
                stroke="#F1F5F9"
                fill="transparent"
              />
              <circle
                cx="64"
                cy="64"
                r="58"
                strokeWidth="12"
                strokeDasharray={364.4}
                strokeDashoffset={364.4 * (1 - overallProgress / 100)}
                strokeLinecap="round"
                stroke="#0B6A5A"
                fill="transparent"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-[#0B6A5A]">{overallProgress}%</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Done</span>
            </div>
          </div>

          <div className="flex-1 space-y-4 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 font-heading">Weekly Milestone</h2>
              <p className="text-gray-500 font-medium">You've completed {completedTasks} out of {tasks.length} core activities this week.</p>
            </div>

          </div>

          <button className="bg-[#0B6A5A] text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl hover:bg-[#085a4d] transition-all hover:scale-105 active:scale-95">
            Generate New Tasks
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weekly Focus */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 font-heading flex items-center gap-3">
            <FiCalendar className="text-[#0B6A5A]" />
            Weekly Breakdown
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {weeklyPlans.map((plan, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-[#E0F2F1] hover:border-[#90D6CA] transition-all group cursor-default">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-extrabold text-[#0B6A5A]">{plan.day}</h3>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                      Focus: {plan.focus}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-gray-800">{plan.completed}/{plan.tasks}</span>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">Complete</p>
                  </div>
                </div>
                <div className="h-2 bg-gray-50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#1AC6A9] to-[#0B6A5A] transition-all duration-500"
                    style={{ width: `${(plan.completed / plan.tasks) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tasks Checklist */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 font-heading flex items-center gap-3">
            <FiCheckCircle className="text-[#0B6A5A]" />
            Active Habits
          </h2>
          <div className="bg-white rounded-3xl border border-[#E0F2F1] p-6 lg:p-8 space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`group flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer ${task.completed
                  ? "bg-gray-50 border-transparent opacity-60"
                  : "bg-white border-gray-100 hover:border-[#90D6CA] hover:shadow-md"
                  }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${task.completed
                  ? "bg-[#0B6A5A] text-white"
                  : "bg-gray-100 text-gray-300 group-hover:bg-[#E0F2F1] group-hover:text-[#0B6A5A]"
                  }`}>
                  {task.completed ? <FiCheckCircle size={20} /> : <div className="w-4 h-4 border-2 border-current rounded-full"></div>}
                </div>

                <div className="flex-1">
                  <p
                    className={`font-bold transition-all ${task.completed
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                      }`}
                  >
                    {task.title}
                  </p>
                </div>

                <div className={`px-3 py-1 text-[10px] rounded-full font-black uppercase tracking-widest ${task.priority === "high"
                  ? "bg-red-50 text-red-500"
                  : task.priority === "medium"
                    ? "bg-yellow-50 text-yellow-600"
                    : "bg-blue-50 text-blue-500"
                  }`}>
                  {task.priority}
                </div>
              </div>
            ))}

            <button className="w-full mt-4 flex items-center justify-center gap-2 p-4 text-[#0B6A5A] font-bold border-2 border-dashed border-[#CCFBF1] rounded-2xl hover:bg-[#F0FDFA] transition-all">
              <FiZap size={18} />
              Explore More Activities
            </button>
          </div>
        </div>
      </div>

      {/* Recommended Content */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 font-heading">Self-Study Library</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 1, title: "Building Boundaries", time: "12 min read", icon: FiBookOpen, color: "bg-[#0B6A5A] text-black" },
            { id: 2, title: "Anxiety Management", time: "8 min video", icon: FiActivity, color: "bg-[#0B6A5A] text-black" },
            { id: 3, title: "Mastering Mindfulness", time: "15 min audio", icon: FiZap, color: "bg-[#0B6A5A] text-black" }
          ].map(item => (
            <div key={item.id} className="bg-white rounded-2xl p-6 border border-[#E0F2F1] hover:shadow-lg transition-all flex items-center gap-5 group cursor-pointer">
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <item.icon size={28} />
              </div>
              <div className="flex-1">
                <h4 className="font-extrabold text-[#0B6A5A] leading-tight">{item.title}</h4>
                <p className="text-xs text-gray-400 font-bold uppercase mt-1">{item.time}</p>
              </div>
              <FiChevronRight className="text-gray-300 group-hover:text-[#0B6A5A] transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TherapyPlan;
