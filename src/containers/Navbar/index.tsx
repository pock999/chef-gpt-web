import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppBar, Toolbar, Grid, Typography, Button } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { COLOR, CONFIG } from "../../config";
import { AuthService } from "../../services";
import { NavbarProps } from "./navbar-props.model";
import { TopbarUI } from "../../components";
// import logo from '../../logo.svg';

export function Navbar({ title }: NavbarProps) {
  const isAuth = !!localStorage.getItem(CONFIG.tokenKey);

  const navigate = useNavigate();
  const { id } = useParams();

  const logout = async () => {
    await AuthService.logout();
    navigate("/auth/login");
  };

  return (
    <>
      <TopbarUI
        title={title}
        left={
          <>
            {isAuth && !!id && (
              <Link
                to="/app/chat"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: COLOR.grayScale[1000],
                  maxWidth: "100%",
                }}
              >
                <ArrowBackIcon />
              </Link>
            )}
          </>
        }
      >
        {isAuth && (
          <Button
            variant="outlined"
            onClick={() => logout()}
            style={{
              maxHeight: "70px",
            }}
          >
            登出
          </Button>
        )}
      </TopbarUI>
    </>
  );
}
