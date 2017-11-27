TableManager = function (tableObj) {
  this.table = tableObj;
};

// ���݂̕\��j�����ċ�̕\���쐬����
TableManager.prototype.createTable = function (rowCount, colCount) {
  this.table.innerHTML = '';
  for (var i = 0; i < rowCount; i++) {
    var row = this.table.insertRow(-1);
    for (var j = 0; j < colCount; j++) {
      if (i == 0 || j == 0) {
        //�O�s��&�O��ڂ͌��o���s�Ƃ���
        row.innerHTML += "<th></th>";
      } else {
        var cell = row.insertCell(-1);
      }
    }
  }
}


TableManager.prototype.addClass = function (row, col, value) {
  var cell = this.table.rows[row].cells[col];
  cell.classList.add(value);
}


TableManager.prototype.hasClass = function (row, col, value) {
  var cell = this.table.rows[row].cells[col];
  return cell.classList.contains(value);
}

TableManager.prototype.removeClass = function (row, col, value) {
  var cell = this.table.rows[row].cells[col];
  cell.classList.remove(value);
}


// �e�[�u���̎w�肵���Z����HTML��}������
TableManager.prototype.insertHTML = function (row, col, value) {
  var cell = this.table.rows[row].cells[col];
  cell.innerHTML = value;
}

//�e�[�u���̎w�肵���Z����HTML���폜����
TableManager.prototype.deleteHTML = function (row, col) {
  var cell = this.table.rows[row].cells[col];
  cell.innerHTML = "";
}

//�e�[�u���̎w�肵���Z���̐F��ύX����
TableManager.prototype.changeCellColor = function (row, col, value) {
  var cell = this.table.rows[row].cells[col];
  cell.style.backgroundColor = value;
}

//�e�[�u���̍s����Ԃ�
TableManager.prototype.getRowCount = function () {
  return this.table.rows.length;
}

//�e�[�u���̗񐔂�Ԃ�(�e�[�u���̌`��ɂ���Ă͐��m�łȂ��ꍇ����j
TableManager.prototype.getColCount = function () {
  return this.table.rows[0].cells.length;
}