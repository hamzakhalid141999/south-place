import Contact from '@/components/contact'
import DevelopmentBanner from '@/components/development/banner/index'
import MasterDevelopment from '@/components/development/master-development'
import Retail from '@/components/development/retail'
import Timeline from '@/components/development/timeline'
import React from 'react'

function Development() {
  return (
    <div className='w-full h-full'>
        <DevelopmentBanner />
        <MasterDevelopment />
        <Timeline />
        <Retail />
        <Contact />
    </div>
  )
}

export default Development