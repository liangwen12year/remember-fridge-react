import React from "react";
import styled from "styled-components";
import addIcon from "../../img/add-icon.svg";
const Button = styled.button`
  width: 100%;
  max-width: 320px;
  display: flex;
  margin: 0 auto 30px;
  background: var(--addButton);
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  padding: 15px 0;
  border-radius: 50px;
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.02) translateY(-2px);
    box-shadow: -1px 3px 7px rgba(0, 0, 0, 0.2);
  }
`;

const AddFood = props => (
  <div style={{ width: "100%", margin: "0 auto" }}>
    <Button onClick={props.click}>
      <img src={addIcon} alt="" style={{ marginRight: "10px" }} />
      Add a new item
    </Button>
    < table className="table" >
      <thead className="table-header">
        <tr>
          <th class="freezerTableEntry" width="200px" align="center"> Project name </th>
          <th class="freezerTableEntry" width="150px" align="center"> Study number </th>
          <th class="freezerTableEntry" width="550px" align="center"> Description </th>
          <th class="freezerTableEntry" width="180px" align="center"> Date </th>
          <th class="freezerTableEntry" width="150px" align="center">Scientist </th>
          <th class="freezerTableEntry" width="150px" align="center" height="auto">Fridge ID (0x) /Freeze ID (1x)</th>
          <th class="freezerTableEntry" width="100px" align="center"> Location </th>
        </tr>
      </thead>
    </table >
  </div >
);

export default AddFood;
