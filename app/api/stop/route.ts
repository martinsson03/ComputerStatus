import { stopDesktop } from "@/app/services/server/control";

// Endpoint for stopping a desktop
export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return new Response("Invalid request, missing id!", { status: 400 });
  }

  try {
    await stopDesktop(id);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);

    return new Response(
      JSON.stringify({ error: "Failed to stop desktop." }),
      { status: 500 }
    );
  }
}
