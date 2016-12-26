gdjs.JogoCode = {};


gdjs.JogoCode.GDbotaoObjects1= [];
gdjs.JogoCode.GDq1Objects1= [];
gdjs.JogoCode.GDParedeObjects1= [];
gdjs.JogoCode.GDLivroObjects1= [];
gdjs.JogoCode.GDSMARTPHONEObjects1= [];
gdjs.JogoCode.GDContadorObjects1= [];
gdjs.JogoCode.GDINTERNAUTAObjects1= [];
gdjs.JogoCode.GDBLOGGERObjects1= [];
gdjs.JogoCode.GDTABLETObjects1= [];
gdjs.JogoCode.GDBREAKFASTObjects1= [];
gdjs.JogoCode.GDBASQUETEBOLObjects1= [];
gdjs.JogoCode.GDHAMBURGUERObjects1= [];
gdjs.JogoCode.GDDELETARObjects1= [];
gdjs.JogoCode.GDSURFObjects1= [];
gdjs.JogoCode.GDROCKObjects1= [];
gdjs.JogoCode.GDGOLObjects1= [];
gdjs.JogoCode.GDLIGHTObjects1= [];
gdjs.JogoCode.GDABAJURObjects1= [];
gdjs.JogoCode.GDPACOCAObjects1= [];
gdjs.JogoCode.GDJOGOObjects1= [];
gdjs.JogoCode.GDLATAObjects1= [];
gdjs.JogoCode.GDBALEObjects1= [];
gdjs.JogoCode.GDALMOCOObjects1= [];
gdjs.JogoCode.GDLAPISObjects1= [];
gdjs.JogoCode.GDOBJETOObjects1= [];
gdjs.JogoCode.GDPIZZAObjects1= [];
gdjs.JogoCode.GDPRAIAObjects1= [];
gdjs.JogoCode.GDCuidadoObjects1= [];
gdjs.JogoCode.GDCuidado2Objects1= [];
gdjs.JogoCode.GDPlacarObjects1= [];
gdjs.JogoCode.GDdirdownObjects1= [];
gdjs.JogoCode.GDdirleftObjects1= [];
gdjs.JogoCode.GDdirrightObjects1= [];
gdjs.JogoCode.GDdirupObjects1= [];
gdjs.JogoCode.GDUtilizeSetaObjects1= [];
gdjs.JogoCode.GDq2Objects1= [];

gdjs.JogoCode.conditionTrue_0 = {val:false};
gdjs.JogoCode.condition0IsTrue_0 = {val:false};
gdjs.JogoCode.condition1IsTrue_0 = {val:false};
gdjs.JogoCode.condition2IsTrue_0 = {val:false};

gdjs.JogoCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.JogoCode.GDbotaoObjects1.length = 0;
gdjs.JogoCode.GDq1Objects1.length = 0;
gdjs.JogoCode.GDParedeObjects1.length = 0;
gdjs.JogoCode.GDLivroObjects1.length = 0;
gdjs.JogoCode.GDSMARTPHONEObjects1.length = 0;
gdjs.JogoCode.GDContadorObjects1.length = 0;
gdjs.JogoCode.GDINTERNAUTAObjects1.length = 0;
gdjs.JogoCode.GDBLOGGERObjects1.length = 0;
gdjs.JogoCode.GDTABLETObjects1.length = 0;
gdjs.JogoCode.GDBREAKFASTObjects1.length = 0;
gdjs.JogoCode.GDBASQUETEBOLObjects1.length = 0;
gdjs.JogoCode.GDHAMBURGUERObjects1.length = 0;
gdjs.JogoCode.GDDELETARObjects1.length = 0;
gdjs.JogoCode.GDSURFObjects1.length = 0;
gdjs.JogoCode.GDROCKObjects1.length = 0;
gdjs.JogoCode.GDGOLObjects1.length = 0;
gdjs.JogoCode.GDLIGHTObjects1.length = 0;
gdjs.JogoCode.GDABAJURObjects1.length = 0;
gdjs.JogoCode.GDPACOCAObjects1.length = 0;
gdjs.JogoCode.GDJOGOObjects1.length = 0;
gdjs.JogoCode.GDLATAObjects1.length = 0;
gdjs.JogoCode.GDBALEObjects1.length = 0;
gdjs.JogoCode.GDALMOCOObjects1.length = 0;
gdjs.JogoCode.GDLAPISObjects1.length = 0;
gdjs.JogoCode.GDOBJETOObjects1.length = 0;
gdjs.JogoCode.GDPIZZAObjects1.length = 0;
gdjs.JogoCode.GDPRAIAObjects1.length = 0;
gdjs.JogoCode.GDCuidadoObjects1.length = 0;
gdjs.JogoCode.GDCuidado2Objects1.length = 0;
gdjs.JogoCode.GDPlacarObjects1.length = 0;
gdjs.JogoCode.GDdirdownObjects1.length = 0;
gdjs.JogoCode.GDdirleftObjects1.length = 0;
gdjs.JogoCode.GDdirrightObjects1.length = 0;
gdjs.JogoCode.GDdirupObjects1.length = 0;
gdjs.JogoCode.GDUtilizeSetaObjects1.length = 0;
gdjs.JogoCode.GDq2Objects1.length = 0;


