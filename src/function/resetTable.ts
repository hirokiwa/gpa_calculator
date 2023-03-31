import changeSelectedValue from "./changeSelectedValue";

const resetTable = (): boolean => {
  // if (!window.confirm('リセットしますか？')) {
  //   return false
  // }

  for (let i = 0; i < 30; i++) {
    changeSelectedValue({
      elementNumber: i,
      gradeOption: 0,
      creditOption: 0
    })
  }

  return true
}

export default resetTable;