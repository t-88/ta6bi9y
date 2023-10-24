<script context="module">
    export function init({ page }) {
      if (page.path === "/") {
        return {
          status: 302,
          headers: {
            location: "/layout_interface",
          },
        };
      }
    }
  </script>