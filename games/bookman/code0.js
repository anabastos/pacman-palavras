gdjs.StartCode = {};


gdjs.StartCode.GDbotaoObjects1= [];
gdjs.StartCode.GDq1Objects1= [];
gdjs.StartCode.GDIniciarObjects1= [];
gdjs.StartCode.GDBotaoObjects1= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};
gdjs.StartCode.condition2IsTrue_0 = {val:false};

gdjs.StartCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.StartCode.GDbotaoObjects1.length = 0;
gdjs.StartCode.GDq1Objects1.length = 0;
gdjs.StartCode.GDIniciarObjects1.length = 0;
gdjs.StartCode.GDBotaoObjects1.length = 0;


{

gdjs.StartCode.GDBotaoObjects1.createFrom(runtimeScene.getObjects("Botao"));

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("Botao", gdjs.StartCode.GDBotaoObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jogo", false);
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "loc_tela_play.wav", false, 100, 1);
}}

}

return;
}
gdjs['StartCode']= gdjs.StartCode;
