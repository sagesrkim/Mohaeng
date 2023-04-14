import styles from "./UserBookmark.module.css";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import { BiBookmark } from "react-icons/bi";
import UserBookmarkItem from "./UserBookmarkItem";

const UserBookmark = () => {
  const courseBookmark = useSelector(
    (state: RootState) => state.courseBookmark.data
  );
  const placeBookmark = useSelector(
    (state: RootState) => state.placeBookmark.data
  );

  const [activeTab, setActiveTab] = useState("place");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className={styles.tabContainer}>
        <div
          className={`${styles.tab} ${
            activeTab === "place" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("place")}
        >
          여행지
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === "course" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("course")}
        >
          코스
        </div>
      </div>
      <div className={styles["bookmark-container"]}>
        {activeTab === "place"
          ? placeBookmark.map((bookmark) => (
              <UserBookmarkItem
                id={bookmark.bookMarkId}
                name={bookmark.placeName}
                image={bookmark.imgUrl}
                desc={bookmark.address}
                rating={bookmark.rating}
                realId={bookmark.placeId}
                isRating={true}
                isPlace={true}
                createdDate="123"
                contentId={bookmark.contendId}
              />
            ))
          : courseBookmark.map((bookmark) => (
              <UserBookmarkItem
                id={bookmark.bookMarkId}
                name={bookmark.courseTitle}
                image={bookmark.imgUrl}
                desc={bookmark.createdDate}
                rating={0}
                realId={bookmark.courseId}
                isRating={false}
                isPlace={false}
                createdDate={bookmark.content}
                contentId=""
              />
            ))}
      </div>
    </>
  );
};

export default UserBookmark;
