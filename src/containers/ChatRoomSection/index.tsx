import {
  Grid,
  Button,
  TextField,
  useTheme,
  useMediaQuery,
  Paper,
  Box,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MessageList } from "../MessageList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import { ChatRoomProps } from "./chat-room-props.model";

export function ChatRoomSection({
  messageList,
  loading,
  sendMessage,
  hasMore,
  conversationId,
  fetchMore,
}: ChatRoomProps) {
  const [inputText, setInputText] = useState<string>("");
  const [aiLoading, setAiLoading] = useState<boolean>(false);

  const [queryParams, setQueryParams] = useSearchParams();

  const theme = useTheme();
  const matchmdUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (!!queryParams.get("firstInput")) {
      const text = queryParams.get("firstInput") as string;

      queryParams.delete("firstInput");
      setQueryParams(queryParams);

      enterInput(text);
    }
  }, []);

  const enterInput = async (text?: string) => {
    setAiLoading(true);
    let input = inputText;
    if (!!text) {
      input = text;
    }
    setInputText("");
    await sendMessage(input);
    setAiLoading(false);
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
            height: "calc(100% - 42px)",
            width: "100%",
          }}
        >
          {/* {
            !matchmdUp &&
            <Link to="/app/chat">
              <Button variant="contained" sx={{
                position: 'fixed',
                top: 'calc(0.5rem + 87px)',
                left: '0.5rem',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                zIndex: 5,
              }}>
                <ArrowBackIcon/>
              </Button>
            </Link>
          } */}

          <MessageList
            messageList={messageList}
            responseProgress={aiLoading}
            hasMore={hasMore}
            conversationId={conversationId}
            fetchMore={fetchMore}
          />
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
            size="small"
            label=""
            sx={{
              width: "calc(99% - 98px)",
              height: "20px",
            }}
            inputProps={{
              style: {
                height: "24px",
                fontSize: "20px",
                paddingTop: "0.25rem",
              },
            }}
            value={inputText}
            onKeyDown={(evt) => {
              if (evt.key === "Enter" && !evt.shiftKey) {
                evt.preventDefault();
                enterInput();
              }
            }}
            onChange={(evt) => setInputText(evt.target.value)}
          />
          <Button
            variant="contained"
            sx={{
              width: "88px",
              marginLeft: "0.5rem",
              paddingTop: "0.65rem",
              paddingBottom: "0.65rem",
            }}
            size="small"
            disabled={!inputText}
            onClick={() => enterInput()}
          >
            <SendIcon></SendIcon>
          </Button>
        </Box>
      </Grid>
    </>
  );
}
