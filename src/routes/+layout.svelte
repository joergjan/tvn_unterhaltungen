<script lang="ts">
  import "../app.css";
  import "../fonts.css";
  import { dev } from "$app/environment";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";
  import SEO from "$lib/components/SEO.svelte";
  import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";
  import { toggleMode, ModeWatcher, mode } from "mode-watcher";
  import { Button } from "$lib/components/ui/button/index.js";
  import Divider from "$lib/components/Divider.svelte";

  injectAnalytics({ mode: dev ? "development" : "production" });

  let { children, data } = $props();
</script>

<ModeWatcher />

<SEO />

<nav>
  <div class="mx-auto max-w-7xl px-4 xl:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="flex items-center">
        <a href="/">
          {#if $mode === "light"}
            <img
              class="-mt-2 h-10 lg:h-12 xl:mt-0"
              src="/tvn_logo_black.png"
              alt=""
            />
          {:else}
            <img
              class="-mt-2 h-10 lg:h-12 xl:mt-0"
              src="/tvn_logo_white.png"
              alt=""
            />
          {/if}
        </a>
      </div>

      <div class="group block xl:ml-6 xl:hidden">
        <div class="flex items-center">
          <div class="-mr-2 flex xl:hidden">
            <!-- Mobile menu button -->
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

<main class="mx-auto mt-10 max-w-7xl px-6 xl:mt-14 xl:px-8">
  <Divider />

  {@render children?.()}
</main>

<footer>
  <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 xl:px-8 xl:py-24">
    <Divider />

    <div class="flex justify-center">
      <Button onclick={toggleMode} variant="outline" size="icon">
        <Sun
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Moon
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </div>

    <p class="mt-10 text-center text-sm/6 text-gray-400">
      &copy; {new Date().getFullYear()} TV Nussbaumen
    </p>
  </div>
</footer>
