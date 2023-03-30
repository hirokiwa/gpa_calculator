const resetTable = (): boolean => {
  // if (!window.confirm('リセットしますか？')) {
  //   return false
  // }

  for (let i = 0; i < 30; i++) {
    const creditSelecter = document.getElementById(
      "credit" + i
    ) as HTMLSelectElement;
    const gradeSelecter = document.getElementById(
      "grade" + i
    ) as HTMLSelectElement;

    creditSelecter.options[0].selected = true;
    gradeSelecter.options[0].selected = true;
  }

  return true
}

export default resetTable;