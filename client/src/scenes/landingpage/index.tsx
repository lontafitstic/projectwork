import React, {useState, useEffect} from 'react'
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { User } from '../../types';
import httpClient from '../../service/httpClient';
import Header from '../../components/Header';
import { tokens } from '../../theme';

const LandingPage: React.FC = () =>{
    const navigate = useNavigate();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const[user, setUser] = useState<User | null>(null)
    useEffect(() => {
        (async() => {try {
            const resp = await httpClient.get("http://server:5000/@me");
            setUser(resp.data );
          } catch (error: any) {
              console.log("landingpage says: Not authenitcated");
          }})();
    }, [])

    return (
      <Box
        sx={{
          height: '100vh', // Imposta l'altezza a 100% della viewport
          display: 'flex', // Flexbox per il contenitore
          flexDirection: 'column', // Organizza i figli in colonna
          justifyContent: 'center', // Centra verticalmente
          alignItems: 'center', // Centra orizzontalmente
          textAlign: 'center', // Centra il testo
          gap: 2, // Spaziatura tra i componenti
          px: 2, // Padding orizzontale per un po' di margine laterale
        }}
      >
        <Typography variant="h1" color={colors.grey[100]} fontWeight="bold" sx={{ mb: "5px" }}>
          Project Work di Lorenzo Lontani
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[400]}>
          Le tecnologie che ho utilizzato
        </Typography>
  
        <Stack direction="row" spacing={3} sx={{ mb: 4, marginTop:3 }}>
          <Box>
            <img src={`../../assets/react.webp`} alt="React" style={{ width: 150, height: 150 }} />
          </Box>
          <Box>          
            <img src={`../../assets/muimaterial.png`} alt="muimaterial" style={{ width: 150, height: 150 }} />
          </Box>
          <Box>
            <img src={`../../assets/python.png`} alt="python" style={{ width: 150, height: 150 }} />
          </Box>
          <Box>
            <img src={`../../assets/sqlite.png`} alt="sqlite" style={{ width: 150, height: 150 }} />
          </Box>
        </Stack>

        <Stack direction="row" spacing={3} sx={{ mb: 4 }}>
          <Box>
            <img src={`../../assets/redis.png`} alt="redis" style={{ width: 150, height: 150 }} />
          </Box>
          <Box>
            <img src={`../../assets/flask.png`} alt="flask" style={{ width: 150, height: 150 }} />
          </Box>
          <Box>
            <img src={`../../assets/pandas.png`} alt="pandas" style={{ width: 150, height: 150 }} />
          </Box>
          <Box
            sx={{
              width: 150,
              height: 150,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={`../../assets/nivo.png`} alt="nivo" style={{ width: 150, height: 60 }} />
          </Box>
        </Stack>
  
        <Button variant="contained" color="secondary" size="large" onClick={() => navigate("/login")}>
          Vai al login
        </Button>
      </Box>
    );
  };
  

export default LandingPage;