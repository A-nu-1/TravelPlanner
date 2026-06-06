interface GeocodeResult {
  country: string;
  formattedAddress: string;
}

export async function getCountryFromCoordinates(
  lat: number,
  lng: number
): Promise<GeocodeResult> {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
    {
      headers: {
        "User-Agent": "travel-planner/1.0 (https://example.com)",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Reverse geocoding lookup failed");
  }

  const data = await response.json();

  return {
    country: data.address?.country || "Unknown",
    formattedAddress: data.display_name || "Unknown",
  };
}