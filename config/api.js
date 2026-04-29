/**
 * API Configuration
 * 
 * Ganti IP_ADDRESS dengan IP laptop Anda jika berubah
 * Cara cek IP:
 * - Windows: ipconfig di CMD
 * - Mac/Linux: ifconfig di Terminal
 */

// IP Address laptop Anda saat ini
const IP_ADDRESS = "10.1.9.195";

// Port backend Spring Boot
const PORT = "8080";

// Base URL untuk semua API calls
export const BASE_URL = `http://${IP_ADDRESS}:${PORT}/api/presensi`;

// Endpoint URLs
export const API_ENDPOINTS = {
  // POST: Menyimpan presensi baru
  CREATE_PRESENSI: BASE_URL,
  
  // GET: Mengambil riwayat presensi dengan pagination
  GET_HISTORY: (nimMhs, page = 0, size = 10) => 
    `${BASE_URL}/history/${nimMhs}?page=${page}&size=${size}`,
};

// Export untuk debugging
export const API_CONFIG = {
  IP_ADDRESS,
  PORT,
  BASE_URL,
};

// Log configuration saat development
if (__DEV__) {
  console.log('📡 API Configuration:', API_CONFIG);
}
