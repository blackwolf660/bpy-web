<script>
	import { goto } from '$app/navigation';
	import { appName } from '$lib/env';
</script>

<svelte:head>
	<title>{appName} :: Home</title>
</svelte:head>

<div class="h-full w-screen">
	<div class="bg-pink-800/40 w-screen h-[500px]">
		<div class="h-full flex flex-col justify-center items-center text-center gap-5">
			<div class="flex flex-col gap-2">
				<h1 class="h1 font-bold">{appName}</h1>
				<h4 class="h4">
					bpy-web is a frontend for bancho.py made with modern frameworks for the best user
					experience.
				</h4>
			</div>
			<div class="flex flex-row gap-3">
				<button class="btn variant-filled-surface rounded-lg" on:click={() => goto('/register')}>
					Sign Up
				</button>
				<button class="btn bg-pink-600 rounded-lg" on:click={() => goto('/login')}> Login </button>
			</div>
		</div>
	</div>
	<div class="w-screen"></div>
</div>
