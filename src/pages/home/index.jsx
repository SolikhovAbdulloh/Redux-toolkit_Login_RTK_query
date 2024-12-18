import { Input } from "antd";
import React, { useRef } from "react";
import { useLoginApiMutation } from "../../redux/api/Authorization";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const EmailRef = useRef();
  const PasswordRef = useRef();
  const [fetchlogin, { isLoading }] = useLoginApiMutation();
  const navigate = useNavigate()
  const submit = async (e) => {
    e.preventDefault();
    const data = {
      email: EmailRef.current.input.value,
      password: PasswordRef.current.input.value,
    };

    try {
      const response = await fetchlogin(data).unwrap();
      localStorage.setItem('token',response.access_token)
      console.log(response.access_token);
      navigate("/userpage");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[100vh]  flex justify-center items-center">
      <form
        onSubmit={submit}
        className="flex w-[30%] flex-col gap-3 items-center"
      >
        <Input
          placeholder="john@mail.com"
          value={"john@mail.com"}
          ref={EmailRef}
        />
        <Input.Password
          placeholder="changeme"
          value={"changeme"}
          ref={PasswordRef}
        />
        <button className="bg-[#00c8ff] h-5 text-white rounded-xl w-[50%] p-5 justify-center items-center flex">
          Send
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
