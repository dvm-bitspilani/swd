import styles from "./Sidebar.module.scss";
import homeBtn from "/svgs/homeBtn.svg";
import pages from "/src/assets/Pages";
import { NavLink } from "react-router-dom";
import { useSidebar } from "/src/assets/SidebarContext";

export default function Sidebar() {
    const { isOpen, closeSidebar } = useSidebar();

    return (
        <>
            {/* Sidebar Navigation */}
            <nav className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>

                <div className={styles.homebtn} onClick={closeSidebar}> {/* Close on click */}
                    <img src={homeBtn} alt="Home" className={styles.homebtnIcon} />
                    SWD Home
                </div>
                <div className={styles.menu}>
                    {pages.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.url}
                            onClick={closeSidebar} // Close menu when a link is clicked
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? styles.activeMenuItem
                                        : styles.menuItem
                            }
                        >
                            <div className={styles.icon}>
                                <img src={item.icon} alt={item.name} className={styles.menuIcon} />
                            </div>
                            <div className={styles.text}>
                                {item.name}
                            </div>
                        </NavLink>
                    ))}
                </div>
            </nav>

            {/* Overlay backbone for closing when clicking outside */}
            {isOpen && <div className={styles.overlay} onClick={closeSidebar}></div>}
        </>
    );
}
