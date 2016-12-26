gdjs.WinCode = {};


gdjs.WinCode.GDbotaoObjects1= [];
gdjs.WinCode.GDq1Objects1= [];
gdjs.WinCode.GDtelaObjects1= [];

gdjs.WinCode.conditionTrue_0 = {val:false};
gdjs.WinCode.condition0IsTrue_0 = {val:false};
gdjs.WinCode.condition1IsTrue_0 = {val:false};
gdjs.WinCode.condition2IsTrue_0 = {val:false};

gdjs.WinCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.WinCode.GDbotaoObjects1.length = 0;
gdjs.WinCode.GDq1Objects1.length = 0;
gdjs.WinCode.GDtelaObjects1.length = 0;


{

gdjs.WinCode.GDbotaoObjects1.createFrom(runtimeScene.getObjects("botao"));

gdjs.WinCode.condition0IsTrue_0.val = false;
gdjs.WinCode.condition1IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.WinCode.condition0IsTrue_0.val ) {
{
gdjs.WinCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("botao", gdjs.WinCode.GDbotaoObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}}
if (gdjs.WinCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jogo", false);
}}

}

return;
}
gdjs['WinCode']= gdjs.WinCode;
