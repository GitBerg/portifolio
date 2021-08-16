import { SideBarOption } from '../SideBarButton'
import { useState } from 'react'
import styles from './SideBar.module.css'

export function SideBar() {
    const [estado, setEstado] = useState('hide');

    return (
        <div className={styles.sideBar}>
            <div>
                <SideBarOption
                    estado={estado}
                    setEstado={setEstado}
                />
            </div>
                <ul >
                    <li data-Text="About">
                            <a href="#" className={styles.option}>About me</a>
                    </li>
                    <li data-Text="Skills">
                            <a href="#" className={styles.option}>Skills</a>
                    </li>
                    <li data-Text="Certificates">
                            <a href="#" className={styles.option}>Certificates</a>
                    </li>
                    <li data-Text="Contact">
                            <a href="#" className={styles.option}>Contact</a>
                    </li>
                </ul>
            </div>

    )
}