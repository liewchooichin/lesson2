import styles from "./UserBar.module.css";
import btnStyles from "./Button.module.css";
import { useReducer } from "react";
import { CredentialReducer } from "./CredentialReducer";


const initialCredential = {
    username: "",
    password: ""
}

export function UserBar(){

    const [credential, credentialDispatch] = 
        useReducer(CredentialReducer, initialCredential);
    
    function handleUsernameChange(newUsername){
        credentialDispatch({
            type: "username_change",
            newUsername: newUsername
        })
    }
    function handlePasswordChange(newPassword){
        credentialDispatch({
            type: "password_change",
            newPassword: newPassword
        })
    }
    function handleLoginClick(e){
        const u = credential.username;
        const p = credential.password;
        e.preventDefault();
        alert(`Login with username ${u} and password ${p}`);
    }

    return(
        <div className={styles.userBarContainer}>
            <form>
                <label>
                    Username
                </label>
                <input 
                    type="text"
                    onChange={e => handleUsernameChange(e.target.value)}
                >
                </input>

                <label>
                    Password
                </label>
                <input 
                    onChange={e => handlePasswordChange(e.target.value)}
                    type="text"
                >
                </input>

                <br/>
                <button 
                    className={btnStyles.Button}
                    type="button"
                    onClick={e => handleLoginClick(e)}
                >
                        Login
                </button>
                <p>Username: {credential.username}</p>
                <p>Password: {credential.password}</p>
            </form>
        </div>
    )
}