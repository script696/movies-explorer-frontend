const getClassname = (arrClassname) => {
  if (Array.isArray(arrClassname)) {
    return arrClassname.join(" ");
  }
  return "";
};

export default getClassname;
