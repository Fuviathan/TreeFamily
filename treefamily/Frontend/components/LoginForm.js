import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function LoginForm() {
  const router = useRouter()
  const { register, handleSubmit } = useForm();
  const onSubmit = data => signIn("credentials", {userName: data.username, password: data.password, redirect: false})
  .then(({ ok, error }) => {
    if (ok) {
      router.push("/home")
    } else {
      alert("Username hoặc mật khẩu không chính xác")
    }
  }) 
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-fig">
      <main className="flex items-center justify-center flex-1 h-screen px-20">
        <div className="flex flex-col w-1/3 p-2 bg-white rounded-lg min-h-max">
          <div className="mt-8 text-center">
            <p className="block text-3xl font-bold leading-normal">
              Login To Your Account
            </p>
          </div>

          <form className="m-6" onSubmit={handleSubmit(onSubmit)}>
            {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
            <label className="block font-bold leading-normal uppercase text-gray-logText">
              username
            </label>
            <input
              {...register("username")}
              name="username"
              className="w-full p-2 my-2 mb-5 border border-solid rounded-lg outline-none bg-gray-50"
              type="text"
              required
              placeholder="Your username"
            ></input>

            <label className="block font-bold leading-normal uppercase text-gray-logText">
              password
            </label>
            <input
              {...register("password")}
              name="password"
              className="w-full p-2 my-2 mb-5 border border-solid rounded-lg outline-none bg-gray-50"
              type="password"
              required
              placeholder="Password"
            ></input>

            <button
              className="w-full py-3 my-4 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 bg-blue-original"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
