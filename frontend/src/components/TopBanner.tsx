<div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
<a href="/login" className="login-link">Login</a>
<button 
    onClick={() => setMenuOpen(!menuOpen)}
    style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0.5rem"
    }}
>
    <Menu style={{ width: "24px", height: "24px", color: "inherit" }} />
</button>
</div>
</div>
</header>

{/* Menu Component - Only Shows When menuOpen is True */}
{menuOpen && <MenuPage />}