gdjs.Game4Code = {};
gdjs.Game4Code.GDBluePlayerObjects1= [];
gdjs.Game4Code.GDBluePlayerObjects2= [];
gdjs.Game4Code.GDFlyingEnemyObjects1= [];
gdjs.Game4Code.GDFlyingEnemyObjects2= [];
gdjs.Game4Code.GDBlueCrystal2Objects1= [];
gdjs.Game4Code.GDBlueCrystal2Objects2= [];
gdjs.Game4Code.GDSmallNotBluePlatformObjects1= [];
gdjs.Game4Code.GDSmallNotBluePlatformObjects2= [];
gdjs.Game4Code.GDSmallBluePlatformObjects1= [];
gdjs.Game4Code.GDSmallBluePlatformObjects2= [];
gdjs.Game4Code.GDPurpleFloorObjects1= [];
gdjs.Game4Code.GDPurpleFloorObjects2= [];
gdjs.Game4Code.GDYellowFloorObjects1= [];
gdjs.Game4Code.GDYellowFloorObjects2= [];
gdjs.Game4Code.GDBlueFloorObjects1= [];
gdjs.Game4Code.GDBlueFloorObjects2= [];
gdjs.Game4Code.GDGreenFloorObjects1= [];
gdjs.Game4Code.GDGreenFloorObjects2= [];
gdjs.Game4Code.GDRedFloorObjects1= [];
gdjs.Game4Code.GDRedFloorObjects2= [];
gdjs.Game4Code.GDGreenFlagObjects1= [];
gdjs.Game4Code.GDGreenFlagObjects2= [];
gdjs.Game4Code.GDLivesObjects1= [];
gdjs.Game4Code.GDLivesObjects2= [];
gdjs.Game4Code.GDTimerObjects1= [];
gdjs.Game4Code.GDTimerObjects2= [];
gdjs.Game4Code.GDPointsObjects1= [];
gdjs.Game4Code.GDPointsObjects2= [];
gdjs.Game4Code.GDIgnoreTimeObjects1= [];
gdjs.Game4Code.GDIgnoreTimeObjects2= [];
gdjs.Game4Code.GDIgnoreDamageObjects1= [];
gdjs.Game4Code.GDIgnoreDamageObjects2= [];
gdjs.Game4Code.GDIgnoreEnemyObjects1= [];
gdjs.Game4Code.GDIgnoreEnemyObjects2= [];
gdjs.Game4Code.GDOverheatObjects1= [];
gdjs.Game4Code.GDOverheatObjects2= [];
gdjs.Game4Code.GDProjectileObjects1= [];
gdjs.Game4Code.GDProjectileObjects2= [];

gdjs.Game4Code.conditionTrue_0 = {val:false};
gdjs.Game4Code.condition0IsTrue_0 = {val:false};
gdjs.Game4Code.condition1IsTrue_0 = {val:false};
gdjs.Game4Code.condition2IsTrue_0 = {val:false};
gdjs.Game4Code.condition3IsTrue_0 = {val:false};
gdjs.Game4Code.condition4IsTrue_0 = {val:false};
gdjs.Game4Code.conditionTrue_1 = {val:false};
gdjs.Game4Code.condition0IsTrue_1 = {val:false};
gdjs.Game4Code.condition1IsTrue_1 = {val:false};
gdjs.Game4Code.condition2IsTrue_1 = {val:false};
gdjs.Game4Code.condition3IsTrue_1 = {val:false};
gdjs.Game4Code.condition4IsTrue_1 = {val:false};


