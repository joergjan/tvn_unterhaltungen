<script>
  import "../app.css";
  import Logo from "$lib/components/Logo.svelte";
</script>

<main class="p-5 break-all">
  <div class="flex items-center justify-center mb-5">
    <Logo className="h-16 md:h-20" />
  </div>

  <slot />
</main>
