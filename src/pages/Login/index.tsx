import { FC, useState } from 'react';
import axios from 'axios';
import {
    Card,
    CardContent,
    Container,
    TextField,
    Grid,
    Link,
    Divider,
    Typography
} from '@mui/material'
import {
    LoginButton,
    LoginButtonTitle,
    LoginHeader,
    LoginSection
} from './styled'

const Login: FC = () => {
    const [name] = useState<String>();
    const [email, setEmail] = useState<String>();
    const [password, setPassword] = useState<String>();

    const loginSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        try {
            const userData = await axios.post('https://localhost:7050/api/Users/api/Users/login', { name: name, email: email, password: password })

            localStorage.setItem('userName', userData.data.name)
            localStorage.setItem('userId', userData.data.id)

            window.location.href = "/";
        } catch (err: any) {
            console.log(err);
        }
    }

    return (
        <LoginSection>
            <Container maxWidth="md">
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
                    <Grid item xs={10}>
                        <Card>
                            <CardContent>
                                <Grid container spacing={1} justifyContent="center" alignItems="center">
                                    <Grid item xs={12}>
                                        <LoginHeader>
                                            Login
                                        </LoginHeader>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField size="medium" fullWidth type="email" name="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ marginTop: '20px' }} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField size="medium" fullWidth type="password" name="password" required placeholder="Parola" value={password} onChange={(e) => setPassword(e.target.value)} sx={{ marginBottom: '20px', }} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <LoginButton type="submit" onClick={(e) => loginSubmit(e)} size='large' fullWidth>
                                            <LoginButtonTitle>
                                                Login
                                            </LoginButtonTitle>
                                        </LoginButton>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={0.4}>
                                        <Typography>or</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <Link href='register'>
                                            <LoginButton size='large' fullWidth>
                                                <LoginButtonTitle>
                                                    New Account!
                                                </LoginButtonTitle>
                                            </LoginButton>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </LoginSection>
    )
}

export default Login
