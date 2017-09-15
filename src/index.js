module.exports = function check(str, bracketsConfig) {
 var st = [];
 for (var i = 0; i < str.length; i++){
   for (var j = 0; j < bracketsConfig.length; j++){
    if (bracketsConfig[j][0] == bracketsConfig[j][1] && bracketsConfig[j][0] == str[i]){
      if (st[st.length-1] == 0 || st[st.length-1] != str[i]) {
         st.push(str[i]);
         break;
       }else {
           st.pop();
           break;
       }
     }
     if (str[i] == bracketsConfig[j][0]){
       st.push(str[i]);
       break;
     }else 
        if (str[i] == bracketsConfig[j][1]){
          if(st.length != 0){
            if (bracketsConfig[j][0] == st[st.length-1]){
              st.pop();
              break;
            }  else return false;    
          }  else return false;
        }
      }
    }
 return (st.length == 0);
}
