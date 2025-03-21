/* eslint-disable no-bitwise */

export type Guid = string;

// https://stackoverflow.com/a/8809472/806752
export const newGuid = (): string => {
  let d = new Date().getTime();
  let d2 = (performance && performance.now && (performance.now() * 1000)) || 0;
  return 'xxxx-yxxx-xxxx'.replace(/[xy]/g, c => {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
  });
};
