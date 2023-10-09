<template>
	<div>
		<header>
			<nav>
				<NuxtLink to="/">Nuxt Dojo</NuxtLink>
				<ul>
					<li><NuxtLink to="/">Home</NuxtLink></li>
					<li><NuxtLink to="/about">About</NuxtLink></li>
					<li><NuxtLink to="/products">Products</NuxtLink></li>
				</ul>
				<a href="/">normal link</a>
			</nav>
		</header>

		<h2>Home</h2>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Odio voluptates cumque animi ipsa, dicta beatae molestias
			est consequatur accusantium tempore.</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Odio voluptates cumque animi ipsa, dicta beatae molestias
			est consequatur accusantium tempore.</p>
	</div>
</template>

<script setup>

</script>

<style scoped>
h2 {
	margin-bottom: 20px;
	font-size: 36px;
}

p {
	margin: 20px 0;
}
</style>