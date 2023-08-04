document.addEventListener("DOMContentLoaded", function () {
  const meta = document.createElement("meta");
  meta.httpEquiv = "Permissions-Policy";
  meta.content = "interest-cohort=()";
  document.head.appendChild(meta);
});
