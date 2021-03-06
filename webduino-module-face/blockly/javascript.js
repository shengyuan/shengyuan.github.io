Blockly.Blocks['face_load'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("載入人臉模型檔案")
        .appendField(new Blockly.FieldDropdown([["SSDMobileNetV1", "0"], ["TinyFaceDetector", "1"], ["TinyYolov2Model", "2"], ["MtCNN", "3"]]), "model");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};

Blockly.Blocks['face_get_description'] = {
  init: function () {
    this.appendValueInput("description")
      .setCheck("String")
      .appendField("取得臉部特徵值：");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};

Blockly.Blocks['face_get_euclideanDistance'] = {
  init: function() {
    this.appendValueInput("faceA")
        .setCheck(null)
        .appendField("比對臉部特徵值：");
    this.appendValueInput("faceB")
        .setCheck(null)
        .appendField("差異度 0~1 (0 為最小差異) ");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};

Blockly.Blocks['face_get_camera'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("設定")
        .appendField(new Blockly.FieldVariable("camera"), "camera")
        .appendField("並啟動，影像來源：")
        .appendField(new Blockly.FieldTextInput("0"), "src");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};


Blockly.Blocks['face_get_canvas'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("從")
      .appendField(new Blockly.FieldVariable("camera"), "camera")
      .appendField("取得影像");
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};


Blockly.Blocks['face_test'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('(test) 設定')
      .appendField(new Blockly.FieldVariable('camera'), 'camera')
      .appendField('並啟動，影像來源：')
      .appendField(new Blockly.FieldTextInput('0'), 'src');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};