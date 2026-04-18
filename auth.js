// ═══════════════════════════════════════
//  auth.js — AnimeSA Shared Auth System
//  Include this on ALL pages
// ═══════════════════════════════════════

document.addEventListener("DOMContentLoaded", function () {
  const userSection = document.getElementById("user-section");
  if (!userSection) return;

  const currentUser = localStorage.getItem("asa_current_user");

  if (currentUser) {
    // ── Logged in: show username + logout button ──
    userSection.innerHTML = `
      <span class="nav-username">👤 ${currentUser}</span>
      <a href="javascript:void(0)" class="nav-logout" onclick="logoutUser()">Logout</a>
    `;
  } else {
    // ── Not logged in: show login button ──
    userSection.innerHTML = `
      <a href="login.html" class="nav-login">Login / Sign Up</a>
    `;
  }
});

function logoutUser() {
  localStorage.removeItem("asa_current_user");
  window.location.reload();
}














