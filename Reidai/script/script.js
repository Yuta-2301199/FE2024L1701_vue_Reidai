// JavaScript用ファイル
new Vue({
    el: '#app',
    
    data() {
      return {
        inputPassword: null,
        password_confirmation: null 
      };
    },
    computed: {
      // 入力されている、且つパスワードが一致しているかを確認する算出プロパティ
      // 入力されているかは、this.･･･ で判定可能
      // 例）一致TRUE（パスワード：aaaa、パスワード確認：aaaa）
      // 例）不一致FALSE（パスワード：aaaa、パスワード確認：aaab）
      passwordCheck: function(){
        if(this.inputPassword != null && this.password_confirmation != null && this.inputPassword == this.password_confirmation){
          return true;
        }
      },
      // ボタンをTRUEなら登録を表示orFALSEなら使用不可を表示にする算出プロパティ
      passwordCheckMissMatch: function(){
        if(this.inputPassword != null && this.password_confirmation != null && this.inputPassword != this.password_confirmation){
          return true;
        }
      }
    }
  });