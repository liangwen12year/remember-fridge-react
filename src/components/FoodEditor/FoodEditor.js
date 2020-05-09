import React from "react";
import "../../styles/flatpick.scss";
import flatpickr from "flatpickr";
import blank from "../../img/_.png";
// import closeIcon from "../img/close.svg";
// import expireIcon from "../img/expires.svg";
// import ColorPalette from "./ColorPalette";
import css from "./FoodEditor.module.scss";

class FoodEditor extends React.Component {
  constructor(props) {
    super(props);
    this.addDatePicker = React.createRef();
    this.expDatePicker = React.createRef();
  }
  closeEditor = () => {
    this.props.closeEditor();
  };
  onChange = (selectedDates, dateStr, instance) => {
    console.log(selectedDates);
  };
  onChangeName = selectedName => {
    console.log(selectedName.currentTarget.value);
  };
  componentDidMount() {
    flatpickr(this.addDatePicker.current, {
      onChange: this.onChange
    });
    flatpickr(this.expDatePicker.current, {
      onChange: this.onChange
    });
  }
  render() {
    const visible = this.props.open === false ? "" : css.open;
    const currentItem = this.props.currentItem || null;
    // const { added, expires, id, img, name, quantity } = this.props.currentItem;
    // console.log(this.props);
    // console.log(img);
    return (
      <div className={`${css.editorView} ${visible}`}>
        <div className={css.editorViewInner}>
          <div className={css.editor}>
            <h2 onClick={this.closeEditor}>{this.props.editorMode} an item</h2>
            <div className={css.photo}>
              <label className={css.photoFile}>
                <input
                  type="file"
                  id="i-image"
                  name="i-image"
                  accept="image/*"
                  placeholder=""
                />
                <img
                  src={currentItem ? currentItem.img : blank}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </label>
            </div>
            <div className={css.fields}>
              <div className={css.fieldLabel}>
                Item name<span className="req">*</span>
                <input
                  type="text"
                  id="i-name"
                  name="i-name"
                  placeholder="Item name"
                  style={{ boxShadow: "none" }}
                  value={currentItem ? currentItem.name : ""}
                  onChange={this.onChangeName}
                />
              </div>
              <div className={css.fieldLabel}>
                Quantity
                <input
                  type="text"
                  id="i-quantity"
                  name="i-quantity"
                  placeholder="Quantity"
                  value={currentItem ? currentItem.quantity : ""}
                />
              </div>
              <div className={css.fieldLabel} style={{ boxShadow: "none" }}>
                Added Date<span className="req">*</span>
                {/* <input
                  type="hidden"
                  id="i-date"
                  name="i-date"
                  placeholder="Sep 5, 2019"
                  className="flatpickr-input"
                  value=""
                  ref={this.datePicker}
                /> */}
                <input
                  className="flatpickr-input form-control input"
                  placeholder="Sep 5, 2019"
                  type="text"
                  readOnly="readonly"
                  ref={this.addDatePicker}
                />
              </div>
              <div className={css.fieldLabel} style={{ boxShadow: "none" }}>
                Expiration Date (optional)
                {/* <input
                  type="hidden"
                  id="i-exp"
                  name="i-exp"
                  className="flatpickr-input"
                  value=""
                  ref={this.datePicker}
                /> */}
                <input
                  className="flatpickr-input form-control input"
                  placeholder=""
                  type="text"
                  readOnly="readonly"
                  ref={this.expDatePicker}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodEditor;
