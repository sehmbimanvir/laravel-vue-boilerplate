<template>
  <nav id="header" class="fixed w-full z-10 top-0">

		<div id="progress" class="h-1 z-20 top-0" style="background:linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0);"></div>

		<div class="w-full md:max-w-5xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">

			<div class="pl-4">
				<a class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl" href="#">
					Larave + Vue
				</a>
			</div>

			<div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20" id="nav-content">
				<ul class="list-reset lg:flex justify-end flex-1 items-center">
          <template v-if="!isLoggedIn">
            <li class="mr-3">
              <router-link :to="{name: 'auth.login'}" class="inline-block py-2 px-4 text-gray-900 no-underline">Login</router-link>
            </li>
            <li class="mr-3">
              <router-link :to="{name: 'auth.register'}" class="inline-block py-2 px-4 text-gray-900 no-underline">Register</router-link>
            </li>
          </template>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('AuthStore', [
      'user', 'isLoggedIn'
    ])
  },
}
</script>
