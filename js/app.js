const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

const MOCK_USER = {
  email: "demo@equipo.com",
  password: "123456"
};

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "").trim();

  if (!email || !password) {
    showMessage("Completa todos los campos.", "error");
    return;
  }

  // Login temporal: reemplazar por llamada al backend.
  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    sessionStorage.setItem("authUser", JSON.stringify({ email }));
    showMessage("Inicio de sesion exitoso.", "success");
    return;
  }

  showMessage("Credenciales invalidas.", "error");
});

function showMessage(message, type) {
  loginMessage.textContent = message;
  loginMessage.className = `login-message ${type}`;
}