{



}


{


gdjs.JogoCode.condition0IsTrue_0.val = false;
{
gdjs.JogoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.JogoCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("counter").setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Theme.wav", false, 100, 1);
}}

}


{

gdjs.JogoCode.GDContadorObjects1.createFrom(runtimeScene.getObjects("Contador"));

{for(var i = 0, len = gdjs.JogoCode.GDContadorObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDContadorObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("counter"))));
}
}
}


{


gdjs.JogoCode.condition0IsTrue_0.val = false;
{
gdjs.JogoCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("counter")) == 12;
}if (gdjs.JogoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Win", false);
}}

}


{



}


{

gdjs.JogoCode.GDLivroObjects1.createFrom(runtimeScene.getObjects("Livro"));
gdjs.JogoCode.GDParedeObjects1.createFrom(runtimeScene.getObjects("Parede"));

gdjs.JogoCode.condition0IsTrue_0.val = false;
{
gdjs.JogoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("Livro", gdjs.JogoCode.GDLivroObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("Parede", gdjs.JogoCode.GDParedeObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.JogoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.JogoCode.GDLivroObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDLivroObjects1[i].separateFromObjectsList(context.clearEventsObjectsMap().addObjectsToEventsMap("Parede", gdjs.JogoCode.GDParedeObjects1).getEventsObjectsMap());
}
}}

}


