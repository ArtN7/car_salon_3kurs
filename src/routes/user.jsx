import {Button, Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {endSession, getSession, isLoggedIn} from "../session";


export default function User() {

  let navigate = useNavigate();

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
    }
  
    let session = getSession();
    setEmail(session.email);
  
    console.log("Your access token is: " + session.accessToken);
  }, [navigate]);
  
  const onLogout = () => {
    endSession();
    navigate("/login");
  }

  const goToMainPage = () => {
    navigate("/car_salon");
  }

  return (
    <Container maxWidth="xs" sx={{mt: 2}}>
      <Typography variant="h6" component="h1" textAlign="center" gutterBottom>
        Вы вошли в систему как:
      </Typography>
      <Typography variant="h5" component="h1" textAlign="center" gutterBottom>
        {email}
      </Typography>
      <Typography variant="p" component="p" textAlign="center" gutterBottom>
       Проверьте в консоли ваш токен.
      </Typography>
      <Button variant="contained"  onClick={goToMainPage} sx={{mt: 3}} fullWidth>
        Перейти в автосалон
      </Button>
      <Button variant="contained" color="error" onClick={onLogout} sx={{mt: 3}} fullWidth>
        Выйти
      </Button>
    </Container>
  )
}