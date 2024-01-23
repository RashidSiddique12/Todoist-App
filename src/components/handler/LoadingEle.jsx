import { LoadingOutlined } from '@ant-design/icons'
import { Progress, Spin } from 'antd'
import React from 'react'

function LoadingEle() {
  return (
    <div style={{display : "flex", justifyContent:"center"}} >
     <Spin
    indicator={
      <LoadingOutlined
        style={{
          fontSize: 35,
          
        }}
        spin
      />
    }/>
    </div>
  )
}

export default LoadingEle
