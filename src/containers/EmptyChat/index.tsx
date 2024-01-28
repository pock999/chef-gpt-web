import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Button, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useConversationStore } from "../../store";
import { COLOR } from "../../config";

export function EmptyChat({ disabled }: { disabled: boolean }) {
  const navigate = useNavigate();

  const [inputText, setInputText] = useState<string>("");
  const { createConversation } = useConversationStore((state) => ({
    createConversation: state.createConversation,
  }));

  const startConversation = async (title?: string) => {
    const id = await createConversation();

    const queryStr = !!title ? `?firstInput=${title}` : "";

    navigate(`/app/chat/${id}${queryStr}`);
  };

  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            height: "calc(100% - 45px)",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "95%",
              height: "95%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              pl: "2rem",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Hi Bro 想吃啥，問我就對了
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 300,
              }}
            >
              是否空虛寂寞又覺得餓? 兄弟 你想不想試試看以下的菜?
            </Typography>

            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                mb: "1rem",
              }}
            >
              <Box
                sx={{
                  backgroundColor: COLOR.grayScale[100],
                  flex: 1,
                  padding: "1rem",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  cursor: "pointer",
                }}
                onClick={() => startConversation("給我青椒炒肉絲食譜")}
              >
                青椒炒肉絲
              </Box>
              <Box
                sx={{
                  backgroundColor: COLOR.grayScale[100],
                  flex: 1,
                  padding: "1rem",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  cursor: "pointer",
                }}
                onClick={() => startConversation("給我墨西哥捲餅食譜")}
              >
                墨西哥捲餅
              </Box>
              <Box
                sx={{
                  backgroundColor: COLOR.grayScale[100],
                  flex: 1,
                  padding: "1rem",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  cursor: "pointer",
                }}
                onClick={() => startConversation("給我青醬義大利麵食譜")}
              >
                青醬義大利麵
              </Box>
            </Grid>

            {/* <Button
              variant="contained"
              sx={{ width: '120px', height: '40px', fontSize: '18px'}}
              disabled={disabled}
              onClick={() => startConversation()}
            >
              開始聊天
            </Button> */}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "row",
            height: "30px",
            pl: "1rem",
          }}
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            multiline
            maxRows={1}
            label=""
            size="small"
            sx={{
              width: "calc(99% - 98px)",
              height: "30px",
            }}
            inputProps={{
              style: {
                height: "26px",
                fontSize: "20px",
                paddingTop: "0.25rem",
              },
            }}
            onKeyDown={(evt) => {
              if (evt.key === "Enter" && !evt.shiftKey) {
                evt.preventDefault();
                startConversation(inputText);
              }
            }}
            onChange={(evt) => setInputText(evt.target.value)}
          />
          <Button
            variant="contained"
            sx={{
              width: "90px",
              marginLeft: "0.5rem",
              paddingTop: "0.75rem",
              paddingBottom: "0.75rem",
            }}
            size="small"
            disabled={!inputText}
            onClick={() => startConversation(inputText)}
          >
            <SendIcon></SendIcon>
          </Button>
        </Box>
      </Grid>
    </>
  );
}
