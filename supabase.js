const SUPABASE_URL = "https://eqfwsvkvhbnrfephyhyb.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_LPUgLl1SedL7e4hBgLa3LQ_HEedHNFS";

async function getPublicObject(token) {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/rpc/get_public_object`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_PUBLISHABLE_KEY,
        "Authorization": `Bearer ${SUPABASE_PUBLISHABLE_KEY}`
      },
      body: JSON.stringify({
        p_token: token
      })
    }
  );

  if (!response.ok) {
    throw new Error("No se pudo consultar el objeto NFC.");
  }

  return await response.json();
}
