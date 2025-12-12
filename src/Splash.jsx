import { useNavigate } from 'react-router-dom'
import styles from './Splash.module.css'

function Splash() {
  const nav = useNavigate();
  return (
    <div className={styles.center}>
      <img className={styles.img} src='./logo.png' alt="logo" />
      <div className={styles.welcome}>
        <h1 className={styles.wt}>Welcome to</h1>
        <h1 className={styles.nd}>NoteDo</h1>
      </div>
      <p className={styles.text}>Organize your tasks, capture your thoughts.</p>
      <button className={styles.button} onClick={() => nav('/Menu')}>Get started</button>
    </div>
  )
}

export default Splash
