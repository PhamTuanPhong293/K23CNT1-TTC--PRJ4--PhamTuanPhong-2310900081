function loadProfile() {
    const user = getUser();

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=d4af37&color=fff&size=80&bold=true`;
    document.getElementById("profile-avatar").src = avatarUrl;
    document.getElementById("profile-name").innerText = user.name || "Người dùng";
    document.getElementById("profile-username").value = user.username || "";
    document.getElementById("profile-email").value = user.email || "";
    document.getElementById("profile-phone").value = user.phone || "";

    const roleEl = document.getElementById("profile-role");
    if (roleEl) {
        if (user.roleId === 1) roleEl.innerText = "Admin";
        else if (user.roleId === 2) roleEl.innerText = "Quản lý";
        else roleEl.innerText = "Khách hàng";
    }
}

loadProfile();