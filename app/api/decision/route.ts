import{ NextResponse } from "next/server";

export async function POST(req: Request){
  const{ problem } = await req.json();

  return NextResponse.json({
    receivedProblem: problem,
  });//Next：replace mock data with real API call
}