gdjs.Game4Code.eventsList0 = function(runtimeScene) {

{


gdjs.Game4Code.condition0IsTrue_0.val = false;
{
gdjs.Game4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) < 6;
}if (gdjs.Game4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Promotion", false);
}}

}


};gdjs.Game4Code.mapOfGDgdjs_46Game4Code_46GDBluePlayerObjects1Objects = Hashtable.newFrom({"BluePlayer": gdjs.Game4Code.GDBluePlayerObjects1});gdjs.Game4Code.mapOfGDgdjs_46Game4Code_46GDGreenFlagObjects1Objects = Hashtable.newFrom({"GreenFlag": gdjs.Game4Code.GDGreenFlagObjects1});gdjs.Game4Code.mapOfGDgdjs_46Game4Code_46GDBluePlayerObjects1Objects = Hashtable.newFrom({"BluePlayer": gdjs.Game4Code.GDBluePlayerObjects1});gdjs.Game4Code.mapOfGDgdjs_46Game4Code_46GDBlueCrystal2Objects1Objects = Hashtable.newFrom({"BlueCrystal2": gdjs.Game4Code.GDBlueCrystal2Objects1});gdjs.Game4Code.mapOfGDgdjs_46Game4Code_46GDFlyingEnemyObjects1Objects = Hashtable.newFrom({"FlyingEnemy": gdjs.Game4Code.GDFlyingEnemyObjects1});gdjs.Game4Code.mapOfGDgdjs_46Game4Code_46GDBluePlayerObjects1Objects = Hashtable.newFrom({"BluePlayer": gdjs.Game4Code.GDBluePlayerObjects1});gdjs.Game4Code.eventsList1 = function(runtimeScene) {

{


gdjs.Game4Code.condition0IsTrue_0.val = false;
{
gdjs.Game4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.Game4Code.GDFlyingEnemyObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Reset.wav", false, 10, 1);
}{for(var i = 0, len = gdjs.Game4Code.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDFlyingEnemyObjects1[i].resetTimer("Delay");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Game4Code.GDBluePlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.Game4Code.GDFlyingEnemyObjects1);

gdjs.Game4Code.condition0IsTrue_0.val = false;
gdjs.Game4Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game4Code.GDFlyingEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Game4Code.GDFlyingEnemyObjects1[i].timerPaused("Delay") ) {
        gdjs.Game4Code.condition0IsTrue_0.val = true;
        gdjs.Game4Code.GDFlyingEnemyObjects1[k] = gdjs.Game4Code.GDFlyingEnemyObjects1[i];
        ++k;
    }
}
gdjs.Game4Code.GDFlyingEnemyObjects1.length = k;}if ( gdjs.Game4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game4Code.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game4Code.GDBluePlayerObjects1[i].getVariableNumber(gdjs.Game4Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.Game4Code.condition1IsTrue_0.val = true;
        gdjs.Game4Code.GDBluePlayerObjects1[k] = gdjs.Game4Code.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.Game4Code.GDBluePlayerObjects1.length = k;}}
if (gdjs.Game4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Game4Code.GDBluePlayerObjects1 */
/* Reuse gdjs.Game4Code.GDFlyingEnemyObjects1 */
{for(var i = 0, len = gdjs.Game4Code.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDFlyingEnemyObjects1[i].addForce(0, 80 + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) * 0.005), 0);
}
}{for(var i = 0, len = gdjs.Game4Code.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDFlyingEnemyObjects1[i].addForceTowardObject((gdjs.Game4Code.GDBluePlayerObjects1.length !== 0 ? gdjs.Game4Code.GDBluePlayerObjects1[0] : null), 60, 0);
}
}}

}


{


{
}

}


{



}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("IgnoreDamage"), gdjs.Game4Code.GDIgnoreDamageObjects1);
gdjs.copyArray(runtimeScene.getObjects("IgnoreEnemy"), gdjs.Game4Code.GDIgnoreEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("IgnoreTime"), gdjs.Game4Code.GDIgnoreTimeObjects1);
{for(var i = 0, len = gdjs.Game4Code.GDIgnoreTimeObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDIgnoreTimeObjects1[i].setString("NO Timeout Game Over: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))));
}
}{for(var i = 0, len = gdjs.Game4Code.GDIgnoreDamageObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDIgnoreDamageObjects1[i].setString("NO Zero Lives Game Over: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))));
}
}{for(var i = 0, len = gdjs.Game4Code.GDIgnoreEnemyObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDIgnoreEnemyObjects1[i].setString("NO Player Reset from Damage: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Game4Code.GDBluePlayerObjects1);

gdjs.Game4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game4Code.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game4Code.GDBluePlayerObjects1[i].getVariableNumber(gdjs.Game4Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.Game4Code.condition0IsTrue_0.val = true;
        gdjs.Game4Code.GDBluePlayerObjects1[k] = gdjs.Game4Code.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.Game4Code.GDBluePlayerObjects1.length = k;}if (gdjs.Game4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Game4Code.GDPointsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Game4Code.GDTimerObjects1);
{runtimeScene.getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.Game4Code.GDTimerObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDTimerObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc((gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) / 100))));
}
}{for(var i = 0, len = gdjs.Game4Code.GDPointsObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDPointsObjects1[i].setString("Points: " + gdjs.evtTools.common.toString((gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) / 100)) + (gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) / 100))));
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}{runtimeScene.getVariables().getFromIndex(2).sub(1 + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) * 0.000025));
}}

}


