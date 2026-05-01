"use client";

import{ useState } from "react";

export default function DecisionPanel(){
  const [result, setResult] = useState<any>(null);

  const handleClick = async () =>{
    const res = await fetch("/api/decision",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({problem: "我要不要报名 A2A 黑客松"})
    });

    const data = await res.json();
    console.log(data);
    setResult(data);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          background: "black",
          color: "white",
          borderRadius: "6px",
        }}
      >
        测试 API
      </button>{result && (
        <pre style={{ marginTop: "20px" }}>{JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}