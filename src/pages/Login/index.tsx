import React, { useState } from "react";
import { Brand, Button, Input, Label } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { AuthLoginReqVO } from "../../api";
import { AuthService } from "../../services";
import { RegexUtil, Snackbar } from "../../shared";

export function Login() {
  const navigate = useNavigate();

  const [submitLoading, setSubmitLoading] = useState<boolean>(false);

  const [formValid, setFormValid] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const handleValidation = (e: any, target: "email" | "password") => {
    const { value } = e.target;
    const passwordReg = RegexUtil.passwordReg;
    const emailReg = RegexUtil.emailReg;

    let errorText = "";

    if (target === "email") {
      if (!emailReg.test(value)) {
        errorText = "Email 格式錯誤";
      }
    } else {
      if (!passwordReg.test(value)) {
        errorText = "密碼格式錯誤";
      }
    }

    setFormValid({
      ...formValid,
      [target]: errorText,
    });
  };

  const login = async (evt) => {
    evt.preventDefault();
    if (!!formValid.email || !!formValid.password) {
      Snackbar.error("帳號密碼格式錯誤");
      return;
    }
    setSubmitLoading(true);

    try {
      const data = new AuthLoginReqVO();
      data.email = (
        evt.currentTarget.elements.namedItem("email") as HTMLInputElement
      ).value;
      data.password = (
        evt.currentTarget.elements.namedItem("password") as HTMLInputElement
      ).value;

      // await AuthService.login(data);
      // navigate('/chat');
    } catch (e) {}
    setSubmitLoading(false);
  };

  return (
    <div className="flex w-full flex-1 flex-col justify-center gap-2 px-8 sm:max-w-md">
      <form
        className="animate-in text-foreground flex w-full flex-1 flex-col justify-center gap-2"
        onSubmit={(evt) => login(evt)}
      >
        <Brand />

        <Label className="text-md mt-4" htmlFor="email">
          Email
        </Label>
        <Input
          className="mb-3 rounded-md border bg-inherit px-4 py-2"
          name="email"
          placeholder="you@example.com"
          required
          onChange={(e) => handleValidation(e, "email")}
        />

        <Label className="text-md" htmlFor="password">
          Password
        </Label>
        <Input
          className="mb-6 rounded-md border bg-inherit px-4 py-2"
          type="password"
          name="password"
          required
          placeholder="••••••••"
          onChange={(e) => handleValidation(e, "password")}
        />

        <Button
          className="mb-2 rounded-md bg-blue-700 px-4 py-2 text-white"
          disabled={submitLoading}
        >
          登入
        </Button>

        <Link
          to="/auth/register"
          className="border-foreground/20 mb-2 rounded-md border"
        >
          <Button style={{ width: "100%", padding: 0 }}>還沒有帳號？</Button>
        </Link>
      </form>
    </div>
  );
}
