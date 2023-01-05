import Form from "./Components/Form/Form";
import styles from "./App.module.css";

function App() {
  return (
   <>
       <div className={styles["main-container"]}>
           <div className={styles["form-container"]}>
                <Form/>
           </div>
       </div>
   </>
  );
}

export default App;
