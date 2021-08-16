import styles from './ShowBar.module.css'
import { HiMenuAlt4 } from 'react-icons/hi';

export function SideBarOption(props) {

    function Switch() {
        if (props.estado === "hide") {
            props.setEstado("show");
        } else {
            props.setEstado("hide");
        }
        console.log(props.estado);
    }

    return (
           <HiMenuAlt4 className={styles.button} onClick={Switch} />
    )
}