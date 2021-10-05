import React, { useState, Fragment } from "react";
import {
  FoodCard,
  CardFront,
  CardBack,
  EditButtons,
  DeleteConfirmModal,
  DeleteConfirmBtns
} from "./styledForFoodItem";
// import { SideNavBar } from "../NavBar/NavBar"
const FoodItem = props => {
  const [deleteModal, setDeleteModal] = useState(false);
  const { img, name, quantity, description, added, scientist, fridge, location, editThis } = props;

  return (
    <div class="freezerTable">
      {(() => {
        console.log("table out");
        console.log(global.config.fridge);
        if (fridge == global.config.fridge) {
          return (
            < table className="table" >
              < tbody className="table-body" >
                <tr className="table-row" width="800px">
                  <td class="freezerTableEntry" width="200px" align="center" > {name} </td>
                  <td class="freezerTableEntry" width="150px" align="center"> {quantity} </td>
                  <td class="freezerTableEntry" width="550px" align="center"> {description} </td>
                  <td class="freezerTableEntry" width="180px" align="center"> {added} </td>
                  <td class="freezerTableEntry" width="150px" align="center">{scientist} </td>
                  <td class="freezerTableEntry" width="150px" align="center">{fridge} </td>
                  <td class="freezerTableEntry" width="100px" align="center">{location} </td>
                </tr>
              </tbody >
            </table >
          )
        }
        // else if (fridge == '05') {
        //   return (
        //     < table className="table" >

        //       < tbody className="table-body" >
        //         <tr className="table-row" width="800px">
        //           <td class="freezerTableEntry" width="200px" align="center" > {name} </td>
        //           <td class="freezerTableEntry" width="150px" align="center"> {quantity} </td>
        //           <td class="freezerTableEntry" width="550px" align="center"> {description} </td>
        //           <td class="freezerTableEntry" width="180px" align="center"> {added} </td>
        //           <td class="freezerTableEntry" width="150px" align="center">{scientist} </td>
        //           <td class="freezerTableEntry" width="150px" align="center">{fridge} </td>
        //           <td class="freezerTableEntry" width="100px" align="center">{location} </td>
        //         </tr>
        //       </tbody >
        //     </table >
        //   )
        // }

      })()}
    </div >
  );

};

export default FoodItem;