{

gdjs.JogoCode.GDBASQUETEBOLObjects1.createFrom(runtimeScene.getObjects("BASQUETEBOL"));
gdjs.JogoCode.GDBLOGGERObjects1.createFrom(runtimeScene.getObjects("BLOGGER"));
gdjs.JogoCode.GDBREAKFASTObjects1.createFrom(runtimeScene.getObjects("BREAKFAST"));
gdjs.JogoCode.GDDELETARObjects1.createFrom(runtimeScene.getObjects("DELETAR"));
gdjs.JogoCode.GDGOLObjects1.createFrom(runtimeScene.getObjects("GOL"));
gdjs.JogoCode.GDHAMBURGUERObjects1.createFrom(runtimeScene.getObjects("HAMBURGUER"));
gdjs.JogoCode.GDINTERNAUTAObjects1.createFrom(runtimeScene.getObjects("INTERNAUTA"));
gdjs.JogoCode.GDLIGHTObjects1.createFrom(runtimeScene.getObjects("LIGHT"));
gdjs.JogoCode.GDLivroObjects1.createFrom(runtimeScene.getObjects("Livro"));
gdjs.JogoCode.GDROCKObjects1.createFrom(runtimeScene.getObjects("ROCK"));
gdjs.JogoCode.GDSMARTPHONEObjects1.createFrom(runtimeScene.getObjects("SMARTPHONE"));
gdjs.JogoCode.GDSURFObjects1.createFrom(runtimeScene.getObjects("SURF"));
gdjs.JogoCode.GDTABLETObjects1.createFrom(runtimeScene.getObjects("TABLET"));

gdjs.JogoCode.condition0IsTrue_0.val = false;
{
gdjs.JogoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("Livro", gdjs.JogoCode.GDLivroObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("SMARTPHONE", gdjs.JogoCode.GDSMARTPHONEObjects1).addObjectsToEventsMap("INTERNAUTA", gdjs.JogoCode.GDINTERNAUTAObjects1).addObjectsToEventsMap("BLOGGER", gdjs.JogoCode.GDBLOGGERObjects1).addObjectsToEventsMap("TABLET", gdjs.JogoCode.GDTABLETObjects1).addObjectsToEventsMap("BREAKFAST", gdjs.JogoCode.GDBREAKFASTObjects1).addObjectsToEventsMap("BASQUETEBOL", gdjs.JogoCode.GDBASQUETEBOLObjects1).addObjectsToEventsMap("HAMBURGUER", gdjs.JogoCode.GDHAMBURGUERObjects1).addObjectsToEventsMap("DELETAR", gdjs.JogoCode.GDDELETARObjects1).addObjectsToEventsMap("SURF", gdjs.JogoCode.GDSURFObjects1).addObjectsToEventsMap("ROCK", gdjs.JogoCode.GDROCKObjects1).addObjectsToEventsMap("GOL", gdjs.JogoCode.GDGOLObjects1).addObjectsToEventsMap("LIGHT", gdjs.JogoCode.GDLIGHTObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.JogoCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("counter").add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Powerpill_v2.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.JogoCode.GDSMARTPHONEObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDSMARTPHONEObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JogoCode.GDINTERNAUTAObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDINTERNAUTAObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JogoCode.GDBLOGGERObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDBLOGGERObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JogoCode.GDTABLETObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDTABLETObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JogoCode.GDBREAKFASTObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDBREAKFASTObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JogoCode.GDBASQUETEBOLObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDBASQUETEBOLObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JogoCode.GDHAMBURGUERObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDHAMBURGUERObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JogoCode.GDDELETARObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDDELETARObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JogoCode.GDSURFObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDSURFObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JogoCode.GDROCKObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDROCKObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JogoCode.GDGOLObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDGOLObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JogoCode.GDLIGHTObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDLIGHTObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.JogoCode.GDABAJURObjects1.createFrom(runtimeScene.getObjects("ABAJUR"));
gdjs.JogoCode.GDALMOCOObjects1.createFrom(runtimeScene.getObjects("ALMOCO"));
gdjs.JogoCode.GDBALEObjects1.createFrom(runtimeScene.getObjects("BALE"));
gdjs.JogoCode.GDJOGOObjects1.createFrom(runtimeScene.getObjects("JOGO"));
gdjs.JogoCode.GDLAPISObjects1.createFrom(runtimeScene.getObjects("LAPIS"));
gdjs.JogoCode.GDLATAObjects1.createFrom(runtimeScene.getObjects("LATA"));
gdjs.JogoCode.GDLivroObjects1.createFrom(runtimeScene.getObjects("Livro"));
gdjs.JogoCode.GDOBJETOObjects1.createFrom(runtimeScene.getObjects("OBJETO"));
gdjs.JogoCode.GDPACOCAObjects1.createFrom(runtimeScene.getObjects("PACOCA"));
gdjs.JogoCode.GDPIZZAObjects1.createFrom(runtimeScene.getObjects("PIZZA"));
gdjs.JogoCode.GDPRAIAObjects1.createFrom(runtimeScene.getObjects("PRAIA"));

gdjs.JogoCode.condition0IsTrue_0.val = false;
{
gdjs.JogoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("Livro", gdjs.JogoCode.GDLivroObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("ABAJUR", gdjs.JogoCode.GDABAJURObjects1).addObjectsToEventsMap("PACOCA", gdjs.JogoCode.GDPACOCAObjects1).addObjectsToEventsMap("JOGO", gdjs.JogoCode.GDJOGOObjects1).addObjectsToEventsMap("LATA", gdjs.JogoCode.GDLATAObjects1).addObjectsToEventsMap("BALE", gdjs.JogoCode.GDBALEObjects1).addObjectsToEventsMap("ALMOCO", gdjs.JogoCode.GDALMOCOObjects1).addObjectsToEventsMap("LAPIS", gdjs.JogoCode.GDLAPISObjects1).addObjectsToEventsMap("OBJETO", gdjs.JogoCode.GDOBJETOObjects1).addObjectsToEventsMap("PIZZA", gdjs.JogoCode.GDPIZZAObjects1).addObjectsToEventsMap("PRAIA", gdjs.JogoCode.GDPRAIAObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.JogoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Die.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TryAgain", false);
}}

}


{



}


{

gdjs.JogoCode.GDLivroObjects1.createFrom(runtimeScene.getObjects("Livro"));

gdjs.JogoCode.condition0IsTrue_0.val = false;
{
gdjs.JogoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.JogoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.JogoCode.GDLivroObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDLivroObjects1[i].setAngle(0);
}
}}

}


{

gdjs.JogoCode.GDLivroObjects1.createFrom(runtimeScene.getObjects("Livro"));

gdjs.JogoCode.condition0IsTrue_0.val = false;
{
gdjs.JogoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.JogoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.JogoCode.GDLivroObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDLivroObjects1[i].setAngle(-270);
}
}}

}


