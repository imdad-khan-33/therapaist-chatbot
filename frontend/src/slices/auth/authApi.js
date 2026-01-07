import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: "include" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (data) => {
        return {
          url: "/users/register",
          method: "POST",
          body: data,
        };
      },
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "/otp/",
        method: "POST",
        body: email,
      }),
    }),
    verifyEmail: builder.mutation({
      query: (token) => ({
        url: `/users/verify-email?token=${token}`,
        method: "GET",
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: "/otp/verify-otp",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/users/reset-password",
        method: "PATCH",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
    }),
    getCurrentUser: builder.query({
      query: () => {
        const token = localStorage.getItem("Therapy-user-token");
        return {
          url: "/users/current-user",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/users/user-details",
        method: "PUT",
        body: data,
      }),
    }),
    updateSessionProgress: builder.mutation({
      query: () => ({
        url: "/users/complete-session",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetCurrentUserQuery,
  useVerifyEmailMutation,
  useForgotPasswordMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
  useLazyGetCurrentUserQuery,
  useLogoutMutation,
  useUpdateProfileMutation,
  useUpdateSessionProgressMutation,
} = authApi;
