import styles from "./Navigator.module.scss";
import globe from "/svgs/globe.svg";
import forwardArrow from "/svgs/forwardArrow.svg";
import Pages from "/src/assets/Pages";
import { NavLink } from "react-router-dom";

export default function Navigator({ url = "overview" }) {
  const activePage = Pages.find((ele) => ele.url === url);
  return (
    <div className={styles.navigator}>
      <a href="#">
        <img src={globe} alt="globeSVG" />
        SWD
      </a>
      <img
        src={forwardArrow}
        alt="forwardArrowSVG"
        className={styles.forwardArrowSVG}
      />
      <a>{activePage.name}</a>
      {activePage.subPages.length > 0 && (
        <>
          <img
            src={forwardArrow}
            alt="forwardArrowSVG"
            className={styles.forwardArrowSVG}
          />
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
        </>
      )}
    </div>
  );
}
