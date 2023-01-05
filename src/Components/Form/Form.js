import React, {useState, useReducer, useEffect} from "react";
import TextField from "@mui/material/TextField";
import styles from "./Form.module.css";


const Form = () => {
  const [name, setName] = useState("");
  const [sname, setSname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [contact, setContact] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);


  const formHandler = e => {
    e.preventDefault();
    console.log(name);
    console.log(sname);
    console.log(email);
    console.log(pass);
    console.log(contact);
  }

  useEffect(()=>{
    console.log("effect",isFormValid)
    setIsFormValid(pass.includes('@') && pass.trim().length>=8 && email.includes('@'));

    return ()=>{
      console.log("cleanup")}
  },[pass,email,contact]);

  return (
    <div className={styles["form-container"]}>
      <form onSubmit={formHandler}>
        <div className={styles.input}>
          <TextField
            className={styles.textfield}
            id="standard-basic"
            label="Name"
            variant="standard"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <TextField
            className={styles.textfield}
            id="standard-basic"
            label="Surname"
            variant="standard"
            value={sname}
            onChange={(e)=>setSname(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <TextField
            className={styles.textfield}
            id="standard-basic"
            label="E-Mail"
            variant="standard"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <TextField
            className={styles.textfield}
            id="standard-basic"
            label="Password"
            variant="standard"
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <TextField
            className={styles.textfield}
            id="standard-basic"
            label="Contact"
            variant="standard"
            value={contact}
            onChange={(e)=>setContact(e.target.value)}
          />
        </div>
        <div className={styles.btn_div}>
          <button disabled={!isFormValid}>SUBMIT</button>
        </div>
      </form>

      {/*
             <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '60vw' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="Name" variant="standard" />
            </Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '60vw' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="Surname" variant="standard" />
            </Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '60vw' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="E-Mail" variant="standard" />
            </Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '60vw' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="Password" variant="standard" />
            </Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '60vw' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="Contact" variant="standard" />
            </Box>
            */}

    </div>
  );
};

export default Form;
