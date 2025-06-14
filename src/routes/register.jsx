import {Alert, Box, Button, Container, Link, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {createUser} from "../firebase";
import {startSession} from "../session";

export default function Register() {

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    // validate the inputs
    if (!email || !password || !repeatPassword) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }
    if (password !== repeatPassword) {
      setError("Пароли не совпадают");
      return;
    }

    setError("");

    console.log("Регистрация...");

    try {
        let registerResponse = await createUser(email, password);
        startSession(registerResponse.user);
        navigate("/user");
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      }
  }

  return (
    <Container maxWidth="xs" sx={{mt: 2}}>
      <Typography variant="h5" component="h1" gutterBottom textAlign="center">
        Регистрация
      </Typography>
      {error && <Alert severity="error" sx={{my: 2}}>{error}</Alert>}
      <Box component="form" onSubmit={onSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{mt: 1}}
          fullWidth
        />
        <TextField
          label="Пароль"
          variant="outlined"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{mt: 3}}
          fullWidth
        />
        <TextField
          label="Повторите пароль"
          variant="outlined"
          type="password"
          autoComplete="repeat-new-password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          sx={{mt: 3}}
          fullWidth
        />
        <Button variant="contained" type="submit" sx={{mt: 3}} fullWidth>Зарегистрироваться</Button>
        <Box sx={{mt: 2}}>
          Уже есть аккаунт? <Link href="/login">Вход</Link>
        </Box>
      </Box>
    </Container>
  )
}