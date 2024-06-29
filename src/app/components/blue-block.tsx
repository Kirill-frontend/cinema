'use client'
import React from "react";

export default function BlueBlock({children}: {children: React.ReactNode}) { 
 return (
  <>  
    <div className="blue_block bg-blue-block">
      { children }
    </div>
  </>
 ); 
 }