{


gdjs.Game4Code.condition0IsTrue_0.val = false;
{
gdjs.Game4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.Game4Code.GDFlyingEnemyObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Reset.wav", false, 10, 1);
}{for(var i = 0, len = gdjs.Game4Code.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDFlyingEnemyObjects1[i].resetTimer("Delay");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage");
}}

}


{


gdjs.Game4Code.condition0IsTrue_0.val = false;
{
{gdjs.Game4Code.conditionTrue_1 = gdjs.Game4Code.condition0IsTrue_0;
gdjs.Game4Code.conditionTrue_1.val = ((gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) / 100)) > 999);
}
}if (gdjs.Game4Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(100000);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) - gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) * 100000);
}
{ //Subevents
gdjs.Game4Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Game4Code.condition0IsTrue_0.val = false;
{
gdjs.Game4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Lives"), gdjs.Game4Code.GDLivesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Game4Code.GDPointsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Game4Code.GDTimerObjects1);
{for(var i = 0, len = gdjs.Game4Code.GDLivesObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDLivesObjects1[i].setString(gdjs.Game4Code.GDLivesObjects1[i].getString() + (gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))))));
}
}{for(var i = 0, len = gdjs.Game4Code.GDTimerObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDTimerObjects1[i].setString(gdjs.Game4Code.GDTimerObjects1[i].getString() + (gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))))));
}
}{for(var i = 0, len = gdjs.Game4Code.GDPointsObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDPointsObjects1[i].setString(gdjs.Game4Code.GDPointsObjects1[i].getString() + (gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Point"))))));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PointTracker");
}}

}


{



}


{


gdjs.Game4Code.condition0IsTrue_0.val = false;
gdjs.Game4Code.condition1IsTrue_0.val = false;
{
gdjs.Game4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) <= 0;
}if ( gdjs.Game4Code.condition0IsTrue_0.val ) {
{
gdjs.Game4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == -(1);
}}
if (gdjs.Game4Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("Reactor meltdown");
}}

}


{


gdjs.Game4Code.condition0IsTrue_0.val = false;
gdjs.Game4Code.condition1IsTrue_0.val = false;
{
gdjs.Game4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs.Game4Code.condition0IsTrue_0.val ) {
{
gdjs.Game4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == -(1);
}}
if (gdjs.Game4Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("Workplace injury");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Game4Code.GDBluePlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenFlag"), gdjs.Game4Code.GDGreenFlagObjects1);

gdjs.Game4Code.condition0IsTrue_0.val = false;
gdjs.Game4Code.condition1IsTrue_0.val = false;
{
gdjs.Game4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game4Code.mapOfGDgdjs_46Game4Code_46GDBluePlayerObjects1Objects, gdjs.Game4Code.mapOfGDgdjs_46Game4Code_46GDGreenFlagObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Game4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game4Code.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game4Code.GDBluePlayerObjects1[i].getVariableNumber(gdjs.Game4Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Game4Code.condition1IsTrue_0.val = true;
        gdjs.Game4Code.GDBluePlayerObjects1[k] = gdjs.Game4Code.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.Game4Code.GDBluePlayerObjects1.length = k;}}
if (gdjs.Game4Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueCrystal2"), gdjs.Game4Code.GDBlueCrystal2Objects1);
/* Reuse gdjs.Game4Code.GDBluePlayerObjects1 */
{runtimeScene.getVariables().getFromIndex(1).add(1750);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1000);
}{for(var i = 0, len = gdjs.Game4Code.GDBlueCrystal2Objects1.length ;i < len;++i) {
    gdjs.Game4Code.GDBlueCrystal2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game4Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDBluePlayerObjects1[i].returnVariable(gdjs.Game4Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Impact.wav", false, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueCrystal2"), gdjs.Game4Code.GDBlueCrystal2Objects1);
gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Game4Code.GDBluePlayerObjects1);

gdjs.Game4Code.condition0IsTrue_0.val = false;
gdjs.Game4Code.condition1IsTrue_0.val = false;
{
gdjs.Game4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game4Code.mapOfGDgdjs_46Game4Code_46GDBluePlayerObjects1Objects, gdjs.Game4Code.mapOfGDgdjs_46Game4Code_46GDBlueCrystal2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Game4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game4Code.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game4Code.GDBluePlayerObjects1[i].getVariableNumber(gdjs.Game4Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)) != 1 ) {
        gdjs.Game4Code.condition1IsTrue_0.val = true;
        gdjs.Game4Code.GDBluePlayerObjects1[k] = gdjs.Game4Code.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.Game4Code.GDBluePlayerObjects1.length = k;}}
