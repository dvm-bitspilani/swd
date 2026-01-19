import styles from "./Navigator.module.scss";
import globe from "/svgs/globe.svg";
import forwardArrow from "/svgs/forwardArrow.svg";
import Pages from "/src/assets/Pages";
import { NavLink } from "react-router-dom";
import { useSidebar } from "/src/assets/SidebarContext";

export default function Navigator({ url = "overview" }) {
  const activePage = Pages.find((ele) => ele.url === url);
  const { toggleSidebar, isOpen } = useSidebar();

  return (
    <div className={styles.navigator}>
      {/* Mobile Hamburger Button */}
      <button
        className={`${styles.mobileNavToggle} ${isOpen ? styles.open : ''}`}
        onClick={toggleSidebar}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={styles.breadcrumbPath}>
        <a href="#">
          <img src={globe} alt="globeSVG" />
          SWD
        </a>
        <img
          src={forwardArrow}
          alt="forwardArrowSVG"
          className={styles.forwardArrowSVG}
        />
        <p>{activePage.name}</p>
      </div>
      {activePage.subPages.length > 0 && (
        <>
          <img
            src={forwardArrow}
            alt="forwardArrowSVG"
            className={styles.forwardArrowSVG}
          />
          <div className={styles.tabsContainer}>
            {activePage.subPages.map((subPage, index) => {
              return (
                <NavLink
                  to={`${url}/${subPage.url}`}
                  key={index}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                        ? styles.activeItem
                        : styles.item
                  }
                >
                  {subPage.name}
                </NavLink>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
