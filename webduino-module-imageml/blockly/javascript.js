Blockly.JavaScript['imageml2_classifier'] = function (block) {
  console.log(1);
  var text_cameraurl = block.getFieldValue('cameraURL');
  var text_camSource = block.getFieldValue('camSource');
  var text_modelname = block.getFieldValue('modelName');
  var code = 'getVideoClassifier("' + text_modelname + '","' + text_camSource + '",' + hasher.userId + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['imageml2_callback'] = function (block) {
  console.log(2);
  var idx = block.getFieldValue('idx');
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name'), Blockly.Variables.NAME_TYPE);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'name');
  var code = variable_name + '.onLabel(' + idx + ', async function(idx){\n';
  code += statements_name + '\n';
  code += '});\n';
  return code;
};

Blockly.JavaScript['imageml2_levelVal'] = function (block) {
  console.log(3);
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name'), Blockly.Variables.NAME_TYPE);
  var code = variable_name + '.getClass()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['imageml2_confidenceVal'] = function (block) {
  console.log(4);
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name'), Blockly.Variables.NAME_TYPE);
  var code = variable_name + '.getConfidence()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