if (gdjs.Game4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Game4Code.GDBlueCrystal2Objects1 */
/* Reuse gdjs.Game4Code.GDBluePlayerObjects1 */
{for(var i = 0, len = gdjs.Game4Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDBluePlayerObjects1[i].returnVariable(gdjs.Game4Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.Game4Code.GDBlueCrystal2Objects1.length ;i < len;++i) {
    gdjs.Game4Code.GDBlueCrystal2Objects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Cool.wav", false, 10, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Overheat"), gdjs.Game4Code.GDOverheatObjects1);
{for(var i = 0, len = gdjs.Game4Code.GDOverheatObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDOverheatObjects1[i].setOpacity(255 - (255 * (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) / 1000)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Game4Code.GDBluePlayerObjects1);

gdjs.Game4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game4Code.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game4Code.GDBluePlayerObjects1[i].getVariableNumber(gdjs.Game4Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Game4Code.condition0IsTrue_0.val = true;
        gdjs.Game4Code.GDBluePlayerObjects1[k] = gdjs.Game4Code.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.Game4Code.GDBluePlayerObjects1.length = k;}if (gdjs.Game4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueCrystal2"), gdjs.Game4Code.GDBlueCrystal2Objects1);
{for(var i = 0, len = gdjs.Game4Code.GDBlueCrystal2Objects1.length ;i < len;++i) {
    gdjs.Game4Code.GDBlueCrystal2Objects1[i].hide(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Game4Code.GDBluePlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.Game4Code.GDFlyingEnemyObjects1);

gdjs.Game4Code.condition0IsTrue_0.val = false;
gdjs.Game4Code.condition1IsTrue_0.val = false;
gdjs.Game4Code.condition2IsTrue_0.val = false;
gdjs.Game4Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game4Code.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game4Code.GDBluePlayerObjects1[i].getVariableNumber(gdjs.Game4Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.Game4Code.condition0IsTrue_0.val = true;
        gdjs.Game4Code.GDBluePlayerObjects1[k] = gdjs.Game4Code.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.Game4Code.GDBluePlayerObjects1.length = k;}if ( gdjs.Game4Code.condition0IsTrue_0.val ) {
{
gdjs.Game4Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game4Code.mapOfGDgdjs_46Game4Code_46GDFlyingEnemyObjects1Objects, gdjs.Game4Code.mapOfGDgdjs_46Game4Code_46GDBluePlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Game4Code.condition1IsTrue_0.val ) {
{
gdjs.Game4Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == -(1);
}if ( gdjs.Game4Code.condition2IsTrue_0.val ) {
{
{gdjs.Game4Code.conditionTrue_1 = gdjs.Game4Code.condition3IsTrue_0;
gdjs.Game4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9591260);
}
}}
}
}
if (gdjs.Game4Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Game4Code.GDBluePlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Lives"), gdjs.Game4Code.GDLivesObjects1);
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.Game4Code.GDLivesObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDLivesObjects1[i].setString("Lives: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)))));
}
}{for(var i = 0, len = gdjs.Game4Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDBluePlayerObjects1[i].returnVariable(gdjs.Game4Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.Game4Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDBluePlayerObjects1[i].returnVariable(gdjs.Game4Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Game4Code.GDBluePlayerObjects1);

gdjs.Game4Code.condition0IsTrue_0.val = false;
gdjs.Game4Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game4Code.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game4Code.GDBluePlayerObjects1[i].getVariableNumber(gdjs.Game4Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.Game4Code.condition0IsTrue_0.val = true;
        gdjs.Game4Code.GDBluePlayerObjects1[k] = gdjs.Game4Code.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.Game4Code.GDBluePlayerObjects1.length = k;}if ( gdjs.Game4Code.condition0IsTrue_0.val ) {
{
{gdjs.Game4Code.conditionTrue_1 = gdjs.Game4Code.condition1IsTrue_0;
gdjs.Game4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8243588);
}
}}
if (gdjs.Game4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Game4Code.GDBluePlayerObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Damage");
}{for(var i = 0, len = gdjs.Game4Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDBluePlayerObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Damage.wav", false, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Game4Code.GDBluePlayerObjects1);

gdjs.Game4Code.condition0IsTrue_0.val = false;
gdjs.Game4Code.condition1IsTrue_0.val = false;
gdjs.Game4Code.condition2IsTrue_0.val = false;
{
gdjs.Game4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "Damage");
}if ( gdjs.Game4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game4Code.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game4Code.GDBluePlayerObjects1[i].getVariableNumber(gdjs.Game4Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.Game4Code.condition1IsTrue_0.val = true;
        gdjs.Game4Code.GDBluePlayerObjects1[k] = gdjs.Game4Code.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.Game4Code.GDBluePlayerObjects1.length = k;}if ( gdjs.Game4Code.condition1IsTrue_0.val ) {
{
{gdjs.Game4Code.conditionTrue_1 = gdjs.Game4Code.condition2IsTrue_0;
gdjs.Game4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7861948);
}
}}
}
if (gdjs.Game4Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Game4Code.GDBluePlayerObjects1 */
{runtimeScene.getVariables().getFromIndex(2).setNumber(1000);
}{for(var i = 0, len = gdjs.Game4Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDBluePlayerObjects1[i].setPosition(5,420);
}
}{for(var i = 0, len = gdjs.Game4Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDBluePlayerObjects1[i].returnVariable(gdjs.Game4Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.Game4Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDBluePlayerObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Reset.wav", false, 10, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.Game4Code.GDFlyingEnemyObjects1);

gdjs.Game4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game4Code.GDFlyingEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Game4Code.GDFlyingEnemyObjects1[i].getY() >= 460 ) {
        gdjs.Game4Code.condition0IsTrue_0.val = true;
        gdjs.Game4Code.GDFlyingEnemyObjects1[k] = gdjs.Game4Code.GDFlyingEnemyObjects1[i];
        ++k;
    }
}
gdjs.Game4Code.GDFlyingEnemyObjects1.length = k;}if (gdjs.Game4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Game4Code.GDFlyingEnemyObjects1 */
{for(var i = 0, len = gdjs.Game4Code.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDFlyingEnemyObjects1[i].setY(-(60));
}
}{for(var i = 0, len = gdjs.Game4Code.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDFlyingEnemyObjects1[i].resetTimer("Delay");
}
}{for(var i = 0, len = gdjs.Game4Code.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDFlyingEnemyObjects1[i].unpauseTimer("Delay");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Impact2.wav", false, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.Game4Code.GDFlyingEnemyObjects1);

gdjs.Game4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game4Code.GDFlyingEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Game4Code.GDFlyingEnemyObjects1[i].timerElapsedTime("Delay", gdjs.randomInRange(1, 1000)) ) {
        gdjs.Game4Code.condition0IsTrue_0.val = true;
        gdjs.Game4Code.GDFlyingEnemyObjects1[k] = gdjs.Game4Code.GDFlyingEnemyObjects1[i];
        ++k;
    }
}
gdjs.Game4Code.GDFlyingEnemyObjects1.length = k;}if (gdjs.Game4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Game4Code.GDFlyingEnemyObjects1 */
{for(var i = 0, len = gdjs.Game4Code.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDFlyingEnemyObjects1[i].pauseTimer("Delay");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Game4Code.GDBluePlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.Game4Code.GDFlyingEnemyObjects1);

gdjs.Game4Code.condition0IsTrue_0.val = false;
gdjs.Game4Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game4Code.GDFlyingEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Game4Code.GDFlyingEnemyObjects1[i].timerPaused("Delay") ) {
        gdjs.Game4Code.condition0IsTrue_0.val = true;
        gdjs.Game4Code.GDFlyingEnemyObjects1[k] = gdjs.Game4Code.GDFlyingEnemyObjects1[i];
        ++k;
    }
}
gdjs.Game4Code.GDFlyingEnemyObjects1.length = k;}if ( gdjs.Game4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game4Code.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game4Code.GDBluePlayerObjects1[i].getVariableNumber(gdjs.Game4Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.Game4Code.condition1IsTrue_0.val = true;
        gdjs.Game4Code.GDBluePlayerObjects1[k] = gdjs.Game4Code.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.Game4Code.GDBluePlayerObjects1.length = k;}}
if (gdjs.Game4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Game4Code.GDFlyingEnemyObjects1 */
{for(var i = 0, len = gdjs.Game4Code.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDFlyingEnemyObjects1[i].addForce(0, 80 + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) * 0.005), 0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Game4Code.GDBluePlayerObjects1);

gdjs.Game4Code.condition0IsTrue_0.val = false;
gdjs.Game4Code.condition1IsTrue_0.val = false;
gdjs.Game4Code.condition2IsTrue_0.val = false;
{
gdjs.Game4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.Game4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game4Code.GDBluePlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Game4Code.GDBluePlayerObjects1[i].getX() <= 0) ) {
        gdjs.Game4Code.condition1IsTrue_0.val = true;
        gdjs.Game4Code.GDBluePlayerObjects1[k] = gdjs.Game4Code.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.Game4Code.GDBluePlayerObjects1.length = k;}if ( gdjs.Game4Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game4Code.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game4Code.GDBluePlayerObjects1[i].getVariableNumber(gdjs.Game4Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.Game4Code.condition2IsTrue_0.val = true;
        gdjs.Game4Code.GDBluePlayerObjects1[k] = gdjs.Game4Code.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.Game4Code.GDBluePlayerObjects1.length = k;}}
}
if (gdjs.Game4Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Game4Code.GDBluePlayerObjects1 */
{for(var i = 0, len = gdjs.Game4Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDBluePlayerObjects1[i].addForce(-(400), 0, 0);
}
}{for(var i = 0, len = gdjs.Game4Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDBluePlayerObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.Game4Code.GDBluePlayerObjects1);

gdjs.Game4Code.condition0IsTrue_0.val = false;
gdjs.Game4Code.condition1IsTrue_0.val = false;
gdjs.Game4Code.condition2IsTrue_0.val = false;
{
gdjs.Game4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.Game4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game4Code.GDBluePlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Game4Code.GDBluePlayerObjects1[i].getX() >= 800) ) {
        gdjs.Game4Code.condition1IsTrue_0.val = true;
        gdjs.Game4Code.GDBluePlayerObjects1[k] = gdjs.Game4Code.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.Game4Code.GDBluePlayerObjects1.length = k;}if ( gdjs.Game4Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game4Code.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game4Code.GDBluePlayerObjects1[i].getVariableNumber(gdjs.Game4Code.GDBluePlayerObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.Game4Code.condition2IsTrue_0.val = true;
        gdjs.Game4Code.GDBluePlayerObjects1[k] = gdjs.Game4Code.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.Game4Code.GDBluePlayerObjects1.length = k;}}
}
if (gdjs.Game4Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Game4Code.GDBluePlayerObjects1 */
{for(var i = 0, len = gdjs.Game4Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDBluePlayerObjects1[i].addForce(400, 0, 0);
}
}{for(var i = 0, len = gdjs.Game4Code.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.Game4Code.GDBluePlayerObjects1[i].flipX(false);
}
}}

}


{



}


{


gdjs.Game4Code.condition0IsTrue_0.val = false;
{
gdjs.Game4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Game4Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).add(1500);
}}

}


{


gdjs.Game4Code.condition0IsTrue_0.val = false;
{
gdjs.Game4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.Game4Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).sub(1500);
}}

}


{


gdjs.Game4Code.condition0IsTrue_0.val = false;
{
gdjs.Game4Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
}if (gdjs.Game4Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).mul(-(1));
}{gdjs.evtTools.sound.playSound(runtimeScene, "Walk.wav", false, 10, 1);
}}

}


