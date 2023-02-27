const separator = (str, separatorCount) => {
  let string = String(str)
  if (String(string).length > separatorCount) {
    string = string.substring(0, separatorCount) + "...";
  }
  return string
}

export default separator