{

gdjs.JogoCode.GDLivroObjects1.createFrom(runtimeScene.getObjects("Livro"));

gdjs.JogoCode.condition0IsTrue_0.val = false;
{
gdjs.JogoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.JogoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.JogoCode.GDLivroObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDLivroObjects1[i].setAngle(-90);
}
}}

}


{

gdjs.JogoCode.GDLivroObjects1.createFrom(runtimeScene.getObjects("Livro"));

gdjs.JogoCode.condition0IsTrue_0.val = false;
{
gdjs.JogoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.JogoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.JogoCode.GDLivroObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDLivroObjects1[i].setAngle(180);
}
}}

}


{



}


{

gdjs.JogoCode.GDLivroObjects1.createFrom(runtimeScene.getObjects("Livro"));
gdjs.JogoCode.GDdirdownObjects1.createFrom(runtimeScene.getObjects("dirdown"));

gdjs.JogoCode.condition0IsTrue_0.val = false;
gdjs.JogoCode.condition1IsTrue_0.val = false;
{
gdjs.JogoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.JogoCode.condition0IsTrue_0.val ) {
{
gdjs.JogoCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("dirdown", gdjs.JogoCode.GDdirdownObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}}
if (gdjs.JogoCode.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.JogoCode.GDLivroObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDLivroObjects1[i].getBehavior("TopDownMovement2").simulateDownKey();
}
}}

}


{

gdjs.JogoCode.GDLivroObjects1.createFrom(runtimeScene.getObjects("Livro"));
gdjs.JogoCode.GDdirleftObjects1.createFrom(runtimeScene.getObjects("dirleft"));

gdjs.JogoCode.condition0IsTrue_0.val = false;
gdjs.JogoCode.condition1IsTrue_0.val = false;
{
gdjs.JogoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.JogoCode.condition0IsTrue_0.val ) {
{
gdjs.JogoCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("dirleft", gdjs.JogoCode.GDdirleftObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}}
if (gdjs.JogoCode.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.JogoCode.GDLivroObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDLivroObjects1[i].getBehavior("TopDownMovement2").simulateLeftKey();
}
}}

}


{

gdjs.JogoCode.GDLivroObjects1.createFrom(runtimeScene.getObjects("Livro"));
gdjs.JogoCode.GDdirupObjects1.createFrom(runtimeScene.getObjects("dirup"));

gdjs.JogoCode.condition0IsTrue_0.val = false;
gdjs.JogoCode.condition1IsTrue_0.val = false;
{
gdjs.JogoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.JogoCode.condition0IsTrue_0.val ) {
{
gdjs.JogoCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("dirup", gdjs.JogoCode.GDdirupObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}}
if (gdjs.JogoCode.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.JogoCode.GDLivroObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDLivroObjects1[i].getBehavior("TopDownMovement2").simulateUpKey();
}
}}

}


{

gdjs.JogoCode.GDLivroObjects1.createFrom(runtimeScene.getObjects("Livro"));
gdjs.JogoCode.GDdirrightObjects1.createFrom(runtimeScene.getObjects("dirright"));

gdjs.JogoCode.condition0IsTrue_0.val = false;
gdjs.JogoCode.condition1IsTrue_0.val = false;
{
gdjs.JogoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.JogoCode.condition0IsTrue_0.val ) {
{
gdjs.JogoCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("dirright", gdjs.JogoCode.GDdirrightObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}}
if (gdjs.JogoCode.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.JogoCode.GDLivroObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDLivroObjects1[i].getBehavior("TopDownMovement2").simulateRightKey();
}
}}

}

return;
}
gdjs['JogoCode']= gdjs.JogoCode;
