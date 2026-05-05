import{ NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

export async function GET(){
  const appKey = "zhang-yan-bo-73-91";
  const appSecret = "NjjnWog8UAR6RjO6i3sGpzpmwNEe5z6i";

  const timestamp = Math.floor(Date.now() / 1000).toString();
  const logId = `request_${Date.now()}`;
  const extraInfo = "";

  const signStr = `app_key:${appKey}|ts:${timestamp}|logid:${logId}|extra_info:${extraInfo}`;
  const sign = crypto
    .createHmac("sha256", appSecret)
    .update(signStr)
    .digest("base64");

  const ringId = "2001009660925334090";

  const response = await fetch(
    `https://openapi.zhihu.com/openapi/ring/detail?ring_id=${ringId}`,{
      method: "GET",
      headers:{
        "X-App-Key": appKey,
        "X-Timestamp": timestamp,
        "X-Log-Id": logId,
        "X-Sign": sign,
        "X-Extra-Info": extraInfo,
      },
    }
  );

  const data = await response.json();
  console.log("圈子详情：", data);

  return NextResponse.json(data);
}