import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../../slices/auth/authApi";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import notifyToast from "../../utils/utilityFunctions";
import { useNavigate } from "react-router-dom";
import CustomGoogleButton from "../../components/commonComponents/CustomGoogleButton";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [registerUser, { isLoading: RegisterLoading }] = useRegisterMutation();

  const onSubmit = async (data) => {
    try {
      await registerUser(data).unwrap();
      notifyToast(
        "Registration successful! Please check your email to verify your account.",
        "success"
      );
      reset();
      navigate("/login");
    } catch (error) {
      const errorMessage = error?.data?.message || "Registration failed. Please try again.";
      notifyToast(errorMessage, "error");
    }
    
  };

  return (
    <div className="min-h-screen w-full flex">
      {/* Left side with #90D6CA background */}
      <div className="w-1/2 h-screen" style={{ backgroundColor: '#90D6CA' }}></div>
      
      {/* Right side with light background */}
      <div className="w-1/2 h-screen bg-gray-50"></div>
      
      {/* Centered form container - positioned absolutely to overlap both sides */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Heading above the form */}
        <h1 className="md:text-[33px] text-[24px] font-semibold font-heading text-[#06594A] text-center mb-8">
          SignUp to Chatbot Therapy
        </h1>
        
        {/* Form card */}
        <div className="z-10 bg-white py-[30px] md:px-[52px] px-[30px] rounded-[20px] md:w-[400px] w-[90%] shadow-custom flex flex-col gap-3">
          <p className="text-2xl font-semibold font-body text-[#06594A] text-center">
            Create an account
          </p>
     
           {/* Social login buttons */}
          <div className="w-full">
            <CustomGoogleButton mode="signup" />
            <p className="text-center text-[#98A2B3] font-semibold font-body">
              or
            </p>
          </div>

          
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            {/* Username Input */}
            <div className="flex flex-col">
              <div className="flex flex-col gap-0">
                <label
                  htmlFor="username"
                  className="font-body text-[#344054] font-normal text-[14px]"
                >
                  Username
                </label>
                <input
                  className="auth-input"
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Username must be at most 20 characters",
                    },
                  })}
                />
              </div>
              {errors.username && (
                <span className="text-red-500 text-[12px]">
                  {errors.username.message}
                </span>
              )}
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <div className="flex flex-col gap-0">
                <label
                  htmlFor="email"
                  className="font-body text-[#344054] font-normal text-[14px]"
                >
                  Email
                </label>
                <input
                  className="auth-input placeholder:text-[14px]"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <span className="text-red-500 text-[12px]">
                  {errors.email.message}
                </span>
              )}
            </div>
            
            {/* Password Input */}
            <div className="flex flex-col">
              <div className="flex flex-col gap-0 relative">
                <label
                  htmlFor="password"
                  className="font-body text-[#344054] font-normal text-[14px] flex justify-between"
                >
                  <span>Password</span>
                </label>
                <input
                  className="auth-input placeholder:text-[14px]"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                      message:
                        "Password must contain at least one letter and one number",
                    },
                  })}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 cursor-pointer text-gray-500"
                >
                  {!showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <IoEyeOutline size={20} />
                  )}
                </span>
              </div>
              {errors.password && (
                <span className="text-red-500 text-[12px]">
                  {errors.password.message}
                </span>
              )}
            </div>
            
            <button
              className="bg-customBg text-[#FCFCFD] text-[16px] font-semibold p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={RegisterLoading}
            >
              {RegisterLoading ? "Creating account..." : "Create account"}
            </button>
          </form>
        </div>
        
        {/* Login link below the form */}
        <p className="text-[16px] font-normal mt-4 text-center">
          <span className="text-[#98A2B3] font-body">
            Already have an account?
          </span>{" "}
          <a href="/login" className="text-[#000000] font-body">
            Log In
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
