import React, { Component} from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';



function Facebook() {
  return (
    <div>
        <FacebookProvider appId="326590599749276" chatSupport>
        <CustomChat pageId="141903855663776" minimized={true}/>
      </FacebookProvider>  
    </div>
  )
}

export default Facebook