{


gdjs.Game4Code.condition0IsTrue_0.val = false;
{
gdjs.Game4Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
}if (gdjs.Game4Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).mul(-(1));
}{gdjs.evtTools.sound.playSound(runtimeScene, "Walk.wav", false, 10, 1);
}}

}


{


gdjs.Game4Code.condition0IsTrue_0.val = false;
{
gdjs.Game4Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "t");
}if (gdjs.Game4Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).mul(-(1));
}{gdjs.evtTools.sound.playSound(runtimeScene, "Walk.wav", false, 10, 1);
}}

}


};

gdjs.Game4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game4Code.GDBluePlayerObjects1.length = 0;
gdjs.Game4Code.GDBluePlayerObjects2.length = 0;
gdjs.Game4Code.GDFlyingEnemyObjects1.length = 0;
gdjs.Game4Code.GDFlyingEnemyObjects2.length = 0;
gdjs.Game4Code.GDBlueCrystal2Objects1.length = 0;
gdjs.Game4Code.GDBlueCrystal2Objects2.length = 0;
gdjs.Game4Code.GDSmallNotBluePlatformObjects1.length = 0;
gdjs.Game4Code.GDSmallNotBluePlatformObjects2.length = 0;
gdjs.Game4Code.GDSmallBluePlatformObjects1.length = 0;
gdjs.Game4Code.GDSmallBluePlatformObjects2.length = 0;
gdjs.Game4Code.GDPurpleFloorObjects1.length = 0;
gdjs.Game4Code.GDPurpleFloorObjects2.length = 0;
gdjs.Game4Code.GDYellowFloorObjects1.length = 0;
gdjs.Game4Code.GDYellowFloorObjects2.length = 0;
gdjs.Game4Code.GDBlueFloorObjects1.length = 0;
gdjs.Game4Code.GDBlueFloorObjects2.length = 0;
gdjs.Game4Code.GDGreenFloorObjects1.length = 0;
gdjs.Game4Code.GDGreenFloorObjects2.length = 0;
gdjs.Game4Code.GDRedFloorObjects1.length = 0;
gdjs.Game4Code.GDRedFloorObjects2.length = 0;
gdjs.Game4Code.GDGreenFlagObjects1.length = 0;
gdjs.Game4Code.GDGreenFlagObjects2.length = 0;
gdjs.Game4Code.GDLivesObjects1.length = 0;
gdjs.Game4Code.GDLivesObjects2.length = 0;
gdjs.Game4Code.GDTimerObjects1.length = 0;
gdjs.Game4Code.GDTimerObjects2.length = 0;
gdjs.Game4Code.GDPointsObjects1.length = 0;
gdjs.Game4Code.GDPointsObjects2.length = 0;
gdjs.Game4Code.GDIgnoreTimeObjects1.length = 0;
gdjs.Game4Code.GDIgnoreTimeObjects2.length = 0;
gdjs.Game4Code.GDIgnoreDamageObjects1.length = 0;
gdjs.Game4Code.GDIgnoreDamageObjects2.length = 0;
gdjs.Game4Code.GDIgnoreEnemyObjects1.length = 0;
gdjs.Game4Code.GDIgnoreEnemyObjects2.length = 0;
gdjs.Game4Code.GDOverheatObjects1.length = 0;
gdjs.Game4Code.GDOverheatObjects2.length = 0;
gdjs.Game4Code.GDProjectileObjects1.length = 0;
gdjs.Game4Code.GDProjectileObjects2.length = 0;

gdjs.Game4Code.eventsList1(runtimeScene);
return;

}

gdjs['Game4Code'] = gdjs.Game4Code;
