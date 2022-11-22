import styles from "./Dropdown.module.css";

function DropDown({
  dropDownList,
  onClickSelectedItemClicked,
  onClickDropdownHeader,
  dropDownTitle,
  dropDownOpen,
}) {
  return (
    <div className={styles.drop_down}>
      <div
        className={styles.drop_down_btn}
        onClick={() => {
          onClickDropdownHeader();
        }}
      >
        {dropDownTitle}
      </div>
      {dropDownOpen && (
        <div className={styles.content}>
          {dropDownList.map((selectedItem, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  onClickSelectedItemClicked(selectedItem);
                }}
              >
                {selectedItem}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DropDown;
