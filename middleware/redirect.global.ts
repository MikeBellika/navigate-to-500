export default defineNuxtRouteMiddleware(async (to) => {
  return navigateTo("https://google.com/", { external: true });
});
