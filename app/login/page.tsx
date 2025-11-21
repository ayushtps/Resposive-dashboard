"use client";
import { useRouter } from "next/navigation";


const Login = () => {
  const router = useRouter();
  const onLogin = () => {
    localStorage.setItem("token", "ok");
    router.push("/dashboard");
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={onLogin}
        className="px-6 py-3 bg-blue-600 text-white rounded"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
