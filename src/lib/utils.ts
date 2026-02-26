export function decodeToParam(raw: string | null) {
  if (!raw) return "";
  // URLSearchParams sudah decode %20, tapi kadang link pakai + untuk spasi
  return raw.replace(/\+/g, " ").trim();
}
