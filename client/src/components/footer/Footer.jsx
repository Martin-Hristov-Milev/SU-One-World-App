import styles from './Footer.module.css'

export default function Footer (){

    return (
     <footer className="footer ">
        <div className={styles.block}>

            <p  className="col-2">Created for SoftUni react exam by Martin Milev  <a href="https://github.com/Martin-Hristov-Milev">more..</a></p>
 
        </div>
      </footer>
    )
};