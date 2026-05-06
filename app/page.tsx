'use client' // 关键：必须加这一行，不然不能用 useState / useEffect

import { useState, useEffect } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState('')

  // 👉 改成你自己的后端 API 地址
  const apiUrl = 'http://localhost:3000/api/zhihu'

  const fetchData = async () => {
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const res = await fetch(apiUrl)
      if (!res.ok) throw new Error('接口请求失败')
      const data = await res.json()
      setResult(data)
    } catch (err: any) {
      setError(err.message || '请求出错')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={{ padding: '30px', fontFamily: 'system-ui' }}>
      <h2>知乎圈子列表</h2>

      <button
        onClick={fetchData}
        disabled={loading}
        style={{ padding: '8px 16px', cursor: 'pointer' }}
      >
        {loading ? '加载中...' : '点击获取圈子列表'}
      </button>

      <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #eee' }}>
        <h4>返回结果：</h4>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {result && (
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
            {JSON.stringify(result, null, 2)}
          </pre>
        )}
      </div>
    </main>
  )
}