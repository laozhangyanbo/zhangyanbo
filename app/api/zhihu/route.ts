export async function GET(){

  const res = await fetch("https://developer.zhihu.com/api/v1/content/zhihu_search",{
    headers:{
      Authorization: `Bearer ${process.env.ZHIHU_ACCESS_SECRET}`
    }
  })

  const data = await res.json()

  console.log(data)

  return Response.json(data)
}