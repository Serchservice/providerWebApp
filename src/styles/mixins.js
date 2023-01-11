import * as vb from "./variables.js";

export const flex = () => {
  return ` 
 display: flex;
  align-items: center;
  justify-content: center;
  gap: ${vb.pad200};
  `;
};

export const flexColumn = (gap = vb.pad200, align = "start") => {
  return ` 
     ${flex()};
     flex-direction: column;
     align-items: ${align};
   `;
};

export const flexRow = (gap = vb.pad200, justify = "center") => {
  return `
      ${flex()};
      flex-flow: row nowrap;
      justify-content: ${justify};
    `;
};

export const iconSize = () => {
  return `
    width:  ${vb.fs300};
    height:  ${vb.fs300};
  `;
};

export const inputReset = () => {
  return `
  border: none;
  outline: none;
  background: none;`;
};

export const buttonReset = () => {
  return ` 
   border: none;
  outline: none;
  background: none;`;
};
