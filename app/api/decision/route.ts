export async function GET(){
  return NextResponse.json({ ok: true });
}
import{ NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";
export async function POST(req: Request){ 
const appKey = "zhang-yan-bo-73-91"; 
const appSecret = "NjjnWog8UAR6RjO6i3sGpzpmwNEe5z6i"; 
const timestamp = Math.floor(Date.now() / 1000).toString();
const logId = `request_${Date.now()}`; const extraInfo = ""; 
const signStr = `app_key:${appKey}|ts:${timestamp}|logid:${logId}|extra_info:${extraInfo}`; 
const sign = crypto .createHmac("sha256", appSecret) .update(signStr) .digest("base64"); 
const response = await fetch( "https://openapi.zhihu.com/openapi/comment/create",{ method: "POST", headers:{ "Content-Type": "application/json", "X-App-Key": appKey, "X-Timestamp": timestamp, "X-Log-Id": logId, "X-Sign": sign, "X-Extra-Info": extraInfo, }, body: JSON.stringify({ content: "测试评论" }), } );
const data = await response.text();

return NextResponse.json({
  status: response.status,
  data});
}