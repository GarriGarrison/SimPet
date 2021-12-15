import React,{useState} from 'react';
import classes from './room.module.css'

const Room = () => {
  const [coord,setCoord] =useState({x:449.52,y:1090.36})

  function changePosition(e){

    setCoord({x:(e.target.attributes.x.value),y:(e.target.attributes.y.value)}) ;
  }


  return (
    <div className={classes.container}>
      
      <svg xmlns="http://www.w3.org/2000/svg"  xmlSpace="preserve" width="300mm" height="auto" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 3053.1 2140.19"
 xmlnsXlink="http://www.w3.org/1999/xlink">
 <defs>
 <clipPath id="id44">
    <rect x={coord.x} y={coord.y} width="644.3" height="400.8"/>
   </clipPath>
   <clipPath id="id0">
    <rect x="1417.05" width="696.02" height="879.18"/>
   </clipPath>
   <clipPath id="id1">
    <rect x="449.52" y="1090.36" width="571.04" height="275.82"/>
   </clipPath>
   <clipPath id="id2">
    <rect x="1100.29" y="301.68" width="265.05" height="512.85"/>
   </clipPath>
   <clipPath id="id3">
    <rect x="2414.75" y="969.68" width="402.96" height="249.96"/>
   </clipPath>
   <clipPath id="id4">
    <rect x="145.69" y="799.45" width="644.3" height="400.8"/>
   </clipPath>
   <clipPath id="id5">
    <rect x="1475.23" y="642.15" width="305.99" height="256.43"/>
   </clipPath>
   <clipPath id="id6">
    <rect x="992.54" y="1226.11" width="663.69" height="568.88"/>
   </clipPath>
   <clipPath id="id7">
    <rect x="673.63" y="527.94" width="101.28" height="176.7"/>
   </clipPath>
   <clipPath id="id8">
    <rect x="787.83" y="506.39" width="99.12" height="170.23"/>
   </clipPath>
   <clipPath id="id9">
    <rect x="908.51" y="474.07" width="94.81" height="168.08"/>
   </clipPath>
 </defs>
 <g id="Слой_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <path className={classes.fil0} d="M1225.66 742.94l-105.13 35.55 2.76 1.22 -431.16 146 -562.44 190.46 -129.06 -756.35 -0.64 -15.81 3.38 -15.57 7.18 -14.23 10.46 -11.89 13 -8.72 14.62 -4.96 1474.24 -287.26 -7.42 645.54 -89.79 30.41 -2.8 -1.08 -96.53 32.64 -100.69 34.05zm-148.69 -125.41l-20.32 -474.37 -74.55 15.3 -9.8 2.01 -6.81 1.4 -176.46 36.2 -21.19 4.35 -6.58 1.35 -134.51 27.6 41.22 438.15 0.45 4.8 1.09 11.63 5.01 53.3 1.12 11.92 7.15 3.54 402.07 -122.97 -0.47 -11.2 -7.43 -3zm-375.39 293.25l21.06 -7.08 20.89 -7.03 20.72 -6.97 20.56 -6.92 20.4 -6.86 20.24 -6.81 20.08 -6.76 19.93 -6.7 19.77 -6.65 19.62 -6.6 19.47 -6.55 19.32 -6.5 19.18 -6.45 19.03 -6.4 18.89 -6.35 18.75 -6.31 18.61 -6.26 18.47 -6.21 18.33 -6.17 -6.27 -142.47 -18.69 5.74 -18.83 5.78 -18.97 5.82 -19.12 5.87 -19.26 5.92 -19.41 5.96 -19.57 6.01 -19.72 6.05 -19.87 6.1 -20.03 6.15 -20.19 6.2 -20.35 6.25 -20.51 6.3 -20.67 6.35 -20.84 6.4 -21 6.45 -21.17 6.5 -21.35 6.55 -21.52 6.61 14 151.05z"/>
  <polygon className={classes.fil1} points="1515.47,646.92 1522.89,1.38 3004.19,314.35 3019.16,319.67 3032.38,328.82 3042.9,341.17 3049.98,355.86 3053.1,371.85 3052.07,388.01 2901.18,1157.48 2492.36,1006.85 2492.53,1005.67 2353.08,954.33 2357.03,921.53 2357.3,919.26 2421.33,386.27 2263.87,346.88 2219.67,335.83 2167.25,885.9 2050.92,843.07 2049.51,843.68 "/>
  <polygon className={classes.fil2} x="1500" y="900" onClick={changePosition} points="2050.92,843.07 2167.25,885.9 2168.54,886.38 2171.13,887.33 2353.08,954.33 2492.53,1005.67 2120.3,1205 1659.55,1451.73 1211.53,1207.63 2046.69,844.9 2049.51,843.68 "/>
  <polygon className={classes.fil3} x="2150" y="950" onClick={changePosition} points="2489.63,1008.32 2900.69,1159.97 2546.7,1392.18 2546.52,1392.3 2543.2,1390.84 2521.56,1381.33 2121.53,1205.54 "/>
  <polygon className={classes.fil4} points="2167.25,885.9 2219.67,335.83 2263.87,346.88 2211.52,866.66 2168.54,886.38 "/>
  <polygon className={classes.fil3} points="2211.3,868.87 2357.03,921.53 2353.08,954.33 2171.13,887.33 "/>
  <polygon className={classes.fil5} points="2211.52,866.66 2263.87,346.88 2421.33,386.27 2357.3,919.26 "/>
  <g id="_1540289970416">
   <polygon className={classes.fil6} x="1050" y="500" onClick={changePosition} points="1120.53,778.5 1225.66,742.94 1255.01,755.31 1149.71,791.42 1126.06,780.94 1123.3,779.72 "/>
   <polygon className={classes.fil7} x="1050" y="500" onClick={changePosition} points="1225.66,742.94 1326.35,708.89 1355.83,720.74 1255.01,755.31 "/>
   <polygon className={classes.fil7} x="1050" y="500" onClick={changePosition} points="1958.6,882.08 1861.77,924.11 1750.49,879.38 1847.51,839.4 "/>
   <polygon className={classes.fil8} points="1847.51,839.4 1958.6,882.08 2048.19,843.2 1937.36,802.36 "/>
   <polygon className={classes.fil9} points="1847.51,839.39 1937.36,802.36 1831.7,763.43 1741.7,798.74 "/>
   <polygon className={classes.fil8} points="1741.7,798.74 1831.7,763.43 1730.85,726.28 1640.81,759.98 "/>
   <polygon className={classes.fil9} points="1640.81,759.98 1730.85,726.28 1634.48,690.77 1544.49,722.98 "/>
   <polygon className={classes.fil8} points="1544.49,722.98 1634.48,690.77 1542.3,656.81 1452.46,687.61 "/>
   <polygon className={classes.fil9} points="1452.45,687.61 1542.3,656.81 1515.47,646.92 1425.68,677.33 1428.48,678.4 "/>
   <polygon className={classes.fil6} x="1050" y="500" onClick={changePosition} points="1847.51,839.4 1750.49,879.38 1644.63,836.83 1741.7,798.74 "/>
   <polygon className={classes.fil6} x="1050" y="500" onClick={changePosition} points="1750.49,879.38 1861.77,924.11 1760.18,968.2 1648.83,921.28 "/>
   <polygon className={classes.fil7} x="1050" y="500" onClick={changePosition} points="1741.7,798.74 1644.63,836.83 1543.79,796.3 1640.81,759.98 "/>
   <polygon className={classes.fil6} x="1050" y="500" onClick={changePosition} points="1640.81,759.98 1543.79,796.3 1447.63,757.64 1544.49,722.98 "/>
   <polygon className={classes.fil7} x="1050" y="500" onClick={changePosition} points="1447.63,757.64 1543.79,796.3 1442.36,834.27 1346.46,793.85 "/>
   <polygon className={classes.fil6} x="1050" y="500" onClick={changePosition} points="1442.36,834.27 1543.79,796.3 1644.63,836.83 1543.02,876.69 "/>
   <polygon className={classes.fil7} x="1050" y="500" onClick={changePosition} points="1442.36,834.27 1543.02,876.69 1436.56,918.46 1336.19,874.01 "/>
   <polygon className={classes.fil6} x="1050" y="500" onClick={changePosition} points="1436.56,918.46 1543.02,876.69 1648.83,921.28 1542.17,965.23 "/>
   <polygon className={classes.fil6} x="1050" y="500" onClick={changePosition} points="1442.36,834.27 1336.19,874.01 1240.69,831.71 1346.46,793.85 "/>
   <polygon className={classes.fil7} x="1050" y="500" onClick={changePosition} points="1346.46,793.85 1240.69,831.71 1149.71,791.42 1255.01,755.31 "/>
   <polygon className={classes.fil6} x="1050" y="500" onClick={changePosition} points="1346.46,793.85 1255.01,755.31 1355.83,720.74 1447.63,757.64 "/>
   <polygon className={classes.fil7} x="1050" y="500" onClick={changePosition} points="1544.49,722.98 1447.63,757.64 1355.83,720.74 1452.46,687.61 "/>
   <polygon className={classes.fil7} x="1050" y="500" onClick={changePosition} points="1750.49,879.38 1648.83,921.28 1543.02,876.69 1644.63,836.83 "/>
   <polygon className={classes.fil7} x="1050" y="500" onClick={changePosition} points="1648.83,921.28 1760.18,968.2 1653.47,1014.52 1542.17,965.23 "/>
   <polygon className={classes.fil6} x="1050" y="500" onClick={changePosition} points="1355.83,720.74 1326.35,708.89 1422.88,676.25 1425.68,677.33 1428.48,678.4 1452.46,687.61 "/>
  </g>
  <polygon className={classes.fil10} x="1800" y="1200" onClick={changePosition} points="1659.55,1451.73 2120.3,1205 2121.53,1205.54 2543.2,1390.84 2091.16,1686.89 "/>
  <polygon className={classes.fil11} x="400" y="900" onClick={changePosition} points="610.89,1466.07 132.13,1117.95 129.7,1116.18 692.14,925.72 694.8,927.17 1208.52,1207.23 "/>
  <polygon className={classes.fil12} x="800" y="1400" onClick={changePosition} points="610.89,1466.07 1208.52,1207.23 2091.16,1686.89 1589.46,2017.01 1576.96,2024.35 1563.29,2030.77 1548.59,2036.19 1533.03,2040.54 1516.81,2043.75 1500.12,2045.8 1483.15,2046.64 1466.12,2046.27 1449.23,2044.7 1432.69,2041.93 1416.7,2038.02 1401.45,2033.02 1387.12,2026.98 1373.87,2019.99 1361.86,2012.14 "/>
  <polygon className={classes.fil13} points="1056.65,143.17 1076.97,617.53 1004.29,588.14 982.1,158.46 "/>
  <polygon className={classes.fil13} points="675.65,751.17 674.53,739.26 681.68,742.77 682.8,754.71 "/>
  <polygon className={classes.fil14} points="982.1,158.46 1004.29,588.14 669.51,685.96 668.42,674.32 801.27,635.8 767.84,202.42 789.03,198.07 820.91,625.32 821.26,630.01 994.44,579.8 972.3,160.47 "/>
  <polygon className={classes.fil3} points="669.51,685.96 1004.29,588.14 1076.97,617.53 1084.4,620.54 681.68,742.77 674.53,739.26 "/>
  <polygon className={classes.fil2} points="994.44,579.8 821.26,630.01 820.91,625.32 987.75,577.1 "/>
  <polygon className={classes.fil15} points="972.3,160.47 994.44,579.8 987.75,577.1 965.49,161.87 "/>
  <polygon className={classes.fil15} points="767.84,202.42 801.27,635.8 794.7,632.9 761.26,203.77 "/>
  <polygon className={classes.fil2} points="801.27,635.8 668.42,674.32 667.97,669.52 794.7,632.9 "/>
  <polygon className={classes.fil14} points="682.8,754.71 681.68,742.77 1084.4,620.54 1084.87,631.74 "/>
  <polygon className={classes.fil16} points="987.75,577.1 820.91,625.32 789.03,198.07 965.49,161.87 "/>
  <polygon className={classes.fil16} points="761.26,203.77 794.7,632.9 667.97,669.52 626.75,231.37 "/>
  <polygon className={classes.fil14} points="722.64,903.7 701.59,910.78 687.59,759.73 709.11,753.12 "/>
  <polygon className={classes.fil14} points="1049.95,648.46 1068.64,642.73 1074.91,785.2 1056.58,791.36 "/>
  <polygon className={classes.fil14} points="722.64,903.7 709.11,753.12 730.45,746.57 743.53,896.67 "/>
  <polygon className={classes.fil14} points="743.53,896.67 730.45,746.57 751.63,740.07 764.25,889.7 "/>
  <polygon className={classes.fil14} points="764.25,889.7 751.63,740.07 772.63,733.62 784.81,882.79 "/>
  <polygon className={classes.fil14} points="784.81,882.79 772.63,733.62 793.47,727.22 805.21,875.92 "/>
  <polygon className={classes.fil14} points="805.21,875.92 793.47,727.22 814.14,720.87 825.46,869.11 "/>
  <polygon className={classes.fil14} points="825.46,869.11 814.14,720.87 834.64,714.58 845.54,862.36 "/>
  <polygon className={classes.fil14} points="845.54,862.36 834.64,714.58 854.99,708.33 865.47,855.65 "/>
  <polygon className={classes.fil14} points="865.47,855.65 854.99,708.33 875.17,702.13 885.24,849 "/>
  <polygon className={classes.fil14} points="885.24,849 875.17,702.13 895.2,695.98 904.86,842.4 "/>
  <polygon className={classes.fil14} points="904.86,842.4 895.2,695.98 915.07,689.88 924.34,835.85 "/>
  <polygon className={classes.fil14} points="924.34,835.85 915.07,689.88 934.79,683.83 943.66,829.35 "/>
  <polygon className={classes.fil14} points="943.66,829.35 934.79,683.83 954.36,677.82 962.84,822.9 "/>
  <polygon className={classes.fil14} points="962.84,822.9 954.36,677.82 973.77,671.86 981.87,816.5 "/>
  <polygon className={classes.fil14} points="981.87,816.5 973.77,671.86 993.04,665.94 1000.76,810.14 "/>
  <polygon className={classes.fil14} points="1000.76,810.14 993.04,665.94 1012.15,660.07 1019.5,803.84 "/>
  <polygon className={classes.fil14} points="1019.5,803.84 1012.15,660.07 1031.13,654.25 1038.11,797.58 "/>
  <polygon className={classes.fil14} points="1038.11,797.58 1031.13,654.25 1049.95,648.46 1056.58,791.36 "/>
  <polygon className={classes.fil17} x="800" y="700" onClick={changePosition} points="1653.47,1014.52 1208.52,1207.23 692.14,925.72 1120.53,778.5 "/>
  <polygon className={classes.fil18} points="1403.32,2036.86 1394.17,2033.27 1385.42,2029.31 1377.1,2024.97 1369.24,2020.28 1361.89,2015.28 130.12,1118.63 142.15,1189.15 1362.71,2105.11 1369.97,2110.2 1377.72,2114.96 1385.93,2119.38 1394.56,2123.41 1403.59,2127.06 1412.95,2130.28 1422.63,2133.08 1432.56,2135.43 1442.7,2137.33 1453,2138.76 1463.42,2139.71 1473.9,2140.19 1484.4,2140.18 1494.87,2139.7 1505.25,2138.73 1515.49,2137.29 1525.56,2135.38 1535.39,2133.01 1544.95,2130.2 1554.19,2126.96 1563.07,2123.31 1571.54,2119.27 1579.58,2114.84 1587.14,2110.07 2886.66,1231.55 2900.69,1159.97 1589.38,2020.16 1581.72,2024.85 1573.58,2029.2 1564.99,2033.17 1555.99,2036.77 1546.63,2039.95 1536.94,2042.71 1526.97,2045.04 1516.77,2046.91 1506.38,2048.33 1495.86,2049.28 1485.25,2049.76 1474.6,2049.77 1463.98,2049.3 1453.41,2048.36 1442.97,2046.96 1432.69,2045.09 1422.62,2042.78 1412.82,2040.03 "/>
  
  <g clip-path="url(#id0)">
   <image x="1417.05" y="0" width="696.02" height="879.18" xlinkHref="./room_Images/room_ImgID1.png"/>
  </g>
  <g className={classes.none} clip-path="url(#id1)">
   <image x="449.52" y="1090.36" width="571.04" height="275.82" xlinkHref="./room_Images/room_ImgID2.png"/>
  </g>
  <g clip-path="url(#id2)">
   <image x="1100.29" y="301.68" width="265.05" height="512.85" xlinkHref="./room_Images/room_ImgID3.png"/>
  </g>
  <g clip-path="url(#id3)">
   <image x="2414.75" y="969.68" width="402.96" height="249.96" xlinkHref="./room_Images/room_ImgID4.png"/>
  </g>
  <g clip-path="url(#id4)">
   <image x="145.69" y="799.45" width="644.3" height="400.8" xlinkHref="./room_Images/room_ImgID5.png"/>
  </g>
  <g clip-path="url(#id5)">
   <image x="1475.23" y="642.15" width="305.99" height="256.43" xlinkHref="./room_Images/room_ImgID6.png"/>
  </g>
  <g clip-path="url(#id6)">
   <image x="992.54" y="1226.11" width="663.69" height="568.88" xlinkHref="./room_Images/room_ImgID7.png"/>
  </g>
  <g clip-path="url(#id7)">
   <image x="673.63" y="527.94" width="101.28" height="176.7" xlinkHref="./room_Images/room_ImgID8.png"/>
  </g>
  <g clip-path="url(#id8)">
   <image x="787.83" y="506.39" width="99.12" height="170.23" xlinkHref="./room_Images/room_ImgID9.png"/>
  </g>
  <g  clip-path="url(#id9)">
   <image x="908.51" y="474.07" width="94.81" height="168.08" xlinkHref="./room_Images/room_ImgID10.png"/>
  </g>
  <g className={classes.cat} clip-path="url(#id44)">
   <image x={coord.x} y={coord.y} width="644.3" height="400.8" xlinkHref="./room_Images/cat.png"/>
  </g>
 </g>
</svg>
    </div>
  );
};

export default Room;
