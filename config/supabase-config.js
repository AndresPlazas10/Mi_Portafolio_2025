// Configuración de Supabase para producción
const supabaseConfig = {
    url: process.env.SUPABASE_URL || 'your-supabase-url',
    anonKey: process.env.SUPABASE_ANON_KEY || 'your-anon-key',
    
    // URLs de redirección para diferentes entornos
    redirectUrls: {
        development: 'http://localhost:3000/auth/callback',
        production: window.location.origin + '/auth/callback'
    }
};

// Función para obtener la URL de redirección correcta
function getRedirectUrl() {
    if (window.location.hostname === 'localhost') {
        return supabaseConfig.redirectUrls.development;
    }
    return supabaseConfig.redirectUrls.production;
}

// Exportar configuración
window.supabaseConfig = supabaseConfig;
window.getRedirectUrl = getRedirectUrl;