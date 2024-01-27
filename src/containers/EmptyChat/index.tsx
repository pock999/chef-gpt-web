
import React from 'react';
import {
  useNavigate,
} from 'react-router-dom';
import {
  Grid,
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useConversationStore } from '../../store';
import { COLOR } from '../../config';

export function EmptyChat({ disabled }: {disabled: boolean}) {
  const navigate = useNavigate();

  const {
    createConversation
  } = useConversationStore((state) => ({ 
    createConversation: state.createConversation,
  }));

  const startConversation = async (title?: string) => {
    const id = await createConversation();

    const queryStr = !!title ? `?firstInput=${title}` : '';

    navigate(`/app/chat/${id}${queryStr}`);
  }

  return (
    <>
      <Grid container spacing={1} sx={{ height: '100%', display: 'flex' }}>
        <Grid
          item
          xs={12}
          sx={{
            height: 'calc(100% - 120px)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '95%',
              height: '95%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h4" gutterBottom
            >
              Hi Bro 想吃啥，問我就對了
            </Typography>
            <Typography
              variant="h6" gutterBottom
              sx={{
                fontWeight: 300
              }}
            >
              是否空虛寂寞又覺得餓? 兄弟 你想不想試試看以下的菜?
            </Typography>

            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                mb: '1rem',
              }}
            >
              <Box
                sx={{
                  backgroundColor: COLOR.grayScale[100],
                  flex: 1,
                  padding: '1rem',
                  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  cursor: 'pointer',
                }}
                onClick={() => startConversation('給我青椒炒肉絲食譜')}
              >
                青椒炒肉絲
              </Box>
              <Box
                sx={{
                  backgroundColor: COLOR.grayScale[100],
                  flex: 1,
                  padding: '1rem',
                  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  cursor: 'pointer',
                }}
                onClick={() => startConversation('給我墨西哥捲餅食譜')}
              >
                墨西哥捲餅
              </Box>
              <Box
                sx={{
                  backgroundColor: COLOR.grayScale[100],
                  flex: 1,
                  padding: '1rem',
                  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  cursor: 'pointer',
                }}
                onClick={() => startConversation('給我青醬義大利麵食譜')}
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
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            height: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'row',
            borderTop: '1px solid #E0E0E0'
          }}
        >
          <TextField id="outlined-basic" variant="outlined" multiline maxRows={3} label="" sx={{
            width: 'calc(99% - 88px)',
            height: '100%'
          }} disabled />
          <Button variant="contained" sx={{ width: '80px', marginLeft: '0.5rem', paddingTop: '1rem', paddingBottom: '1rem' }} disabled>
            <SendIcon></SendIcon>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}