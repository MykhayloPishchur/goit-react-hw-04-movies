import React from "react";
import styles from "./moviesgallery.module.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const movieGalleryItem = ({ items }) => (
  <>
    {items.map((item) => (
      <li key={item.id} className={styles.card}>
        <NavLink
          className={styles.item}
          to={{ pathname: `/movies/${item.id}` }}
        >
          <div className={styles.imgContainer}>
            <img
              className={styles.galleryItem}
              src={
                item.backdrop_path
                  ? "https://image.tmdb.org/t/p/original" + item.backdrop_path
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAUmka06uFKW8BxmZXi8uH_N1euTnUnTWmhQ&usqp=CAU"
              }
              alt={item.title}
            />
          </div>
          <div className={styles.cardDescription}>
            <span>{item.title}</span>
            <span style={{ fontWeight: 700, color: "#944dff" }}>
              {item.vote_average}/10
            </span>
          </div>
        </NavLink>
      </li>
    ))}
  </>
);

export default movieGalleryItem;

movieGalleryItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      backdrop_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
};
