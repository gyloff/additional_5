module.exports = function check(str, bracketsConfig) {
 var st = [];
 var kof = 0;
 for (var g = 0; g < str.length; g++){
   if (str[g] == '2') str[g] = '1';
   if (str[g] == '4') str[g] = '3'; 
   if (str[g] == '6') str[g] = '5';
 }
 for (var k = 0; k < bracketsConfig.length; k++){
  if (bracketsConfig[k][1] == '2') bracketsConfig[k][1] = '1';
  if (bracketsConfig[k][1] == '4') bracketsConfig[k][1] = '3';
  if (bracketsConfig[k][1] == '6') bracketsConfig[k][1] = '5';
}
 for (var i = 0; i < str.length; i++){
   for (var j = 0; j < bracketsConfig.length; j++){
    if (bracketsConfig[j][0] == bracketsConfig[j][1] && bracketsConfig[j][0] == str[i]){
       if (bracketsConfig[j][0] != st[st.lenght-1]) {
         st.push(str[i]);
         kof++;
         break;
       }else{
         if (bracketsConfig[j][0] == st[st.lenght-1]){
           st.pop();
           kof--;
           break;
         }
       }
     }
     if (str[i] == bracketsConfig[j][0]){
       st.push(str[i]);
       kof++;
       break;
     }else {
       if (str[i] == bracketsConfig[j][1] && bracketsConfig[j][0] == st[st.length-1]){
         st.pop();
         kof--;
         break;
       }
     }
    }
 }
 if (kof == 0) return true; else return false;
}
