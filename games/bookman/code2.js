gdjs.TryAgainCode = {};


gdjs.TryAgainCode.GDbotaoObjects1= [];
gdjs.TryAgainCode.GDq1Objects1= [];
gdjs.TryAgainCode.GDPerdeuObjects1= [];

gdjs.TryAgainCode.conditionTrue_0 = {val:false};
gdjs.TryAgainCode.condition0IsTrue_0 = {val:false};
gdjs.TryAgainCode.condition1IsTrue_0 = {val:false};
gdjs.TryAgainCode.condition2IsTrue_0 = {val:false};

gdjs.TryAgainCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.TryAgainCode.GDbotaoObjects1.length = 0;
gdjs.TryAgainCode.GDq1Objects1.length = 0;
gdjs.TryAgainCode.GDPerdeuObjects1.length = 0;


{

gdjs.TryAgainCode.GDbotaoObjects1.createFrom(runtimeScene.getObjects("botao"));

gdjs.TryAgainCode.condition0IsTrue_0.val = false;
gdjs.TryAgainCode.condition1IsTrue_0.val = false;
{
gdjs.TryAgainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.TryAgainCode.condition0IsTrue_0.val ) {
{
gdjs.TryAgainCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("botao", gdjs.TryAgainCode.GDbotaoObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}}
if (gdjs.TryAgainCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jogo", false);
}}

}

return;
}
gdjs['TryAgainCode']= gdjs.TryAgainCode;
