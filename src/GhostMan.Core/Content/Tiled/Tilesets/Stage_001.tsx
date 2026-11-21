<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.10" tiledversion="1.12.2" name="Stage_001" tilewidth="16" tileheight="16" tilecount="32" columns="8">
 <properties>
  <property name="Theme" value="Neon Ruins"/>
  <property name="PixelArt" value="16x16 pixel perfect"/>
 </properties>
 <image source="../Source/Stage_001.png" width="128" height="64"/>
 <tile id="0" type="Floor">
  <properties><property name="Collision" value="Passable"/></properties>
 </tile>
 <tile id="1" type="FloorRune">
  <properties><property name="Collision" value="Passable"/></properties>
 </tile>
 <tile id="2" type="FloorSpark">
  <properties><property name="Collision" value="Passable"/></properties>
 </tile>
 <tile id="3" type="Wall">
  <properties><property name="Collision" value="Solid"/></properties>
 </tile>
 <tile id="4" type="WallTop">
  <properties><property name="Collision" value="Solid"/></properties>
 </tile>
 <tile id="5" type="WallBottom">
  <properties><property name="Collision" value="Solid"/></properties>
 </tile>
 <tile id="6" type="WallLeft">
  <properties><property name="Collision" value="Solid"/></properties>
 </tile>
 <tile id="7" type="WallRight">
  <properties><property name="Collision" value="Solid"/></properties>
 </tile>
 <tile id="8" type="WallCornerTopLeft">
  <properties><property name="Collision" value="Solid"/></properties>
 </tile>
 <tile id="9" type="WallCornerTopRight">
  <properties><property name="Collision" value="Solid"/></properties>
 </tile>
 <tile id="10" type="WallCornerBottomLeft">
  <properties><property name="Collision" value="Solid"/></properties>
 </tile>
 <tile id="11" type="WallCornerBottomRight">
  <properties><property name="Collision" value="Solid"/></properties>
 </tile>
 <tile id="12" type="WallGlow">
  <properties><property name="Collision" value="Solid"/></properties>
 </tile>
 <tile id="13" type="Pillar">
  <properties><property name="Collision" value="Solid"/></properties>
 </tile>
 <tile id="14" type="PillarCap">
  <properties><property name="Collision" value="Solid"/></properties>
 </tile>
 <tile id="15" type="BrokenWall">
  <properties><property name="Collision" value="Solid"/></properties>
 </tile>
 <tile id="16" type="Food">
  <properties>
   <property name="Collision" value="Passable"/>
   <property name="Interaction" value="Consumable"/>
  </properties>
 </tile>
 <tile id="17" type="FoodBurst">
  <properties>
   <property name="Collision" value="Passable"/>
   <property name="Interaction" value="Consumable"/>
  </properties>
 </tile>
 <tile id="18" type="TrapCoil">
  <properties>
   <property name="Collision" value="Passable"/>
   <property name="Interaction" value="Trap"/>
  </properties>
 </tile>
 <tile id="19" type="TrapActive">
  <properties>
   <property name="Collision" value="Passable"/>
   <property name="Interaction" value="Trap"/>
  </properties>
 </tile>
 <tile id="20" type="PlayerSpawn">
  <properties>
   <property name="Collision" value="Passable"/>
   <property name="Interaction" value="Spawn"/>
  </properties>
 </tile>
 <tile id="21" type="GhostAISpawn">
  <properties>
   <property name="Collision" value="Passable"/>
   <property name="Interaction" value="Spawn"/>
  </properties>
 </tile>
 <tile id="22" type="Portal">
  <properties>
   <property name="Collision" value="Passable"/>
   <property name="Interaction" value="Exit"/>
  </properties>
 </tile>
 <tile id="23" type="Gate">
  <properties><property name="Collision" value="Solid"/></properties>
 </tile>
 <tile id="24" type="Bridge">
  <properties><property name="Collision" value="Passable"/></properties>
 </tile>
 <tile id="25" type="Rubble">
  <properties><property name="Collision" value="Passable"/></properties>
 </tile>
 <tile id="26" type="RuneEmpty">
  <properties><property name="Collision" value="Passable"/></properties>
 </tile>
 <tile id="27" type="Grass">
  <properties><property name="Collision" value="Passable"/></properties>
 </tile>
 <tile id="28" type="Void">
  <properties><property name="Collision" value="Solid"/></properties>
 </tile>
 <tile id="29" type="Grid">
  <properties><property name="Collision" value="Passable"/></properties>
 </tile>
 <tile id="30" type="Highlight">
  <properties><property name="Collision" value="Passable"/></properties>
 </tile>
 <tile id="31" type="AmberEdge">
  <properties><property name="Collision" value="Passable"/></properties>
 </tile>
</tileset>
