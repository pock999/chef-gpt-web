import React, { useState } from "react";
import { Brand, Button, Input, Label } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { RegexUtil, Snackbar } from "../../shared";
import { AuthRegisterReqVO } from "../../api";
import { AuthService } from "../../services";

export function Register() {
  const navigate = useNavigate();

  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [formValid, setFormValid] = useState<{
    name: string;
    email: string;
    password: string;
  }>({
    name: "",
    email: "",
    password: "",
  });

  const handleValidation = (e: any, target: "name" | "email" | "password") => {
    const { value } = e.target;
    const passwordReg = RegexUtil.passwordReg;
    const emailReg = RegexUtil.emailReg;

    let errorText = "";

    if (target === "name") {
      if (value.length === 0) {
        errorText = "姓名不得為空";
      } else if (value.trim() !== value) {
        errorText = "姓名不得以空白開頭與結尾";
      } else if (value.length > 128) {
        errorText = "姓名長度最多為 128 字元";
      }
    } else if (target === "email") {
      if (!emailReg.test(value)) {
        errorText = "Email 格式錯誤";
      }
    } else {
      if (!passwordReg.test(value)) {
        errorText = "密碼強度不足";
      }
    }

    setFormValid({
      ...formValid,
      [target]: errorText,
    });
  };

  const register = async (evt) => {
    evt.preventDefault();
    evt.preventDefault();
    if (!!formValid.email || !!formValid.password || !!formValid.name) {
      Snackbar.error("表單欄位格式錯誤");
      return;
    }
    setSubmitLoading(true);
    try {
      const data = new AuthRegisterReqVO();
      data.email = (
        evt.currentTarget.elements.namedItem("email") as HTMLInputElement
      ).value;
      data.name = (
        evt.currentTarget.elements.namedItem("name") as HTMLInputElement
      ).value;
      data.password = (
        evt.currentTarget.elements.namedItem("password") as HTMLInputElement
      ).value;

      await AuthService.register(data);
      navigate("/auth/login");
    } catch (e) {}
    setSubmitLoading(false);
  };

  return (
    <div className="flex w-full flex-1 flex-col justify-center gap-2 px-8 sm:max-w-md">
      <form
        className="animate-in text-foreground flex w-full flex-1 flex-col justify-center gap-2"
        onSubmit={(evt) => register(evt)}
      >
        <Brand />

        <Label className="text-md mt-4" htmlFor="name">
          name
        </Label>
        <Input
          className="mb-3 rounded-md border bg-inherit px-4 py-2"
          name="name"
          placeholder="姓名"
          required
          onChange={(e) => handleValidation(e, "name")}
        />

        <Label className="text-md" htmlFor="email">
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
          註冊
        </Button>

        <Link
          to="/auth/login"
          className="border-foreground/20 mb-2 rounded-md border"
        >
          <Button style={{ width: "100%", padding: 0 }}>前往登入</Button>
        </Link>
      </form>
    </div>
  );
}
