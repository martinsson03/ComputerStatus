import { stopDesktop } from "@/app/lib/server/control";

// Endpoint for stopping a desktop
export async function GET(request: Request): Promise<Response> {
  console.log("Inside GET")
  const url = new URL(request.url);
  const id_str: string | null = url.searchParams.get("id");
  if (!id_str){
    return new Response("Invalid request, missing id!", { status: 400 });
  }

  const id_num: number = parseInt(id_str, 10)
  if (isNaN(id_num)) {
    return new Response("Invalid request, unable to parse id!", { status: 400 });
  }

  try {
    await stopDesktop(id_num);
    console.log("After stop")

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (err) {
    console.log("Error caught")
    console.error(err);

    return new Response(
      JSON.stringify({ error: "Failed to stop desktop." }),
      { status: 500 }
    );
  }
}
