module.exports = function check( bracketsConfig) {
 var st = [];
 var kof = 0;
// |()|(||)||                                 [['(', ')'], ['|', '|']];
 for (var i = 0; i < str.length; i++){
   for (var j = 0; j < bracketsConfig.length; j++){
     if (bracketsConfig[j][0] == bracketsConfig[j][1] && bracketsConfig[j][0] != str[i]){
       if (bracketsConfig[j][0] != st[st.lenght-1]) {
         st.push(str[i]);
         kof++;
         break;
       }else{
         if (bracketsConfig[j][0] == st[st.lenght-1]){
           st.pop;
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
         st.pop;
         kof--;
         break;
       }
     }
    }
 }
 if (kof == 0) return true; else return false;
}
