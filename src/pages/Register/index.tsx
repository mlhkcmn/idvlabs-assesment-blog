import { useState } from 'react'
import axios from 'axios'
import { 
    Card, 
    CardContent, 
    Container, 
    TextField, 
    Grid 
} from '@mui/material'
import { 
    RegisterButton, 
    RegisterButtonTitle, 
    RegisterHeader, 
    RegisterSection 
} from './styled'

const Register = () => {
    const [name, setName] = useState<String>();
    const [email, setEmail] = useState<String>();
    const [password, setPassword] = useState<String>();

    const registerSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        try {
            await axios.post('https://localhost:7050/api/Users', {name: name , email: email , password: password})

            localStorage.setItem('firstLogin', "true")

            window.location.href = "/";
        } catch (err: any) {
            console.log(err);
        }
    }

    return (
        <RegisterSection>
            <Container maxWidth="md">
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
                    <Grid item xs={10}>
                        <Card onSubmit={registerSubmit}>
                            <CardContent>
                                <Grid container spacing={1} justifyContent="center" alignItems="center">
                                    <Grid item xs={12}>
                                        <RegisterHeader>
                                            Register
                                        </RegisterHeader>
                                    </Grid>
                                        <Grid item xs={12}>
                                            <TextField size="medium" fullWidth name='name' label="Name" value={name} onChange={(e) => setName(e.target.value)} type="text" sx={{ marginTop: '20px' }} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField size="medium" fullWidth name='email' label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField size="medium" fullWidth name='password' label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <RegisterButton type="submit" size='large' onClick={(e) => registerSubmit(e)} fullWidth>
                                                <RegisterButtonTitle>
                                                    Register
                                                </RegisterButtonTitle>
                                            </RegisterButton>
                                        </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </RegisterSection>
    )
}

export default Register