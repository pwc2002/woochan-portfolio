import { SECTION_TITLE } from '@/constants/constants'
import React from 'react'
import Layout from '../common/Layout'

const AboutMe = () => {
  return (
    <Layout title={SECTION_TITLE.aboutMe}>
      <div> 안녕하세요 </div>
    </Layout>
  )
}

export default AboutMe